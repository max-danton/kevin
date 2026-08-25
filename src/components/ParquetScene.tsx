"use client";

/**
 * Fond animé : un sol en parquet vu de haut, en arrière-plan du hero.
 * Volontairement sobre — matériaux non éclairés, pas d'animation d'entrée,
 * juste une très légère dérive continue pour donner un peu de vie.
 */

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  className?: string;
};

/** PRNG déterministe (mulberry32), même logique que WoodPanel. */
function makeRandom(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PALETTE = [0xe7d3b6, 0xd8bd94, 0xc9ab7f, 0xb08655, 0x9a6a34];

export function ParquetScene({ className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
    camera.position.set(0, 9, 3.2);
    camera.lookAt(0, 0, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    // ─── Groupe du sol : lames statiques, matériau plat (pas de lumières) ───
    const floor = new THREE.Group();
    floor.rotation.y = THREE.MathUtils.degToRad(-14);
    scene.add(floor);

    const rand = makeRandom(20260814);
    const plankWidth = 0.5;
    const gap = 0.03;
    const rows = 20;
    const halfSpan = 9;

    for (let r = 0; r < rows; r++) {
      const z = (r - rows / 2) * plankWidth;
      let x = -halfSpan - ((r * 0.83) % 1.6);
      while (x < halfSpan) {
        const len = 1.25 + rand() * 0.95;
        const color = PALETTE[Math.floor(rand() * PALETTE.length)];
        const geometry = new THREE.PlaneGeometry(
          Math.max(len - gap, 0.1),
          plankWidth - gap,
        );
        const material = new THREE.MeshBasicMaterial({ color });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.set(x + len / 2, 0, z);
        floor.add(mesh);
        x += len;
      }
    }

    // ─── Redimensionnement ──────────────────────────────────────
    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    // ─── Boucle d'animation : une dérive lente, rien de plus ────
    let raf = 0;
    const baseRotation = floor.rotation.y;

    const render = () => {
      resize();
      renderer.render(scene, camera);
    };

    if (reduceMotion) {
      render();
    } else {
      const tick = (timestamp: number) => {
        const t = timestamp / 1000;
        floor.rotation.y = baseRotation + Math.sin(t * 0.18) * 0.06;
        floor.position.x = Math.sin(t * 0.25) * 0.6;
        render();
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      floor.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          (obj.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden className={className} />;
}
