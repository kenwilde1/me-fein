
import { Source_Code_Pro } from "next/font/google";
import Hero from "./hero";
import About from "./about";
import { useEffect } from "react";

const sourceCodePro = Source_Code_Pro({
  weight: ['400', '800'],
  subsets: ['latin'],
})

export default function Body(): JSX.Element {

  useEffect(() => {
    document.addEventListener('scroll', () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    });
  }, []);

  return (
    <div id='main' className={`${sourceCodePro.className}`}>
      <Hero />
      <div id='divider'></div>
      <div className='circle'>
      </div>
      <div className='arrow'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" /> </svg>
      </div>
      <About />
    </div>
  );
}
