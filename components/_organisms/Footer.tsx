import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='rounded-lg'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8 m-4'>
        <hr className='my-6 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2024{" "}
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
