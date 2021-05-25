import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="flex fixed top-0 left-0 w-screen font-myFont  z-10 bg-black shadow-lg py-4 justify-between items-center px-2 md:px-10 lg:px-36">
      <Link className="cursor-pointer" href="/">
        <a className="text-white font-black">Logo</a>
      </Link>
      <ul className="flex  w-52 justify-between  uppercase text-sm items-center">
        <Link href="/">
          <a className="cursor-pointer text-gray-300 hover:text-yellow-400 hover:font-bold ">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="cursor-pointer text-gray-300 hover:text-yellow-400 hover:font-bold ">
            About
          </a>
        </Link>
        <Link href="/services">
          <a className="cursor-pointer text-gray-300 hover:text-yellow-400 hover:font-bold ">
            Services
          </a>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
