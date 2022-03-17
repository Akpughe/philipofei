import React, { useState } from 'react';
import Menu from '../../icons/Menu';
import Sidebar from '../Sidebar';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleShow = (event) => {
    setShow(!show);
  };
  return (
    <>
      {show && (
        <>
          <AnimatePresence>
            <motion.div
              initial={{ x: '100%' }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '100%',
              }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="z-50 bg-white dark:bg-black sm:w-[735px] right-0 top-0 w-full h-screen fixed border dark:border-0 bg"
            >
              {' '}
              <Sidebar show={show} close={handleShow} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
              close={handleShow}
              // className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
            />
          </AnimatePresence>
        </>
      )}
      <div className="flex justify-between items-center h-28 sm:px-56 px-4">
        <div>
          <Link href="/">
            <a className=" cursor-pointer">
              {theme === 'light' ? (
                <img
                  src="https://res.cloudinary.com/davak/image/upload/v1647257743/philip/ofei_ewicvg.svg"
                  className="w-150"
                  alt="logo"
                />
              ) : (
                <img
                  src="https://res.cloudinary.com/davak/image/upload/v1647259194/philip/PHILIP_OFEI_utzaho.svg"
                  className="w-150"
                  alt="logo"
                />
              )}
            </a>
          </Link>
        </div>
        <div className="cursor-pointer" onClick={handleShow}>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
