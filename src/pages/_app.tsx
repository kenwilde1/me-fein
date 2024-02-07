import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./header";
import { Roboto } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

console.warn = () => {};

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.className}`}>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
