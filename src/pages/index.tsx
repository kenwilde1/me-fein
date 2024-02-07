import { Source_Code_Pro } from "next/font/google";
import Hero from "./hero";
import About from "./about";
import { useEffect } from "react";
import Divider from "./helpers/divider";
import Contact from "./contact";

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "800"],
  subsets: ["latin"],
});

export default function Body(): JSX.Element {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    });
  }, []);

  return (
    <div id="main" className={`${sourceCodePro.className}`}>
      <Hero />
      <Divider />
      <About />
      <Contact />
    </div>
  );
}
