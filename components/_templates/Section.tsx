import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className }) => {
  return (
    <section
      id={id}
      className={`w-full max-w-screen-xl mx-auto p-4 md:py-14 m-4 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
