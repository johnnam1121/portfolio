'use client'
import Image from 'next/image';
import thinker from '../../../assets/game/thinker.jpg'
import { useEffect, useState } from 'react';

export default function meaningofLife() {
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // No looking for the answer in the source code, cheater!
    try {
      console.log('the answer is', { answer })
      const response = await fetch('/api/thinkerCheck', {
        method: 'POST',
        body: JSON.stringify({ answer }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('the data was retrieved properly', data);
      if (data.success) {
        window.alert('Answer is correct!!');
        window.location.href = '/pages/games/harryPotter'
      } else {
        window.alert('Incorrect answer!');
      }
    } catch (error) {
      console.error('Error:', error);
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
          <Image className='shadow-lg' src={thinker} alt='The thinker photo' />
        </div>
        <form onSubmit={handleSubmit} className='mt-4 w-2/3 mx-auto flex flex-row justify-center items-center'>
          <p>Answer here:&nbsp;</p>
          <input onChange={handleChange} className='bg-secondaryText w-1/2 md:w-1/12 text-center' placeholder='Answer' />
        </form>
      </div>
    </main>
  );
}
