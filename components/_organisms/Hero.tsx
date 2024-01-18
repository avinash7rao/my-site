import React from "react";
import myAvatar from "@/public/images/my-avatar.png";
import Image from "next/image";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id='about'
      className='w-full max-w-screen-xl mx-auto p-4 md:py-8 m-4'>
      <div className='pb-10 flex flex-col lg:flex-row items-center justify-center gap-15'>
        <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 lg:flex-end'>
          <Image src={myAvatar} alt='Avinash`s avatar' />
        </div>
        <div className='text-center pt-16'>
          <div className='lg:flex-start'>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
              Hello I&apos;m
            </h3>
            <h2 className='text-5xl py-4 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
              Avinash Rao
            </h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
              Developer & Designer
            </h3>
          </div>
          <div className='flex flex-row gap-3 py-6 justify-center'>
            <button
              className='bg-gray-700 hover:bg-white/50 backdrop-blur text-teal-600 font-bold py-2 px-4 rounded-full'
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1P-VQ-cWAOPuug_vvYbLwrKTmzR2D8ZW1hh-66WACEO4/edit?usp=sharing"
                )
              }>
              View/Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
