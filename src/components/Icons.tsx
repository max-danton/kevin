import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PlankIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="4.5" rx="1" />
      <rect x="2" y="9.75" width="20" height="4.5" rx="1" />
      <rect x="2" y="15.5" width="20" height="4.5" rx="1" />
      <path d="M9 4v4.5M15.5 9.75v4.5M7 15.5v4.5" />
    </svg>
  );
}

export function SanderIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="13" width="18" height="6" rx="1.5" />
      <path d="M7 13V9a2 2 0 0 1 2-2h2" />
      <path d="M11 7V5.5a1.5 1.5 0 0 1 3 0V7" />
      <path d="M6 19v1.5M18 19v1.5" />
    </svg>
  );
}

export function RenovationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 3.5a3.5 3.5 0 0 0-4.6 4.6l-6 6a1.8 1.8 0 0 0 2.5 2.5l6-6a3.5 3.5 0 0 0 4.6-4.6l-2.2 2.2-2-.4-.4-2z" />
      <path d="M15 15l5.5 5.5" />
      <path d="M18 13.5l2.5 2.5" />
    </svg>
  );
}

export function StairsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h4v-4h5v-4h5V8h4" />
      <path d="M3 20V16M7 16v-4M12 12V8M17 8V4" />
    </svg>
  );
}

export function TerraceIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 20h20" />
      <path d="M4 20l2-9h12l2 9" />
      <path d="M6.4 15.5h11.2" />
      <path d="M12 11V4" />
      <path d="M9 6.5l3-2.5 3 2.5" />
    </svg>
  );
}

export function SkirtingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17h18" />
      <path d="M3 20h18" />
      <path d="M5 17V7h14v10" />
      <path d="M9 17V11h6v6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12.5 5 5 11-11" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.6 5.4c-3.4 1.5-5.6 4.6-5.6 8.4 0 3 1.8 5 4.3 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.7 1.9-3.4 3.9-4.4l-2.1-2zm10 0c-3.4 1.5-5.6 4.6-5.6 8.4 0 3 1.8 5 4.3 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.7 1.9-3.4 3.9-4.4l-2.1-2z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export const serviceIcons = {
  plank: PlankIcon,
  sander: SanderIcon,
  renovation: RenovationIcon,
  stairs: StairsIcon,
  terrace: TerraceIcon,
  skirting: SkirtingIcon,
} as const;
