'use client'
import Image from 'next/image';
import Erised from '../../../assets/game/Erised.jpg'
import { useEffect, useState } from 'react';
import { FaLightbulb } from "react-icons/fa6";

export default function WIP() {
  const [hint, setHint] = useState(false);
  const [answer, setAnswer] = useState('');

  // useEffect(() => {
  //   const checkAnswer = async () => {
  //     try {
  //       const response = await fetch('/api/thinkerCheck');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       console.log(data);

  //       if (data.answer != process.env.NEXT_PUBLIC_THE_THINKER_ANSWER) {
  //         window.alert('No cheating! Go answer the previous questions');
  //         window.location.href = '/pages/games/meaningoflife'
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   checkAnswer();
  // }, []);

  return (
    <main className="bg-primary">
      <div className='mx-auto h-screen flex flex-col justify-center items-center'>
        <div className='w-3/4 mx-auto flex justify-center '>
          <h1 className="text-center text-4xl inline-block sm:text-4xl text-mainText border-b-2 border-secondary">Come back for more later!</h1>
        </div>
      </div>
    </main>
  );
}


