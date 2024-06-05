'use client'
import Image from 'next/image';
import thinker from '../../../assets/game/thinker.jpg'
import { useEffect, useState } from 'react';
import correct from '../../../assets/game/sounds/correct.wav';
import wrong from '../../../assets/game/sounds/wrong.wav';

export default function TheThinker() {
  const [answer, setAnswer] = useState('');
  const [hint, setHint] = useState(false);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  // Nice try! The answer is hidden from the public :) Maybe you're abilty to look in the source code might be helpful later..
  const handleSubmit = async (e) => {
    e.preventDefault();

    // testing local storage
    localStorage.setItem('thinkerAnswer', answer);

    if (localStorage.getItem('thinkerAnswer') === process.env.NEXT_PUBLIC_THE_THINKER_ANSWER) {
      const correctAudio = new Audio(correct);
      correctAudio.volume = 0.5;
      correctAudio.currentTime = 0;
      correctAudio.play();
      setTimeout(() => {
        window.alert('Well done!\nDid you know that the universes expansion rate is abour 42 miles per second? Maybe Douglas Adams was not that far off!\nNow get ready. It only gets harder from here!')
        window.location.href = '/pages/games/erised';
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
      <div className='mx-auto h-screen flex flex-col justify-center items-center'>
        <div className='w-3/4 mx-auto flex flex-col justify-center items-center'>
          <h1 className="text-center text-4xl inline-block sm:text-4xl text-mainText border-b-2 border-secondary">Try your hand at a couple of riddles?</h1>
          <h1 className="pt-10 md:pt-28 text-center text-2xl sm:text-3xl mb-4 text-mainText">What is the meaning of life, the universe and everything else?</h1>
        </div>
        <div className='w-2/3 mx-auto flex flex-col justify-center items-center'>
          <Image className='shadow-lg' src={thinker} alt='The thinker photo' priority />
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
            <p className='bg-secondaryText text-center'>&quot;The answer to the ultimate question is simpler than you think.&quot;</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </main>
  );
}

// using local storage instead
// try {
//   // console.log('the answer is', { answer })
//   const response = await fetch('/api/thinkerCheck', {
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
//     window.location.href = '/pages/games/erised'
//   } else {
//     window.alert('Incorrect answer!');
//   }
// } catch (error) {
//   console.error('Error:', error);
// }
