"use client";

import { ReactNode, useContext, useRef, useEffect } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useLoadingStore } from "@shared/store/loading";

const LoadingAwareRoute = ({ children }: { children: ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context);
  const { isLoading, stopLoading } = useLoadingStore();

  if (context && !frozen.current) {
    frozen.current = context;
  }
  
  // Проверяем загрузку ресурсов
  useEffect(() => {
    if (!isLoading) return;

    if (document.readyState === 'complete') {
      stopLoading();
      return;
    }

    const handleLoad = () => {
      stopLoading();
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [isLoading, stopLoading]);

  // Проверяем наличие контекста перед использованием Provider
  if (!context) {
    return <>{children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen.current ?? context}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default LoadingAwareRoute;