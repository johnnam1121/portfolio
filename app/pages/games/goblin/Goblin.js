'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import goblin from '../../../assets/game/goblin.jpg';
import correct from '../../../assets/game/sounds/correct.wav';
import wrong from '../../../assets/game/sounds/wrong.wav';

export default function Goblin() {
  const [answer, setAnswer] = useState('');
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    const checkAnswer = async () => {
      const answer = localStorage.getItem('atlaAnswer');

      if (answer != process.env.NEXT_PUBLIC_ATLA_ANSWER) {
        window.alert('No cheating! Go answer the previous questions');
        window.location.href = '/pages/games/atla';
      } else {
        setAllow(true);
        localStorage.setItem('1', process.env.NEXT_PUBLIC_GOBLIN_HINT1);
        localStorage.setItem('2', process.env.NEXT_PUBLIC_GOBLIN_HINT2);
        localStorage.setItem('3', process.env.NEXT_PUBLIC_GOBLIN_HINT3);
        localStorage.setItem('4', process.env.NEXT_PUBLIC_GOBLIN_HINT4);
      }
    };
    checkAnswer();
  }, []);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem('goblinAnswer', answer);
    if (answer === process.env.NEXT_PUBLIC_GOBLIN_ANSWER1 || answer.includes(process.env.NEXT_PUBLIC_GOBLIN_ANSWER2)) {
      const correctAudio = new Audio(correct);
      correctAudio.volume = 0.5;
      correctAudio.currentTime = 0;
      correctAudio.play();
      setTimeout(() => {
        window.alert('Ok I am seriously impressed and I am running out of ideas.. The next one is going to be the last and most difficult one. Be prepared!\nFun fact: Kim Eun Sook, the screenwriter of the show, also wrote several other top charting dramas?\nMost notably: Descendants of the Sun, Mr. Sunshine, The Glory, Lovers in Paris. \nIf you have not seen these, go watch them! They are all amazing.');
        window.location.href = '/pages/games/WIP'
      }, 2000); // Adjust the delay time (in milliseconds) as needed
    } else {
      const wrongAudio = new Audio(wrong);
      wrongAudio.volume = 0.5;
      wrongAudio.currentTime = 0;
      wrongAudio.play();
    }
  }

  return (
    <>
      <main className="bg-primary">
        {allow ? (
          <div className='mx-auto h-screen flex flex-col justify-center items-center'>
            <div className='w-3/4 mx-auto flex justify-center '>
              <h1 className="text-center text-4xl inline-block sm:text-4xl text-mainText border-b-2 border-secondary">You got some skills! You ready for a REALLY difficult one?</h1>
            </div>

            <div className='w-2/3'>
              <h1 className="mb-2 overflow-wrap break-word pt-10 text-center text-xl sm:text-3xl text-mainText">
                Good luck
              </h1>
            </div>

            <div className='w-2/3 mx-auto flex flex-col justify-center items-center'>
              <Image className='shadow-lg' src={goblin} alt='Korean Poetry' priority />
            </div>
            <form onSubmit={handleSubmit} className='mt-4 w-2/3 mx-auto flex flex-row justify-center items-center'>
              <p>Answer here:&nbsp;</p>
              <input onChange={handleChange} className='bg-secondaryText w-1/2 md:w-1/12 text-center' placeholder='Answer' />
              <button className='bg-mainText text-primary rounded-lg ml-2 px-2'>Submit</button>
            </form>
          </div>
        ) : (
          <div className='h-screen bg-primary'></div>
        )}
      </main>
    </>
  );
}
