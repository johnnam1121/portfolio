'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Erised from '../../../assets/game/Erised.jpg';
import correct from '../../../assets/game/sounds/correct.wav';
import wrong from '../../../assets/game/sounds/wrong.wav';

export default function HarryPotter() {
  const [hint, setHint] = useState(false);
  const [answer, setAnswer] = useState('');
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    const checkAnswer = async () => {
      const answer = localStorage.getItem('thinkerAnswer');

      if (answer != process.env.NEXT_PUBLIC_THE_THINKER_ANSWER) {
        window.alert('No cheating! Go answer the previous questions');
        window.location.href = '/pages/games/thethinker';
      } else {
        setAllow(true);
      }
    };
    checkAnswer();
  }, []);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem('hpAnswer', answer);
    // No looking for the answer in the source code, cheater!
    if (answer === process.env.NEXT_PUBLIC_HP_ANSWER1 || answer === process.env.NEXT_PUBLIC_HP_ANSWER2) {
      const correctAudio = new Audio(correct);
      correctAudio.volume = 0.5;
      correctAudio.currentTime = 0;
      correctAudio.play();
      setTimeout(() => {
        window.alert('A fellow Harry Potter fan I see?\nFun fact: did you know the Mirror of Erised spelt backwards spells Desire? Because it shows the views most desired wishes. Get it?');
        window.location.href = '/pages/games/atla'
      }, 2000); // Adjust the delay time (in milliseconds) as needed
    } else {
      const wrongAudio = new Audio(wrong);
      wrongAudio.volume = 0.5;
      wrongAudio.currentTime = 0;
      wrongAudio.play();
    }
  }

  return (
    <main className="bg-primary">
      {allow ? (
        <div className='mx-auto h-screen flex flex-col justify-center items-center'>
          <div className='w-3/4 mx-auto flex justify-center '>
            <h1 className="text-center text-4xl inline-block sm:text-4xl text-mainText border-b-2 border-secondary">Great job answering the first one! Here is another:</h1>
          </div>

          <div className='w-2/3'>
            <h1 className="overflow-wrap break-word pt-10 text-center text-xl sm:text-3xl text-mainText">
              Happiness<span className='text-primary text-xs hover:text-amber-400'>e</span>
              can<span className='text-primary text-xs hover:text-amber-400'>y</span>
              be<span className='text-primary text-xs hover:text-amber-400'>r</span>
              found,
            </h1>
            <h1 className="overflow-wrap break-word text-center text-xl sm:text-3xl text-mainText">
              even<span className='text-primary text-xs hover:text-amber-400'>r</span>
              in<span className='text-primary text-xs hover:text-amber-400'>a</span>
              the<span className='text-primary text-xs hover:text-amber-400'>H</span>
              darkest<span className='text-primary text-xs hover:text-amber-400'>y</span>
              of<span className='text-primary text-xs hover:text-amber-400'>r</span>
              times,
            </h1>
            <h1 className="overflow-wrap break-word text-center text-xl sm:text-3xl text-mainText">
              if<span className='text-primary text-xs hover:text-amber-400'>a</span>
              one<span className='text-primary text-xs hover:text-amber-400'>z</span>
              only<span className='text-primary text-xs hover:text-amber-400'>w</span>
              remembers<span className='text-primary text-xs hover:text-amber-400'>i</span>
            </h1>
            <h1 className="overflow-wrap break-word text-center text-xl sm:text-3xl mb-4 text-mainText">
              to<span className='text-primary text-xs hover:text-amber-400'>a</span>
              turn<span className='text-primary text-xs hover:text-amber-400'>r</span>
              on<span className='text-primary text-xs hover:text-amber-400'>-</span>
              the<span className='text-primary text-xs hover:text-amber-400'>d</span>
              light. 💡
            </h1>
          </div>

          <div className='w-2/3 mx-auto flex flex-col justify-center items-center'>
            <Image className='shadow-lg' src={Erised} alt='Mirror of Erised' />
          </div>
          <form onSubmit={handleSubmit} className='mt-4 w-2/3 mx-auto flex flex-row justify-center items-center'>
            <p>Answer here:&nbsp;</p>
            <input onChange={handleChange} className='bg-secondaryText w-1/2 md:w-1/12 text-center' placeholder='Answer' />
            <button className='bg-mainText text-primary rounded-lg ml-2 px-2'>Submit</button>
          </form>
          <div className='mt-4'>
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
          </div>
        </div>

      ) : (
        <div className='h-screen bg-primary'></div>
      )}
    </main>
  );
}


// decided to use local storage instead.
// try {
//   const response = await fetch('/api/thinkerCheck');
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   const data = await response.json();
//   console.log(data);

//   if (data.answer != process.env.NEXT_PUBLIC_THE_THINKER_ANSWER) {
//     window.alert('No cheating! Go answer the previous questions');
//     window.location.href = '/pages/games/thethinker'
//   } else {
//     setAllow(true)
//   }
// } catch (error) {
//   console.error('Error:', error);
// }

// try {
//   const response = await fetch('/api/hpCheck', {
//     method: 'POST',
//     body: JSON.stringify({ answer }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const data = await response.json();
//   console.log('the data was retrieved properly', data);
//   if (data.success) {
//     window.alert('Answer is correct!!');
//     window.location.href = '/pages/games/WIP'
//   } else {
//     window.alert('Incorrect answer!');
//   }
// } catch (error) {
//   console.error('Error:', error);
// }
