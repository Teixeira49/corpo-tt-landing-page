"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React, { PropsWithChildren, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface DockProps {
  className?: string;
  mobileClassName?: string;

  items: {
    title: string;
    description?: string;
    icon: React.ReactNode;
    href: string;
  }[];
}

export const FloatingDock = ({
  className,
  mobileClassName,
  items,
}: DockProps) => {
  let mouseX = useMotionValue(Infinity);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <TooltipProvider>
      {/* Non-mobile dock */}
      <div
        ref={containerRef}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "hidden md:flex items-end h-16 pb-3 px-4 rounded-full",
          className
        )}
      >
        <div className="flex items-end h-full gap-x-4">
          {items.map((item, idx) => (
            <DockItem key={`dock-item-${idx}`} mouseX={mouseX} item={item}>
              <Link
                href={item.href}
                className="w-full h-full rounded-full bg-neutral-700/50 flex items-center justify-center"
              >
                {item.icon}
              </Link>
            </DockItem>
          ))}
        </div>
      </div>
      {/* Mobile dock */}
      <div
        className={cn(
          "flex md:hidden items-end h-16 pb-3 px-4 rounded-full",
          mobileClassName
        )}
      >
        <div className="flex items-end h-full gap-x-4">
          {items.map((item, idx) => (
             <Tooltip key={`mobile-dock-item-${idx}`}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className="w-12 h-12 relative"
                >
                  <div className="w-full h-full rounded-full bg-neutral-700/50 flex items-center justify-center">
                    {item.icon}
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">{item.title}</p>
                {item.description && <p>{item.description}</p>}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export const DockItem = ({
  children,
  mouseX,
  item,
}: PropsWithChildren<{
  mouseX: any;
  item: { title: string; description?: string; icon: React.ReactNode; href: string };
}>) => {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          ref={ref}
          style={{ width }}
          className="w-10 aspect-square rounded-full flex items-center justify-center"
        >
          {children}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-bold">{item.title}</p>
        {item.description && <p>{item.description}</p>}
      </TooltipContent>
    </Tooltip>
  );
};
