import Link from "next/link";
import React from "react";

interface LogoProps {
  href?: string;
}

const Logo: React.FC<LogoProps> = ({ href = "/" }) => {
  return (
    <Link href={href}>
      <svg
        width='36px'
        height='36px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            d='M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15'
            stroke='#5bc0be'
            strokeWidth='1.5'
            strokeLinecap='round'></path>{" "}
          <path
            d='M13.2942 7.17041L12.0001 12L10.706 16.8297'
            stroke='#5bc0be'
            strokeWidth='1.5'
            strokeLinecap='round'></path>{" "}
          <path
            d='M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15'
            stroke='#5bc0be'
            strokeWidth='1.5'
            strokeLinecap='round'></path>{" "}
          <path
            d='M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7'
            stroke='#5bc0be'
            strokeWidth='1.5'
            strokeLinecap='round'></path>{" "}
        </g>
      </svg>
    </Link>
  );
};

export default Logo;
