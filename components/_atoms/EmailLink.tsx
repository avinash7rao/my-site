import React from "react";
import { MdEmail } from "react-icons/md";

interface Props {
  emailAddress: string;
}

const EmailLink: React.FC<Props> = ({ emailAddress }) => {
  const handleClick = () => {
    location.href = `mailto:${emailAddress}`;
  };

  return (
    <a onClick={handleClick}>
      <MdEmail className='text-4xl text-teal-500 hover:text-teal-600 cursor-pointer' />
    </a>
  );
};

export default EmailLink;
