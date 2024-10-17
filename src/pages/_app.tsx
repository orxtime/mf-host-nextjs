import type { AppProps } from "next/app";

import "../tailwind.css";

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Component {...pageProps} />
    </div>
  );
}
