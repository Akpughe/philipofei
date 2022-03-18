import React from 'react';
import { useTheme } from 'next-themes';

const Menu = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === 'light' ? (
        <svg
          width="20"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="32" y2="1" stroke="#101828" strokeWidth="2" />
          <line y1="15" x2="32" y2="15" stroke="#101828" strokeWidth="2" />
        </svg>
      ) : (
        <svg
          width="20"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="32" y2="1" stroke="#ffffff" strokeWidth="2" />
          <line y1="15" x2="32" y2="15" stroke="#ffffff" strokeWidth="2" />
        </svg>
      )}
    </>
  );
};

export default Menu;
