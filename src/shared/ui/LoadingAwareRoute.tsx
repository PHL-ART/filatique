"use client";

import { ReactNode, useContext, useRef, useEffect } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useLoadingStore } from "@shared/store/loading";

const LoadingAwareRoute = ({ children }: { children: ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = context ? useRef(context).current : null;
  const { isLoading, stopLoading } = useLoadingStore();
  
  // Проверяем загрузку ресурсов
  useEffect(() => {
    const checkResourcesLoaded = () => {
      if (document.readyState === 'complete') {
        stopLoading();
      } else {
        window.addEventListener('load', () => {
          stopLoading();
        });
      }
    };

    checkResourcesLoaded();

    return () => {
      window.removeEventListener('load', checkResourcesLoaded);
    };
  }, [stopLoading]);

  // Проверяем наличие контекста перед использованием Provider
  if (!frozen) {
    return <>{children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default LoadingAwareRoute;