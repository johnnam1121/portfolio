'use client'
import Image from 'next/image';
import profilePic from '../../assets/ProfilePic.jpg'
import Timeline from '../../components/Timeline'
import ProjectImageGallery from '@/app/components/ProjectImageGallery';

export default function Projects() {
  return (
    <main className="bg-primary h-screen">
      <div className='flex justify-center items-center'>
        {/* <h1 className="text-4xl inline-block sm:text-4xl mb-4 text-mainText border-b-2 border-secondary">WIP</h1> */}
      </div>
      <ProjectImageGallery />

    </main>
  );
}
