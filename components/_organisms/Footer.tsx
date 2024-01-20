import React from "react";
import EmailLink from "@/components/_atoms/EmailLink";
import { ImYoutube } from "react-icons/im";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='rounded-lg'>
      <div className='py-3 flex justify-center space-x-4'>
        <a
          href='https://www.linkedin.com/in/avinash-k-rao/'
          target='_blank'
          aria-label='Avinash`s LinkedIn profile'
          title='Avinash`s LinkedIn profile'
          rel='noopener noreferrer'>
          <AiFillLinkedin className='text-4xl text-teal-500 hover:text-teal-600 cursor-pointer' />
        </a>
        <a
          href='https://github.com/avinash7rao'
          target='_blank'
          aria-label='Avinash`s GitHub profile'
          title='Avinash`s GitHub profile'
          rel='noopener noreferrer'>
          <AiFillGithub className='text-4xl text-teal-500 hover:text-teal-600 cursor-pointer' />
        </a>
        <EmailLink emailAddress='avinash7rao@gmail.com' />
        <a
          href='https://www.youtube.com/@machis3150'
          target='_blank'
          aria-label='Avinash`s YouTube Channel'
          title='Avinash`s YouTube Channel'
          rel='noopener noreferrer'>
          <ImYoutube className='text-4xl text-teal-500 hover:text-teal-600 cursor-pointer' />
        </a>
      </div>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8 m-4'>
        <hr className='my-6 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2024&nbsp;
          <a href='https://avirao.vercel.app/' className='hover:underline'>
            Avinash Rao
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
