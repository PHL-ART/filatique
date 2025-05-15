"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import FrozenRoute from "./FrozenRoute";
import { useLoadingStore } from "@shared/store/loading";
import { useEffect } from "react";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { startLoading, stopLoading } = useLoadingStore();

  // Запускаем индикатор загрузки при изменении пути
  useEffect(() => {
    startLoading();
    
    // Останавливаем индикатор загрузки после завершения анимации
    const timer = setTimeout(() => {
      stopLoading();
    }, 600); // Немного больше, чем длительность анимации
    
    return () => clearTimeout(timer);
  }, [pathname, startLoading, stopLoading]);

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
          style={{ pointerEvents: "none" }} // Отключаем перехват кликов
        ></motion.div>
        <motion.div
          className="fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          style={{ pointerEvents: "none" }} // Отключаем перехват кликов
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
