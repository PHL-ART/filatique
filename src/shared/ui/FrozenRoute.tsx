"use client";

import { ReactNode, useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const FrozenRoute = ({ children }: { children: ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context);

  if (context && !frozen.current) {
    frozen.current = context;
  }

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

export default FrozenRoute;
