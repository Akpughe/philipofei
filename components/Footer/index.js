import React from 'react';
import DiagArrow from '../../icons/DiagArrow';
import DiagArrowwhite from '../../icons/DiagArrowwhite';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="footer px-28 flex flex-col justify-center">
      <div className="flex items-center mb-12">
        <h1 className="neue-machina-ultrabold text-5xl leading-tight">
          <p className="">Ready to start a new project?</p>
          <p className=" text-gray-400 ">👉🏼 philipofei042@gmail.com</p>
        </h1>
      </div>
      <div className="">
        <div className=" h-1 w-full bg-black dark:bg-white mb-4 "></div>
        <div className="flex justify-between">
          <div>© 2022 - Philip Ofei, Developed by DAVAK</div>
          <div className="flex items-center">
            <div className="flex mr-1">
              <a className="mr-1">LinkedIn</a>{' '}
              {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />}
            </div>
            <div className="flex mr-1">
              <a className="mr-1">Twitter</a>
              {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />}
            </div>
            <div className="flex mr-1">
              <a className="mr-1">Behance</a>
              {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
