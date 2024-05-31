'use client'
import React from 'react';
import Link from "next/link";
import { BsFillHouseDoorFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="bg-primary w-full flex items-center absolute top-3 left-0 px-7 z-10">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <Link href="/" className='flex items-center'>
            <BsFillHouseDoorFill className='size-6 text-mainText'/>
            <h1 className='text-mainText pl-3 text-xl'>John Nam</h1>
          </Link>
        </div>
        <div className="flex flex-row">
          <ul className="flex">
            <li className="text-mainText mx-5 text-md">About Me</li>
            <li className="text-mainText mx-5 text-md">Things I've Made</li>
            <li className="text-mainText mx-5 text-md">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}