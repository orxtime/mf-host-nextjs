import dynamic from "next/dynamic";
import { Suspense } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let UICounter: any = () => null;
if (typeof window !== "undefined") {
  UICounter = dynamic(() => import("remote/uicounter"));
}

// const UICounter = dynamic(() => import("remote/uicounter"));

export default function Counter() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <UICounter className="bg-yellow-300" />
    </Suspense>
  );
}
