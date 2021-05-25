import React,{useEffect} from "react";
import Link from "next/link"
import {useRouter} from "next/router"

export default function NotFound() {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
         router.push('/')
        },4000)
    },[])

  return (
    <div className="bg-white w-screen h-screen  px-4  md:px-10 lg:px-36 flex justify-center items-center">
        <div className="py-6 px-10 shadow-lg bg-yellow-400 transform -rotate-1">
      <h1 className="text-8xl">404</h1>
      <h2 className="text-xl mb-4 mt-0">Ooops! That page cannot be found :(</h2>
      <p >
        Redirecting to <Link href="/"><a className="text-black underline font-bold">Homepage</a></Link> ...
      </p>
      </div>
    </div>
  );
}
