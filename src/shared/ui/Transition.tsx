"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import FrozenRoute from "./FrozenRoute";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="transition-div">
        <FrozenRoute>{children}</FrozenRoute>
        <motion.div
          className="fade-out"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
