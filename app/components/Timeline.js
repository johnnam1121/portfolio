import React, { useState } from 'react';
import Image from 'next/image';
import GWCBTOY from '../assets/GWCBTOY.jpg'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function Timeline() {
  const [collapsed, setIsCollapsed] = useState(false);

  return (
    <div className="space-y-8">
      {/* GWC */}
      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative size-7 flex justify-center items-center">
            <div className="mt-3 w-6 h-6 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
          </div>
        </div>
        <div className="flex-grow pt-0.5 pb-8">
          <h3 className="text-3xl flex gap-x-1.5 font-semibold text-mainText dark:text-white">
            👩‍💻 Girls Who Code
          </h3>
          <p className="mt-1 ml-1 text-md text-secondary dark:text-neutral-400">
            Self-Paced Program Advisor
          </p>
          {/* might make this into a modal later */}
          <button
            type="button"
            className="mt-1 ml-1 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
          >
            <Image
              className='flex-shrink-0 w-6 h-6 rounded-full'
              src={GWCBTOY}
              alt="GWC Beginning Teacher of the Year Instagram photo"
            />
            2023-Present
          </button>
        </div>
      </div>
      {/* Baylor Genetics */}
      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative size-7 flex justify-center items-center">
            <div className="mt-3 w-6 h-6 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
          </div>
        </div>
        <div className="flex-grow pt-0.5 pb-8">
          <h3 className="text-3xl flex gap-x-1.5 font-semibold text-mainText dark:text-white">
            🧬 Baylor Genetics
          </h3>
          <p className="mt-1 ml-1 text-md text-secondary dark:text-neutral-400">
            Automation Engineer
          </p>
          <button
            type="button"
            className="mt-1 ml-1 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
          >
            <Image
              className='flex-shrink-0 w-6 h-6 rounded-full'
              src={GWCBTOY}
              alt="GWC Beginning Teacher of the Year Instagram photo"
            />
            2024
          </button>
        </div>
      </div>

      {/* Houston ISD */}
      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative size-7 flex justify-center items-center">
            <div className="mt-3 w-6 h-6 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
          </div>
        </div>
        <div className="flex-grow pt-0.5 pb-8">
          <h3 className="text-3xl flex gap-x-1.5 font-semibold text-mainText dark:text-white">
            🍎 Houston ISD
          </h3>
          <p className="mt-1 ml-1 text-md text-secondary dark:text-neutral-400">
            Computer Science Teacher
          </p>
          <button
            type="button"
            className="mt-1 ml-1 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
          >
            <Image
              className='flex-shrink-0 w-6 h-6 rounded-full'
              src={GWCBTOY}
              alt="GWC Beginning Teacher of the Year Instagram photo"
            />
            2020-2023
          </button>
        </div>
      </div>

      {collapsed ? (
        <div className=''>
          {/* SCS Deli LLC */}
          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative size-7 flex justify-center items-center">
                <div className="mt-3 w-6 h-6 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
              </div>
            </div>
            <div className="flex-grow pt-0.5 pb-8">
              <h3 className="text-3xl flex gap-x-1.5 font-semibold text-mainText dark:text-white">
                🥪 SCS Deli LLC
              </h3>
              <p className="mt-1 ml-1 text-md text-secondary dark:text-neutral-400">
                Business Owner/General Manager
              </p>
              <button
                type="button"
                className="mt-1 ml-1 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
              >
                <Image
                  className='flex-shrink-0 w-6 h-6 rounded-full'
                  src={GWCBTOY}
                  alt="GWC Beginning Teacher of the Year Instagram photo"
                />
                2017-2019
              </button>
            </div>
          </div>
          {/* UT Austin */}
          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative size-7 flex justify-center items-center">
                <div className="mt-3 w-6 h-6 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
              </div>
            </div>
            <div className="flex-grow pt-0.5 pb-8">
              <h3 className="text-3xl flex gap-x-1.5 font-semibold text-mainText dark:text-white">
                🎓 UT Austin
              </h3>
              <p className="mt-1 ml-1 text-md text-secondary dark:text-neutral-400">
                Electrical and Computer Engineering
              </p>
              <button
                type="button"
                className="mt-1 ml-1 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
              >
                <Image
                  className='flex-shrink-0 w-6 h-6 rounded-full'
                  src={GWCBTOY}
                  alt="GWC Beginning Teacher of the Year Instagram photo"
                />
                2012-2017
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => setIsCollapsed(!collapsed)}
              className="px-6 py-2 duration-300 flex flex-col justify-center items-center hover:bg-secondaryText font-bold rounded"
            >
              <p>See Less</p>
              <FaAngleUp className='text-secondary size-10' />
            </button>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <button
            onClick={() => setIsCollapsed(!collapsed)}
            className="px-6 py-2 duration-300 flex flex-col justify-center items-center hover:bg-secondaryText font-bold rounded"
          >
            <p>See More</p>
            <FaAngleDown className='text-secondary size-10' />
          </button>
        </div>
      )}

    </div >
  )
}
