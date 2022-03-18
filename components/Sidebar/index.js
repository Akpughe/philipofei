import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DiagArrow from '../../icons/DiagArrow';
import DiagArrowwhite from '../../icons/DiagArrowwhite';
import Close from '../../icons/Close';
import Closewhite from '../../icons/Closewhite';

import { useTheme } from 'next-themes';

const Sidebar = ({ close }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className=" dark:bg-nature-dark bg-contain bg-no-repeat bg-center h-full">
        <div className="flex justify-end pt-14 pr-24 pb-8 cursor-pointer">
          <div onClick={close}>
            {theme && theme === 'light' ? <Close /> : <Closewhite />}
          </div>
        </div>
        <div className=" pl-24 ">
          <div>
            <p className="airbnb-cereal-medium text-sm text-gray-400 ">Menu</p>
          </div>
          <div className="mt-3">
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="neue-machina-ultrabold sidebar-menu1 dark:text-white cursor-pointer"
              >
                {/* <a > */}
                Work
                {/* </a> */}
              </motion.button>
            </Link>
          </div>
          <div className="mt-5">
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="neue-machina-ultrabold  sidebar-menu1 dark:text-white"
              >
                About me
              </motion.button>
            </Link>
          </div>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <a className="neue-machina-ultrabold sidebar-menu1 dark:text-white">
                  Contact me
                </a>
              </Link>
            </motion.button>
          </div>
        </div>
        <div className="pl-24 absolute bottom-0 pb-6">
          <div>
            <p className="airbnb-cereal-medium text-sm sidebar-git dark:text-white mb-2 ">
              Get in touch
            </p>
            <h2 className="neue-machina-ultrabold text-2xl sidebar-menu1 dark:text-white  pb-1">
              philipofei042@gmail.com
            </h2>
            <div className="sidebar-line h-0 w-full bg-black "></div>
          </div>
          <div className="flex items-center pt-4 sidebar-socials">
            <div className="flex mr-6 text-sm airbnb-cereal-medium">
              <a className="mr-1 dark:text-white">Linkedin</a>{' '}
              {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />}
            </div>
            <div className="flex mr-6 text-sm airbnb-cereal-medium">
              <a className="mr-1 dark:text-white">Behance</a>
              {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />}
            </div>
            <div className="flex mr-6 text-sm airbnb-cereal-medium">
              <a className="mr-1 dark:text-white">Twitter</a>
              {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
