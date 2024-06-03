'use client'
import Image from 'next/image';
import Erised from '../../../assets/game/Erised.jpg'
import { useEffect, useState } from 'react';

export default function harryPotter() {
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
        <div className='w-3/4 mx-auto flex flex-col justify-center items-center'>
          <h1 className="text-center text-4xl inline-block sm:text-4xl text-mainText border-b-2 border-secondary">Try your hand at a couple of riddles?</h1>
          <h1 className="pt-10 md:pt-28 text-center text-2xl sm:text-3xl mb-4 text-mainText">What is the meaning of life, the universe and everything else?</h1>
        </div>
        <div className='w-2/3 mx-auto flex flex-col justify-center items-center'>
          <Image className='shadow-lg' src={Erised} alt='The thinker photo' />
        </div>
        <form className='mt-4 w-2/3 mx-auto flex flex-row justify-center items-center'>
          <p>Answer here:&nbsp;</p>
          <input className='bg-secondaryText w-1/2 md:w-1/12 text-center' placeholder='Answer' />
        </form>
      </div>
    </main>
  );
}


