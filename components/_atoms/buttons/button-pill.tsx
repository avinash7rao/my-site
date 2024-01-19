import React from "react";

interface ButtonPillProps {
  buttonText: string;
  buttonClass: string;
  onClick: () => void;
}

const ButtonPill: React.FC<ButtonPillProps> = ({
  buttonText,
  onClick,
  buttonClass,
}) => {
  return (
    <button
      className={`py-2 px-4 rounded-full ${buttonClass}`}
      onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default ButtonPill;
