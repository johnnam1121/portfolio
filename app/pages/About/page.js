'use client'
import Image from 'next/image';
import profilePic from '../../assets/ProfilePic.jpg'
import Timeline from '../../components/Timeline'

export default function About() {
  return (
    <main className="bg-primary">
      <div className='h-screen flex justify-center items-center'>
        <div className='w-1/4'>
          <h1 className="text-4xl inline-block sm:text-4xl mb-4 text-mainText border-b-2 border-secondary">About Me</h1>
          <h2 className="text-2xl sm:text-xl mb-4 text-secondary">
            Hi, I'm John Nam, and I love building things! I remember building my first PC from free/scrap
            parts from friends and family and when it finally booted up, it was one of the most satisfying
            feelings in the world!
          </h2>
          <h2 className="text-2xl sm:text-xl mb-4 text-secondary">
            This is what inspired me to study Electrical and Computer Engineering at the
            University of Texas at Austin which introduced me to the world of software development.
            Turns out building things with code is just as satisfying and I love it!
          </h2>
        </div>
        <div className='pl-10 w-1/6'>
          <Image src={profilePic} className="shadow-lg rounded-md" />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl sm:text-4xl text-center mb-10 pb-4 text-mainText w-1/3 mx-auto border-b-2 border-secondary">My Career Adventures</h1>
        <Timeline />
      </div>
    </main>
  );
}
