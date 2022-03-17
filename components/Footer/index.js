import React from 'react';
import DiagArrow from '../../icons/DiagArrow';
import DiagArrowwhite from '../../icons/DiagArrowwhite';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="footer sm:px-52 px-4 flex flex-col justify-center">
      <div className="flex items-center mb-12">
        <h1 className="neue-machina-ultrabold font-size3 leading-tight">
          <p className="">Ready to start a new project?</p>
          <p className="text-gray-400">👉🏼 philipofei042@gmail.com</p>
        </h1>
      </div>
      <div className="">
        <div className=" h-5p w-full bg-black dark:bg-white mb-4 "></div>
        <div className="flex justify-between text-sm">
          <div>
            © <span className="font-bold airbnb-cereal-bold">2022</span> -{' '}
            <span className="font-bold airbnb-cereal-bold">Philip Ofei,</span> {' '}
            <span className="devby airbnb-cereal-medium">Developed by</span> {' '}
            <span className="font-bold airbnb-cereal-bold underline">DAVAK</span>{' '}
          </div>
          <div className="flex items-center">
            <div className="flex mr-6">
              <a className="mr-1 font-bold airbnb-cereal-bold">LinkedIn</a>{' '}
              {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />}
            </div>
            <div className="flex mr-6">
              <a className="mr-1 font-bold airbnb-cereal-bold">Twitter</a>
              {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />}
            </div>
            <div className="flex mr-0">
              <a className="mr-1 font-bold airbnb-cereal-bold">Behance</a>
              {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
