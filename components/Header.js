import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  console.log(path);
  return (
    <header className="flex fixed top-0 left-0 w-screen font-myFont  z-10 bg-black shadow-lg h-20 md:h-14 justify-between items-center px-2 md:px-10 lg:px-36">
      <Link className="cursor-pointer" href="/">
        <Image
          className="cursor-pointer"
          src="/recipe-logo.png"
          width="80px"
          height="40px"
        />
      </Link>
      <ul className="flex  w-36 justify-between  uppercase text-sm items-center">
        <Link href="/ " className="cursor-pointer">
          <a
            className={
              path === "/"
                ? "cursor-pointer   font-bold text-yellow-400 "
                : "cursor-pointer text-gray-300 hover:text-yellow-400 hover:font-bold"
            }
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={
              path === "/about"
                ? "cursor-pointer   font-bold text-yellow-400 "
                : "cursor-pointer text-gray-300 hover:text-yellow-400 hover:font-bold"
            }
          >
            About
          </a>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
