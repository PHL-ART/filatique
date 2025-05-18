"use client";

import { ReactNode, useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const FrozenRoute = ({ children }: { children: ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  
  // Используем useRef только если контекст существует
  const frozen = context ? useRef(context).current : null;

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

export default FrozenRoute;
