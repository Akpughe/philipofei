import React from 'react';
import { useTheme } from 'next-themes';

const BounceArrow = () => {
  const { theme } = useTheme();
  return (
    <svg
      className="animate-bounce"
      width="15"
      height="20"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4.6665V16.3332"
        stroke={theme === 'light' ? "#101828" : "#fff"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.8332 10.5L9.99984 16.3333L4.1665 10.5"
        stroke={theme === 'light' ? "#101828" : "#fff"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BounceArrow;
