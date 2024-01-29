import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import EmailLink from "@/components/_atoms/EmailLink";

export interface SocialLinks {
  [platform: string]: {
    url: string;
    label: string;
    title: string;
    icon: string;
  };
}

interface FooterProps {
  socialLinks: SocialLinks;
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const linkPlatforms = Object.keys(socialLinks);

  return (
    <footer className='rounded-lg'>
      <hr className='my-6 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <div className='py-3 flex justify-center space-x-4'>
        {linkPlatforms.map((platform) => {
          const linkData = socialLinks[platform];
          return (
            <div
              key={platform}
              onClick={() => window.open(linkData.url, "_blank")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  window.open(linkData.url, "_blank");
                }
              }}
              role='link'
              tabIndex={0}
              aria-label={linkData.label}
              title={linkData.title}
              style={{ cursor: "pointer" }}>
              {renderIcon(linkData.icon)}
            </div>
          );
        })}
      </div>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8 m-4'>
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

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "AiFillLinkedin":
      return (
        <AiFillLinkedin className='text-4xl text-teal-500 hover:text-teal-600 cursor-pointer' />
      );
    case "AiFillGithub":
      return (
        <AiFillGithub className='text-4xl text-teal-500 hover:text-teal-600 cursor-pointer' />
      );
    case "ImYoutube":
      return (
        <ImYoutube className='text-4xl text-teal-500 hover:text-teal-600 cursor-pointer' />
      );
    case "EmailIcon":
      return <EmailLink emailAddress='avinash7rao@gmail.com' />;
    default:
      return null;
  }
};

export default Footer;
