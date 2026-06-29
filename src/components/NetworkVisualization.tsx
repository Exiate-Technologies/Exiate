"use client";

import { motion } from "framer-motion";

// ── Node definitions ──────────────────────────────────────────────────
const NODES = [
  // Center hub
  { id: "c", cx: 250, cy: 250, r: 14, ring: "hub" },
  // Ring 1 — 6 nodes at r=110, 60° steps starting from top
  { id: "r1-0", cx: 250, cy: 140, r: 9, ring: "mid" },
  { id: "r1-1", cx: 345, cy: 195, r: 9, ring: "mid" },
  { id: "r1-2", cx: 345, cy: 305, r: 9, ring: "mid" },
  { id: "r1-3", cx: 250, cy: 360, r: 9, ring: "mid" },
  { id: "r1-4", cx: 155, cy: 305, r: 9, ring: "mid" },
  { id: "r1-5", cx: 155, cy: 195, r: 9, ring: "mid" },
  // Ring 2 — 6 nodes at r=195, offset 30°
  { id: "r2-0", cx: 348, cy: 78, r: 6, ring: "leaf" },
  { id: "r2-1", cx: 445, cy: 250, r: 6, ring: "leaf" },
  { id: "r2-2", cx: 348, cy: 422, r: 6, ring: "leaf" },
  { id: "r2-3", cx: 152, cy: 422, r: 6, ring: "leaf" },
  { id: "r2-4", cx: 55, cy: 250, r: 6, ring: "leaf" },
  { id: "r2-5", cx: 152, cy: 78, r: 6, ring: "leaf" },
];

const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

// ── Connection pairs ──────────────────────────────────────────────────
const EDGES: [string, string][] = [
  // Center → Ring 1
  ["c", "r1-0"], ["c", "r1-1"], ["c", "r1-2"],
  ["c", "r1-3"], ["c", "r1-4"], ["c", "r1-5"],
  // Ring 1 hexagon
  ["r1-0", "r1-1"], ["r1-1", "r1-2"], ["r1-2", "r1-3"],
  ["r1-3", "r1-4"], ["r1-4", "r1-5"], ["r1-5", "r1-0"],
  // Ring 1 → Ring 2
  ["r1-0", "r2-0"], ["r1-0", "r2-5"],
  ["r1-1", "r2-0"], ["r1-1", "r2-1"],
  ["r1-2", "r2-1"], ["r1-2", "r2-2"],
  ["r1-3", "r2-2"], ["r1-3", "r2-3"],
  ["r1-4", "r2-3"], ["r1-4", "r2-4"],
  ["r1-5", "r2-4"], ["r1-5", "r2-5"],
];

function edgePath(aId: string, bId: string) {
  const a = nodeMap[aId];
  const b = nodeMap[bId];
  return `M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`;
}

// ── Component ─────────────────────────────────────────────────────────
export function NetworkVisualization() {
  return (
    <div
      className="relative w-full max-w-[480px] aspect-square"
      style={{ animation: "float-y 7s ease-in-out infinite" }}
    >
      {/* Outer glow orb */}
      <div
        className="absolute inset-8 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #5b78ff 0%, #22d3ee 50%, transparent 75%)",
          filter: "blur(32px)",
        }}
      />

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="relative w-full h-full"
      >
        <defs>
          <linearGradient
            id="nv-main"
            x1="55"
            y1="78"
            x2="445"
            y2="422"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#5b78ff" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="nv-glow-hub" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="0 0 0 0 0.36 0 0 0 0 0.47 0 0 0 0 1 0 0 0 1 0"
              result="col"
            />
            <feMerge>
              <feMergeNode in="col" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nv-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="0 0 0 0 0.36 0 0 0 0 0.47 0 0 0 0 1 0 0 0 0.7 0"
              result="col"
            />
            <feMerge>
              <feMergeNode in="col" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Static structural paths ───────────────── */}
        {EDGES.map(([a, b], i) => (
          <path
            key={`s-${i}`}
            d={edgePath(a, b)}
            stroke="url(#nv-main)"
            strokeWidth="1"
            opacity="0.18"
          />
        ))}

        {/* ── Animated flow dashes ─────────────────── */}
        {EDGES.map(([a, b], i) => (
          <path
            key={`f-${i}`}
            d={edgePath(a, b)}
            stroke="url(#nv-main)"
            strokeWidth="1.5"
            strokeDasharray="5 22"
            strokeLinecap="round"
            opacity="0.65"
            style={{
              animation: "flow-dash 2.8s linear infinite",
              animationDelay: `${((i * 0.22) % 2.8).toFixed(2)}s`,
            }}
          />
        ))}

        {/* ── Nodes ────────────────────────────────── */}
        {NODES.map((node, i) => (
          <g
            key={node.id}
            filter={
              node.ring === "hub" ? "url(#nv-glow-hub)" : "url(#nv-glow)"
            }
          >
            {/* Pulse ring */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r + 5}
              stroke="url(#nv-main)"
              strokeWidth="1"
              fill="none"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: [0.55, 0, 0.55],
                scale: [0.75, 1.5, 0.75],
              }}
              transition={{
                duration: 3.2,
                delay: i * 0.14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Node body */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.ring === "hub" ? "url(#nv-main)" : "#0d1120"}
              stroke="url(#nv-main)"
              strokeWidth={node.ring === "hub" ? 0 : 1.5}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.2 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Hub inner accent dot */}
            {node.ring === "hub" && (
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={5}
                fill="#22d3ee"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
