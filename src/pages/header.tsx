import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <nav id="navbar" className="flex fixed">
      <div className="w-screen flex justify-center md:justify-around">
        <ul className="flex md:gap-12 items-center text-xl text-black">
          <Link href="/" className="px-10 py-5 hover:text-rose-500">
            home
          </Link>
          <Link href="#about" className="px-10 py-5 hover:text-rose-500">
            about
          </Link>
          <Link href="#contact" className="px-10 py-5 hover:text-rose-500">
            contact
          </Link>
        </ul>
        <div className="hidden md:block md:flex md:items-center">
          <div className="h-8 w-8 border border-sky-500"></div>
        </div>
        <div className="hidden md:block md:flex md:items-center md:gap-8">
          <div className="h-8 w-8 border border-sky-500"></div>
          <div className="h-8 w-8 border border-sky-500"></div>
          <div className="h-8 w-8 border border-sky-500"></div>
        </div>
      </div>
    </nav>
  );
}
