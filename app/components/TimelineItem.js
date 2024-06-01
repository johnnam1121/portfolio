import React from 'react'
import Image from 'next/image';

export default function TimelineItem({ company, title, photo, year }) {
  return (
    <div className="flex gap-x-3">
      <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
        <div className="relative size-7 flex justify-center items-center">
          <div className="mt-3 w-6 h-6 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
        </div>
      </div>
      <div className="flex-grow pt-0.5 pb-8">
        <h3 className="text-3xl flex gap-x-1.5 font-semibold text-mainText ">
          {company}
        </h3>
        <p className="mt-1 ml-1 text-md text-secondary dark:text-neutral-400">
          {title}
        </p>
        {/* might make this into a modal later */}
        <button
          type="button"
          className="mt-1 ml-1 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
        >
          <Image
            className='flex-shrink-0 w-6 h-6 rounded-full'
            src={photo}
            alt="GWC Beginning Teacher of the Year Instagram photo"
          />
          {year}
        </button>
      </div>
    </div>
  )
}
