import React, { useState } from 'react';
import Image from 'next/image';
import frontlineEd from '../assets/frontlineEd.png'
import GWCBTOY from '../assets/GWCBTOY.jpg'
import baylorGenetics from '../assets/baylorGenetics.png'
import hisd from '../assets/hisd.jpg'
import schlotzskys from '../assets/schlotzskys.png'
import bestBuy from '../assets/bestBuy.jpg'
import utAustin from '../assets/utAustin.png'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import TimelineItem from './TimelineItem';

export default function Timeline() {
  const [collapsed, setIsCollapsed] = useState(false);

  return (
    <div className="space-y-8 px-16 md:px-0">
      {/* GWC */}
      <TimelineItem company='🖥️ Frontline Education' title='ERP Engineer' photo={frontlineEd} year='2024-Present' />
      {/* GWC */}
      <TimelineItem company='👩‍💻 Girls Who Code' title='Self-Paced Program Advisor' photo={GWCBTOY} year='2023-Present' />
      {/* Baylor Genetics */}
      <TimelineItem company='🧬 Baylor Genetics' title='Automation Engineer' photo={baylorGenetics} year='2024' />

      {collapsed ? (
        <div className=''>
          {/* Houston ISD */}
          <TimelineItem company='🍎 Houston ISD' title='Computer Science Teacher' photo={hisd} year='2020-2023' />
          {/* SCS Deli LLC */}
          <TimelineItem company='🥪 SCS Deli LLC' title='Business Owner/General Manager' photo={schlotzskys} year='2018-2019' />
          {/* Best Buy */}
          <TimelineItem company='🛍️ Best Buy Geek Squad' title='Geek Squad Consultation Agent' photo={bestBuy} year='2018' />
          {/* UT Austin */}
          <TimelineItem company='🎓 UT Austin' title='Electrical and Computer Engineering' photo={utAustin} year='2012-2017' />

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
