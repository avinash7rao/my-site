import Link from "next/link";
import React from "react";
import Logo from "../_atoms/Logo";
import styles from "@/styles/Home.module.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <section className={styles.bgBlack}>
      <nav className='p-7 mb-3 flex justify-between bg-black/40 backdrop-blur fixed w-full z-20 top-0 start-0 '>
        <div className='px-2'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <ul className='flex row-auto items-center space-x-3 px-2 gap-4'>
          <li>
            <Link
              href='#about'
              aria-label='About Avinash'
              title='About'
              rel='noopener noreferrer'
              className='hover:underline'>
              <h3>About</h3>
            </Link>
          </li>
          {/* <li>
            <Link
              href='#experience'
              aria-label="Avinash's Experience"
              title='Experience'
              rel='noopener noreferrer'
              className='hover:underline'>
              <h3>Experience</h3>
            </Link>
          </li> */}
          {/* <li>
            <Link
              href='#projects'
              aria-label="Avinash's Projects"
              title='Projects'
              rel='noopener noreferrer'
              className='hover:underline'>
              <h3>Porject&apos;s</h3>
            </Link>
          </li> */}
          {/* <li>
            <Link
              href='#contact'
              aria-label='Contact Avinash'
              title='Contact'
              rel='noopener noreferrer'
              className='hover:underline'>
              <h3>Contact</h3>
            </Link>
          </li> */}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
