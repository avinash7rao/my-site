import React from "react";
import Section from "@/components/_templates/Section";
import Image from "next/image";
import Title from "../_atoms/Title";

export interface AboutProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

const About: React.FC<{ about: AboutProps }> = ({ about }) => {
  return (
    <Section id='about'>
      <Title title={about?.title} />
      <div className='flex flex-col gap-8 px-3 items-center justify-center lg:flex-row'>
        <Image
          src={about?.image.src}
          alt={about?.image.alt}
          width={400}
          height={400}
          className='hidden lg:block'
        />
        <p
          className='lg:text-left text-center text-md lg:text-xl'
          dangerouslySetInnerHTML={{ __html: about?.description }}
        />
      </div>
    </Section>
  );
};

export default About;
