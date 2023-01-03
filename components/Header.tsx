import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [Hc, setHc] = useState("transparent");

  const listenScroll = (e: any) => {
    if (window.scrollY > 100) {
      setHc("white text-gat");
      console.log(Hc);
    } else {
      setHc("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  }, []);

  return (
    <div
      className={`w-full h-14 flex items-center  justify-around font-semibold px-20 tracking-wide bg-${Hc} fixed top-0 z-20 transition-all duration-200 ease-in-out`}
    >
      <Link href="/">Home</Link>
      <Link href="/committee">Committee</Link>
      <Link href="/keynote">Keynote</Link>
      <Link href="/call-for-papers">Call for Papers</Link>
      <Link href="/registration">Registration</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/more">More</Link>
    </div>
  );
}

export default Header;
