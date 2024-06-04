'use client'
import Image from 'next/image';
import CircleAnimation from './components/CircleAnimation'
import { useEffect, useState } from 'react';
import JN from './assets/JN.gif'
import { FaCookie } from "react-icons/fa6";
import Navbar from './components/Navbar';

export default function Home() {
  const repeat = 20;
  const [reloadNavbar, setReloadNavbar] = useState(false);
  const [isGifPlaying, setIsGifPlaying] = useState(true);
  const [score, setScore] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedScore = localStorage.getItem('bubblesPopped');
      return storedScore ? parseInt(storedScore) : -1;
    } else {
      return -1;
    }
  });

  const updateScore = () => {
    setScore(prevScore => {
      const newScore = prevScore + 1;
      if (typeof window !== 'undefined') {
        localStorage.setItem('bubblesPopped', newScore);
      }
      return newScore;
    });
  };

  useEffect(() => {
    const gifDuration = 1400;

    const timer = setTimeout(() => {
      setIsGifPlaying(false);
    }, gifDuration);

    return () => clearTimeout(timer);
  }, []);

  let displayScore = null;

  if (score === -1) {
    displayScore = (
      <div>
        <p className='text-xs sm:text-sm mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>Try popping some bubbles!</p>
      </div>
    );
  } else if (score >= 0 && score < 5) {
    displayScore = (
      <div>
        <p className='text-sm mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>Bubbles popped: {score}</p>
      </div>
    );
  } else if (score >= 5 && score < 25) {
    displayScore = (
      <div>
        <p className='text-md text-blue-500 text-center mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>Bubbles popped: {score}!</p>
      </div>
    );
  } else if (score >= 25 && score < 50) {
    displayScore = (
      <div>
        <p className='text-lg text-green-500 text-center mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>Bubbles popped: {score}!!</p>
      </div>
    );
  } else if (score >= 50 && score < 75) {
    displayScore = (
      <div>
        <p className='text-xl text-purple-500 text-center mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>Bubbles popped: {score}!!!</p>
      </div>
    );
  } else if (score >= 75 && score < 100) {
    displayScore = (
      <div>
        <p className='text-2xl text-orange-500 text-center mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>Bubbles popped: {score}!!!!</p>
      </div>
    );
  } else if (score >= 100 && score < 200) {
    displayScore = (
      <div>
        <p className='text-3xl text-rainbow-500 text-center mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>Bubbles popped: {score}!!!!!</p>
      </div>
    );
  } else if (score >= 200 && score < 300) {
    displayScore = (
      <div>
        <p className='text-sm text-center mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>You beat the game!</p>
      </div>
    );
  } else if (score >= 300 && score < 400) {
    displayScore = (
      <div>
        <p className='text-sm text-center mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>Stop playing! It&apos;s over!</p>
      </div>
    );
  } else if (score >= 400 && score < 500) {
    displayScore = (
      <div>
        <p className='text-sm text-center mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>THERE ARE NO MORE REWARDS! </p>
      </div>
    );
  } else if (score >= 500) {
    displayScore = (
      <div>
        <p className='flex items-center text-sm text-center mt-4 fixed left-1/2 bottom-5 transform -translate-x-1/2'>OK YOU WIN! HERE IS A COOKIE &nbsp;<FaCookie /> &nbsp; Goodbye~ </p>
      </div>
    );
  } else {
    displayScore = (
      <div></div>
    );
  }

  return (
    <main className="bg-primary h-screen">
      {isGifPlaying ? (
        <div className="flex items-center justify-center h-full">
          <Image src={JN} alt="Loading GIF" className="w-48 h-48" priority />
        </div>
      ) : (
        <>
          <div className="h-screen flex justify-center items-center">
            <CircleAnimation repeat={repeat} updateScore={updateScore} />
            <div className='flex flex-col'>
              <div className="text-left">
                <h1 className="ml-6 text-3xl sm:text-6xl mb-4 text-mainText">Hi, I&apos;m John!</h1>
                <h1 className="ml-6 text-3xl sm:text-6xl mb-4 text-mainText">Welcome to my portfolio website</h1>
                <h2 className="ml-6 text-xl sm:text-2xl my-4 text-secondary">This website was made using Next.js and Tailwind CSS</h2>
              </div>
              <div className='z-10'>
                <a href="https://github.com/johnnam1121">
                  <button className="ml-6 bg-secondary text-primary hover:bg-mainText duration-300 py-2 px-4 rounded">
                    Check out my stuff
                  </button>
                </a>
              </div>
            </div>
            {displayScore}
          </div>
        </>
      )}
    </main>
  );
}