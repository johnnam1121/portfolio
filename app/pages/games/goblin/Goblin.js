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
      }
    };
    checkAnswer();
  }, []);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // localStorage.setItem('hpAnswer', answer);
    // if (answer === process.env.NEXT_PUBLIC_HP_ANSWER1 || answer === process.env.NEXT_PUBLIC_HP_ANSWER2) {
    //   const correctAudio = new Audio(correct);
    //   correctAudio.volume = 0.5;
    //   correctAudio.currentTime = 0;
    //   correctAudio.play();
    //   setTimeout(() => {
    //     window.alert('A fellow Harry Potter fan I see?\nFun fact: did you know the Mirror of Erised spelt backwards spells Desire? Because it shows the views most desired wishes. Get it?');
    //     window.location.href = '/pages/games/atla'
    //   }, 2000); // Adjust the delay time (in milliseconds) as needed
    // } else {
    //   const wrongAudio = new Audio(wrong);
    //   wrongAudio.volume = 0.5;
    //   wrongAudio.currentTime = 0;
    //   wrongAudio.play();
    // }
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
              <Image className='shadow-lg' src={goblin} alt='Mirror of Erised' />
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
