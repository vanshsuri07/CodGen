"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SlideUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
}

export const SlideUp = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  offset = 20
}: SlideUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
