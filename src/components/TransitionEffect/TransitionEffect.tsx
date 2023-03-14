import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    // y: 0,
    // x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
  out: {
    opacity: 0,
    scale: 0.9,
    // y: 40,
    // x: 100,
    transition: {
      duration: 0.5,
    },
  },
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
function TransitionEffect({ children }: { children: React.ReactNode }) {
  const { asPath } = useRouter();

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TransitionEffect;
