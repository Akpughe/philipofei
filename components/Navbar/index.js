import React, { useState } from 'react';
import Menu from '../../icons/Menu';
import Sidebar from '../Sidebar';
import Link from 'next/link';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { theme, setTheme } = useTheme();

  const [open, cycleOpen] = useCycle(false, true);

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
              // exit={{
              //   x: '100%',
              // }}
              exit={{
                width: 0,
                transition: {
                  type: 'spring',
                  bounce: 0.4,
                  duration: 0.9,
                  stiffness: 100,
                },
              }}
              transition={{
                type: 'spring',
                bounce: 0.4,
                duration: 0.9,
                stiffness: 100,
              }}
              className={`dim z-50 ${
                theme === 'light' ? 'bg-white bg' : 'bg_dark'
              } sm:w-[735px] right-0 top-0 w-full h-screen fixed border dark:border-0 `}
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
              transition={{ type: 'spring', bounce: 0.5, duration: 0.3 }}
              close={handleShow}
              // className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
            />
          </AnimatePresence>
        </>
      )}
      <div className="flex justify-between items-center h-28 sm:px-56 px-4">
        <div>
          <Link href="/">
            <a className="cursor-pointer">
              {/* <div className=" bg-logo-light dark:bg-logo-dark bg-no-repeat	bg-contain w-36 h-8 "></div> */}
              <h1 className='logo logocolor dark:text-white'>PHILIP OFEI ???? </h1>
              {/* <img
                src={
                  theme === 'light'
                    ? 'https://res.cloudinary.com/davak/image/upload/v1647954036/philip/PHILIP_OFEI_1_qmjmnz.png'
                    : 'https://res.cloudinary.com/davak/image/upload/v1647954056/philip/PHILIP_OFEI_2_y1cfzi.png'
                }
                className="w-150"
                alt="logo"
              /> */}
            </a>
          </Link>
        </div>
        <div className="cursor-pointer" onClick={handleShow}>
          {/* <Menu /> */}
          <div className="bg-menu-light dark:bg-menu-dark bg-no-repeat bg-contain w-5 h-4"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
