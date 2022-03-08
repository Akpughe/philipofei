import React, { useState } from 'react';
import Menu from '../../icons/Menu';
import Sidebar from '../Sidebar';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [show, setShow] = useState(false);

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
              className="z-50 bg-white sm:w-4/6 right-0 w-full h-screen fixed border"
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
      <div className="flex justify-between items-center h-28 px-28">
        <div>
          <Link href="/">
            <a className="neue-machina-ultrabold font-black uppercase text-2xl cursor-pointer">
              philip ofei 🚀
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
