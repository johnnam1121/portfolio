'use client'
import Image from 'next/image';
import profilePic from '../../assets/ProfilePic.jpg'
import Timeline from '../../components/Timeline'

export default function About() {
  return (
    <main className="bg-primary">
      <div className='pt-24 md:pt-0 md:h-screen flex lg:flex-row flex-col justify-center items-center px-16 md:px-0'>
        <div className='sm:w-1/2 md:w-1/4'>
          <h1 className="text-4xl inline-block sm:text-4xl mb-4 text-mainText border-b-2 border-secondary">About Me</h1>
          <h2 className="text-md sm:text-xl mb-4 text-secondary">
            Hi, I&apos;m John Nam, and I love building things! I remember building my first PC from free/scrap
            parts from friends and family and when it finally booted up, it was one of the most satisfying
            feelings in the world!
          </h2>
          <h2 className="text-md sm:text-xl mb-4 text-secondary">
            This is what inspired me to study Electrical and Computer Engineering at the
            University of Texas at Austin which introduced me to the world of software development.
            Turns out building things with code is just as satisfying and I love it!
          </h2>
        </div>
        <div className='lg:pl-10 w-3/4 sm:w-1/2 md:w-1/4 lg:w-1/6 mt-8 flex justify-center items-center '>
          <Image src={profilePic} alt='My profile picture' className="shadow-lg rounded-md" />
        </div>
      </div>

      <div className=' flex flex-col items-center mt-20 md:mt-0 md:pb-40'>
        <h1 className="w-3/4 md:w-1/3 text-4xl sm:text-4xl text-center mb-10 pb-4 text-mainText mx-auto border-b-2 border-secondary">My Career Adventures</h1>
        <Timeline />
      </div>

      <div className=' flex flex-col justify-center items-center mt-20 md:my-40 md:pb-40'>
        <h1 className="text-4xl inline-block sm:text-4xl mb-4 text-mainText border-b-2 border-secondary">Want To Chat?</h1>
        <h2 className="w-2/3 md:w-1/2 lg:w-1/4  text-md sm:text-xl mb-4 text-secondary">
          If you share an interest or have any questions about me, feel free to give me a shout! I&apos;d love to connect
          and grow my network.
        </h2>
        <a href="mailto:johnnam93@gmail.com">
          <button className="ml-6 bg-secondary text-primary hover:bg-mainText duration-300 py-2 px-4 rounded">
            Contact me
          </button>
        </a>
      </div>

      <div className='w-2/3 mx-auto flex justify-center items-center mt-20 md:mt-40 pb-4'>
        <p className='bottom-0'>&copy; 2025 John Nam. All rights reserved. | <a href="privacy.html">Privacy Policy</a> | <a href="terms.html">Terms of Service</a></p>
      </div>
    </main>
  );
}
