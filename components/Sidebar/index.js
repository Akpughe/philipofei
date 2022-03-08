import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DiagArrow from '../../icons/DiagArrow';
import Close from '../../icons/Close';

const Sidebar = ({ close }) => {
 
  return (
    <>
      <div className="">
        <div className="flex justify-end pt-16 pr-24 pb-16 cursor-pointer">
          <div onClick={close}>
            <Close />
          </div>
        </div>
        <div className=" pl-36 ">
          <div>
            <p className="airbnb-cereal-medium text-lg text-gray-400 ">Menu</p>
          </div>
          <div className=" h-16 pt-7 ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a className="neue-machina-ultrabold text-5xl text-gray-700 cursor-pointer">
                Work
              </a>
            </motion.button>
          </div>
          <div className=" h-16 pt-16 pb-4 ">
            <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a className="neue-machina-ultrabold text-5xl text-gray-700">
                About me
              </a>
            </motion.button>
            </Link>
          </div>
          <div className=" h-16 pt-20 pb-4 ">
          <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
            <a className="neue-machina-ultrabold text-5xl text-gray-700">
              Contact me
            </a>
            </motion.button>
          </div>
        </div>
        <div className="pl-36 absolute bottom-0 pb-10">
          <div>
            <p className="airbnb-cereal-medium text-lg text-gray-400 ">
              Get in touch
            </p>
            <h2 className="neue-machina-ultrabold text-3xl text-gray-700 pt-1 pb-2">
              philipofei042@gmail.com
            </h2>
            <div className="sidebar-line h-0 w-full bg-black "></div>
          </div>
          <div className="flex items-center pt-8">
            <div className="flex mr-1">
              <a className="mr-1">LinkedIn</a> <DiagArrow />
            </div>
            <div className="flex mr-1">
              <a className="mr-1">Twitter</a>
              <DiagArrow />
            </div>
            <div className="flex mr-1">
              <a className="mr-1">Behance</a>
              <DiagArrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
