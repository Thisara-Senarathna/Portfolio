"use client";
import Nav from "./Nav";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  return (
    <header className="py-4 fixed top-0 left-0 w-full z-50 bg-accent-secondary shadow-lg lg:bg-accent-secondary/50 lg:backdrop-blur-md lg:shadow-md"> 
      <div className="container justify-between mx-auto flex item-center items-center">


        <Link href="/">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent ">Thisara.</h1>
        </div></Link>
        <div className="hidden lg:flex gap-8  px-6 py-2">
          <Nav />
        </div>
        <div className="p-2 rounded-lg px-4 hidden lg:block hover:bg-accent-secondary  hover:text-dark transform transition-all duration-300 ease-in-out hover:scale-102">
          <Link href="/contact">
            <h3> Contact </h3>
          </Link>
        </div>

        {/* hamburger icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
        >
          {isMobileNavVisible ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {/* Dark overlay and mobile menu */}
        {isMobileNavVisible && (
          <div className="fixed inset-0 z-50 flex">
            {/* Dark background */}
            <div
              className="bg-black opacity-50 flex-1"
              onClick={() => setIsMobileNavVisible(false)}
            ></div>

            {/* Slide-in mobile menu */}

            <div className="w-3/4 max-w-xs bg-gray-800 text-white h-full p-8 relative  flex flex-col justify-center ">
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setIsMobileNavVisible(false)}
              >
                <FiX size={24} />
              </div>
              <div className="text-center flex flex-col p-4">
                <Nav />
                <Link href="/contact">
                  <h3 className="mt-8 p-2 hover:bg-accent hover:rounded-lg hover:text-black">Contact</h3>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
