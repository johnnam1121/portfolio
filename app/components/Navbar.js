'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { FaHouseChimney, FaBars, FaSquareXmark } from "react-icons/fa6";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className={`w-full fixed top-0 left-0 right-0 z-10 ${navbar ? 'bg-primary z-30 duration-300' : 'bg-primary'}`}>
        <div className="justify-between px-4 mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" className='flex items-center text-secondary hover:text-mainText duration-300 '>
                <FaHouseChimney className="size-6 " />
                <h1 className='sm:flex pl-3 text-xl hidden'>John Nam</h1>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaSquareXmark className='text-mainText size-6' />
                  ) : (
                    <FaBars className='text-mainText size-6' />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="py-3 text-xl text-secondary md:px-6 text-center border-b-2 md:border-b-0  hover:bg-mainText  border-secondary  md:hover:text-mainText md:hover:bg-transparent">
                  <Link href="/pages/About" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="py-3 text-xl text-secondary px-6 text-center  border-b-2 md:border-b-0  hover:bg-mainText  border-secondary  md:hover:text-mainText md:hover:bg-transparent">
                  <Link href="/pages/Projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="py-3 text-xl text-secondary px-6 text-center  border-b-2 md:border-b-0  hover:bg-mainText  border-secondary  md:hover:text-mainText md:hover:bg-transparent">
                  <Link href="/pages/games/MeaningOfLife" onClick={() => setNavbar(!navbar)}>
                    Play a game?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


