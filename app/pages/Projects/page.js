'use client'
import Image from 'next/image';
import profilePic from '../../assets/ProfilePic.jpg'
import Timeline from '../../components/Timeline'
import ProjectImageGallery from '@/app/components/ProjectImageGallery';

export default function Projects() {
  return (
    <main className="bg-primary h-screen">
      <div className='flex mx-auto items-center justify-center pt-32 lg:pt-80'>
        <h1 className="md:hidden text-4xl inline-block sm:text-4xl mb-4 text-mainText border-b-2 border-secondary">
          Projects
        </h1>
        <h1 className="hidden md:inline-block text-4xl sm:text-4xl mb-4 text-mainText border-b-2 border-secondary">
          Some Thing&apos;s I&apos;ve Made
        </h1>
      </div>
      <ProjectImageGallery />
    </main>
  );
}
