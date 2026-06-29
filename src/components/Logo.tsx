import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  prefix?: string;
}

export function Logo({
  className,
  showWordmark = true,
  size = "md",
  prefix = "logo",
}: LogoProps) {
  const iconSize = size === "sm" ? 28 : size === "md" ? 34 : 44;
  const gradMain = `${prefix}-grad`;
  const gradCircuit = `${prefix}-circuit`;
  const gradBg = `${prefix}-bg`;

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-display font-bold tracking-tight",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg",
        className
      )}
      aria-label="Exiate Technologies — Home"
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient
            id={gradMain}
            x1="2"
            y1="2"
            x2="38"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5b78ff" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient
            id={gradCircuit}
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#5b78ff" />
          </linearGradient>
          <linearGradient
            id={gradBg}
            x1="2"
            y1="2"
            x2="38"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5b78ff" stopOpacity="0.15" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Hexagonal background */}
        <path
          d="M20 3 L35 11.5 L35 28.5 L20 37 L5 28.5 L5 11.5 Z"
          fill={`url(#${gradBg})`}
        />
        <path
          d="M20 3 L35 11.5 L35 28.5 L20 37 L5 28.5 L5 11.5 Z"
          stroke={`url(#${gradMain})`}
          strokeWidth="1.5"
          fill="none"
        />

        {/* X crosshairs */}
        <path
          d="M12 12 L20 20 L28 28"
          stroke={`url(#${gradMain})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M28 12 L20 20 L12 28"
          stroke={`url(#${gradMain})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Corner nodes */}
        <circle cx="12" cy="12" r="2.5" fill={`url(#${gradMain})`} />
        <circle cx="28" cy="12" r="2.5" fill={`url(#${gradMain})`} />
        <circle cx="12" cy="28" r="2.5" fill={`url(#${gradMain})`} />
        <circle cx="28" cy="28" r="2.5" fill={`url(#${gradMain})`} />

        {/* Center hub */}
        <circle cx="20" cy="20" r="4.5" fill={`url(#${gradMain})`} />
        <circle cx="20" cy="20" r="2" fill={`url(#${gradCircuit})`} />
      </svg>

      {showWordmark && (
        <span
          className={cn(
            "select-none",
            size === "sm" && "text-base",
            size === "md" && "text-lg",
            size === "lg" && "text-2xl"
          )}
        >
          <span className="text-foreground">Exiate</span>
          <span className="text-gradient ml-1">Technologies</span>
        </span>
      )}
    </Link>
  );
}
