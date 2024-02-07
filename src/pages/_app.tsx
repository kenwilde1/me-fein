import "@/styles/globals.css";
import { Flowbite, CustomFlowbiteTheme } from "flowbite-react";
import type { AppProps } from "next/app";
import Header from "./header";
import { Roboto } from 'next/font/google'

console.warn = () => { };

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.className}`}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
