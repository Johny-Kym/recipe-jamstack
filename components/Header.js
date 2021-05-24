import React from 'react'
import Link from "next/link"


function Header() {
    return (
        <header className="flex shadow-lg py-4 justify-between items-center px-2 md:px-10 lg:px-36">
            <Link className="cursor-pointer" href="/"><a className="text-blue-700 font-black">Logo</a></Link>
            <ul className="flex  w-52 justify-between items-center">
                <Link className="cursor-pointer" href="/">
                Home
                </Link>
                <Link className="cursor-pointer" href="/about">
                About
                </Link>
                <Link className="cursor-pointer" href="/services">
                Services
                </Link>
                
                
            </ul>
        </header>
    )
}

export default Header
