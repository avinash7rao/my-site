import React, { useState, useEffect } from "react";
import Image from "next/image";
import ButtonPill from "../_atoms/buttons/button-pill";
import Section from "../_templates/Section";

interface HeroProps {
  info: {
    name: string;
    position: string;
    summary: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const Hero: React.FC<HeroProps> = () => {
  const [data, setData] = useState<HeroProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { info } = data;

  return (
    <Section id='about'>
      <div className='pb-10 flex flex-col lg:flex-row items-center justify-center gap-15'>
        <div className='mx-10 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 lg:flex-end'>
          <Image
            src={info?.avatar.src || ""}
            alt={info?.avatar.alt || ""}
            width={500}
            height={500}
            priority
          />
        </div>
        <div className='text-center pt-16'>
          <div className='lg:flex-start'>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
              Hello I&apos;m
            </h3>
            <h2 className='text-5xl py-4 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
              {info?.name}
            </h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
              {info?.position}
            </h3>
          </div>
          <div className='flex flex-row gap-3 py-6 justify-center'>
            <ButtonPill
              buttonClass='bg-gray-700 hover:bg-white/50 backdrop-blur text-teal-600 font-bold'
              buttonText='View/Download Resume'
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1P-VQ-cWAOPuug_vvYbLwrKTmzR2D8ZW1hh-66WACEO4/edit?usp=sharing"
                )
              }
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
