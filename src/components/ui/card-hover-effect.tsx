"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    _id: string;
    title: string;
    description: string;
    link: string; // Ensure 'link' is included
    admin: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item._id}
          className="relative group block p-2 h-full w-full border border-white rounded-3xl overflow-hidden"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-700 dark:to-indigo-700 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.8,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardAdmin>{`Admin: ${item.admin}`}</CardAdmin>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transform transition-transform group-hover:scale-105",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-white font-extrabold text-lg tracking-wide mt-4 group-hover:text-purple-300 transition-colors duration-200",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-gray-400 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-200",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardAdmin = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-gray-300 text-xs group-hover:text-gray-200 transition-colors duration-200",
        className
      )}
    >
      {children}
    </p>
  );
};
