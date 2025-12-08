"use client";

import { AppStore, makeStore } from "@/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

export default function StoreWrapper({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // initialized store at first render.
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
