import React from "react";

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h3 className='text-4xl font-bold mb-4 text-center py-4 rounded-lg backdrop-blur-md bg-white bg-opacity-25 lg:bg-inherit lg:py-10'>
        {title}
      </h3>
    </div>
  );
};

export default Title;
