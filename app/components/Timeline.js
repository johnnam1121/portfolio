import React, { useState } from 'react';
import Image from 'next/image';
import GWCBTOY from '../assets/GWCBTOY.jpg'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import TimelineItem from './TimelineItem';

export default function Timeline() {
  const [collapsed, setIsCollapsed] = useState(false);

  return (
    <div className="space-y-8 px-16 md:px-0">
      {/* GWC */}
      <TimelineItem company='👩‍💻 Girls Who Code' title='Self-Paced Program Advisor' photo={GWCBTOY} year='2023-Present' />
      {/* Baylor Genetics */}
      <TimelineItem company='🧬 Baylor Genetics' title='Automation Engineer' photo={GWCBTOY} year='2024' />
      {/* Houston ISD */}
      <TimelineItem company='🍎 Houston ISD' title='Computer Science Teacher' photo={GWCBTOY} year='2020-2023' />

      {collapsed ? (
        <div className=''>
          {/* SCS Deli LLC */}
          <TimelineItem company='🥪 SCS Deli LLC' title='Business Owner/General Manager' photo={GWCBTOY} year='2018-2019' />
          {/* Best Buy */}
          <TimelineItem company='🛍️ Best Buy Geek Squad' title='Geek Squad Consultation Agent' photo={GWCBTOY} year='2018' />
          {/* UT Austin */}
          <TimelineItem company='🎓 UT Austin' title='Electrical and Computer Engineering' photo={GWCBTOY} year='2012-2017' />

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
