
"use client";
import { cn } from "@/lib/utils";
import React from "react";

export function ColourfulText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-[#8d9fce] to-[#1e429f] text-transparent bg-clip-text",
        className
      )}
    >
      {text}
    </span>
  );
}

export default ColourfulText;

    