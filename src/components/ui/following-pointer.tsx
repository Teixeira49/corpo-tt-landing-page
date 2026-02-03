
"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState, useRef } from "react";

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={cn("relative", className)}
      ref={ref}
    >
      {children}
      {isInside && <FollowerPointer x={x} y={y} title={title} />}
    </div>
  );
};

export const FollowerPointer = ({
  x,
  y,
  title,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
}) => {

  const springConfig = { damping: 25, stiffness: 200 };
  const x_spring = useSpring(x, springConfig);
  const y_spring = useSpring(y, springConfig);

  return (
    <motion.div
      style={{
        x: x_spring,
        y: y_spring,
      }}
      className="pointer-events-none absolute left-0 top-0 z-50"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-12 transform text-sky-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      {title && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="whitespace-nowrap rounded-full bg-neutral-800 px-4 py-2 text-xs text-white"
        >
          {title}
        </motion.div>
      )}
    </motion.div>
  );
};
