import heroImage from "../images/hero.png";

export default function Hero(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-screen z-50">
      <div className="hero-left w-screen/60 flex flex-col justify-center gap-4 md:w-screen/40">
        <h1 className="text-4xl md:text-7xl font-extrabold">
          Hey. I'm <span className="text-rose-500">Kenny Wilde</span>.
        </h1>
        <p>
          I'm a Software Engineer from Dublin, Ireland. I create simple and
          elegent UIs using technologies such as Typescript, React and NodeJS.
        </p>
        <a className="text-rose-500 text-xl cursor-pointer hover:text-blue-500">
          Learn more about me
        </a>
      </div>
      <div className="hidden md:block hero-right">
        <img className="md:w-screen/40" src={heroImage.src} />
      </div>
    </div>
  );
}
