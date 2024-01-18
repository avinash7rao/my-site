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
          <Logo href='/' />
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
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
