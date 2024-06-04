'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import atlaOne from '../../../assets/game/atlaOne.jpg';
import atla from '../../../assets/game/atla.png';
import correct from '../../../assets/game/sounds/correct.wav';
import wrong from '../../../assets/game/sounds/wrong.wav';

export default function ATLA() {
  const [answer, setAnswer] = useState('');
  const [allow, setAllow] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const checkAnswer = async () => {
      const answer = localStorage.getItem('hpAnswer');
      if (answer != process.env.NEXT_PUBLIC_HP_ANSWER1 && answer != process.env.NEXT_PUBLIC_HP_ANSWER2) {
        window.alert('No cheating! Go answer the previous questions');
        window.location.href = '/pages/games/erised';
      } else {
        setAllow(true);
      }
    };
    const storedCounter = localStorage.getItem('atlaCounter');
    if (storedCounter !== null) {
      setCounter(parseInt(storedCounter, 10));
    }

    checkAnswer();
  }, []);

  useEffect(() => {
    localStorage.setItem('atlaCounter', counter);
  }, [counter]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (counter >= 0 && counter < 10) {
      setCounter(counter + 1);
      const wrongAudio = new Audio(wrong);
      wrongAudio.volume = 0.5;
      wrongAudio.currentTime = 0;
      wrongAudio.play();
    }
    if (counter > 9) {
      localStorage.setItem('atlaAnswer', answer);
      // No looking for the answer in the source code, cheater!
      if (answer === process.env.NEXT_PUBLIC_ATLA_ANSWER) {
        const correctAudio = new Audio(correct);
        correctAudio.volume = 0.5;
        correctAudio.currentTime = 0;
        correctAudio.play();
        setTimeout(() => {
          window.alert(`Nice! This one was more tricky huh? It only gets harder!\nDid you know the episode 'The Tales of Ba Sing Se' was dedicated to Mako Iwamatsu, the original voice actor of Uncle Iroh?\nHe tragically passed away during the second season of ATLA and his last bit of work before his cancer forced him to retire was the song 'leaves from the vine' featured in this episode.`);
          window.location.href = '/pages/games/WIP'
        }, 2000); // Adjust the delay time (in milliseconds)
      } else {
        const wrongAudio = new Audio(wrong);
        wrongAudio.volume = 0.5;
        wrongAudio.currentTime = 0;
        wrongAudio.play();
      }
    }
  }

  return (
    <main className="bg-primary">
      {allow ? (
        <div className='mx-auto h-screen flex flex-col justify-center items-center'>
          <div className='w-3/4 mx-auto flex justify-center '>
            <h1 className="text-center text-4xl inline-block sm:text-4xl text-mainText border-b-2 border-secondary">Amazing! You are doing great! Now it gets really difficult.</h1>
          </div>

          <div className='w-2/3'>
            {counter > 9 ? (
              <h1 className="overflow-wrap break-word pt-10 text-center text-xl sm:text-3xl text-mainText mb-3">
                &quot;It&apos;s time for you to look inward, and start asking yourself the big questions. Who are you? And what do you want?&quot;
              </h1>
            ) : (
              <h1 className="overflow-wrap break-word pt-10 text-center text-xl sm:text-3xl text-mainText mb-3">
                &quot;You can&apos;t always see the light at the end of the tunnel,&quot; Iroh says. &quot;But if you just keep moving you will come to a better place.&quot;
              </h1>
            )}
          </div>

          <div className='w-2/3 mx-auto flex flex-col justify-center items-center'>
            {counter > 9 ? (
              <Image className='shadow-lg' src={atla} alt='Avatar the last airbender photo' />
            ) : (
              <Image className='shadow-lg' src={atlaOne} alt='Avatar the last airbender photo' />
            )}
          </div>
          <form onSubmit={handleSubmit} className='mt-4 w-2/3 mx-auto flex flex-row justify-center items-center'>
            <p>Answer here:&nbsp;</p>
            <input onChange={handleChange} className='bg-secondaryText w-1/2 md:w-1/12 text-center' placeholder='Answer' />
            <button className='bg-mainText text-primary rounded-lg ml-2 px-2'>Submit</button>
            {counter > 0 && counter <= 9 ? (
              <h2 className='px-3'>
                {counter}
              </h2>
            ) : (<></>)}
          </form>
          <div>
            <h2 className='mt-1'>No more hints from now on!</h2>
          </div>
        </div>
      ) : (
        <div className='h-screen bg-primary'></div>
      )}
    </main>
  );
}


{/* <div className='mt-4'>
            <p>Need a hint?&nbsp;
              <button className='px-2 hover:bg-secondaryText duration-150'
                onClick={() => (setHint(!hint))}>Click me!
              </button>
            </p>
          </div>
          <div className='mt-4 w-2/3'>
            {hint ? (
              <p className='bg-secondaryText text-center'>Harry Potter and the Philosopher&apos;s Stone - Chapter 4, Page 55</p>
            ) : (
              <p></p>
            )}
          </div> */}
