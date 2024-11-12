"use client";
import React, { useState, MouseEvent } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { scroller } from "react-scroll";
import { cn } from "@/lib/utils";
import Image from "next/image";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

type FloatingNavProps = {
  navItems: NavItem[];
  className?: string;
};

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Ensure current and previous values are not undefined
    const previous = scrollYProgress.getPrevious();
    if (typeof current === "number" && typeof previous === "number") {
      const direction = current - previous;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    scroller.scrollTo(link.substring(1), {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[80vw] md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-2 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-around space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/skilllogo.png"
            alt="logo"
            width={200}
            height={100}
            className="cursor-pointer"
          />
          X
          <Image
            src="/tm2s.webp"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer mx-2"
          />
        </div>
        <div className="hidden gap-x-4 sm:flex">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => handleSmoothScroll(e, navItem.link)}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
