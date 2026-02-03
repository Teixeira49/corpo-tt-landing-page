"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function CardSpotlight({
  children,
  className,
  spotlightColor,
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const defaultSpotlightColor = "rgba(255, 255, 255, 0.2)";

  return (
    <div
      className={cn(
        "group relative w-full rounded-xl border border-white/10 bg-zinc-900 shadow-2xl p-0 overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor || defaultSpotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div>{children}</div>
    </div>
  );
}
