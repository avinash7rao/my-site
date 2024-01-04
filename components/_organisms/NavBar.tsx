import Link from "next/link";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Logo from "../_atoms/Logo";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className='p-3 mb-3 flex justify-between bg-black/40 backdrop-blur fixed w-full z-20 top-0 start-0 '>
      <div className='px-2'>
        <Logo />
      </div>
      <ul className='flex row-auto items-center space-x-3 px-2'>
        <li>
          <Link
            href='https://docs.google.com/document/d/1P-VQ-cWAOPuug_vvYbLwrKTmzR2D8ZW1hh-66WACEO4/edit?usp=sharing'
            target='_blank'
            aria-label='Avinash`s resume'
            title='Avinash`s resume'
            rel='noopener noreferrer'>
            <IoDocumentTextOutline className='text-2xl text-white cursor-pointer' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
