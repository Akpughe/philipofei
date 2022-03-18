import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import CircleArrow from '../icons/CircleArrow';
import CricleArrowwhite from '../icons/CricleArrowwhite';
import RightArrow from '../icons/RightArrow';
import RightArrowwhite from '../icons/RightArrow-white';

import { useTheme } from 'next-themes';

//
const Contact = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <div className="flex pt-32">
        <div className="flex-1">
          <h1 className="neue-machina-ultrabold text-5xl">Hey, wanna chat ?</h1>
          <p className="airbnb-cereal-medium text-xl mt-10">
            Tell me what you are interested in...
          </p>
        </div>
        <div className="flex-1 -mt-6 ">
          <form action="">
            <div className="flex flex-col w-full mb-16">
              {/* <label htmlFor="">Your name</label> */}
              <input
                className={
                  'airbnb-cereal-medium inp' +
                  (theme === 'dark' ? ' inp-white' : '')
                }
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col w-full mb-16">
              {/* <label htmlFor="">Your name</label> */}
              <input
                className={
                  'airbnb-cereal-medium inp' +
                  (theme === 'dark' ? ' inp-white' : '')
                }
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="flex flex-col w-full">
              {/* <label htmlFor="">Your name</label> */}
              <input
                className={
                  'airbnb-cereal-medium inp' +
                  (theme === 'dark' ? ' inp-white' : '')
                }
                type="text"
                placeholder="Your message"
              />
            </div>

            <div className="mt-28">
              <a
                className={`${
                  theme === 'light' ? 'view-project' : 'view-project-white'
                } neue-machina-ultrabold bg-black dark:bg-white text-white py-6 px-16 cursor-pointer`}
              >
                <p className="flex text-white dark:text-black">
                  Send message{' '}
                  <i className="ml-3">
                    {/* {theme === 'light' ? <CircleArrow /> : <CricleArrowwhite />} */}
                  </i>
                </p>
              </a>
            </div>
          </form>
        </div>
      </div>
      {/*  */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${
          theme === 'light' ? 'work' : 'work-white'
        } flex flex-row justify-center py-5 mt-96 `}
      >
        <Link href="/work">
          <a className="flex items-center airbnb-cereal-medium text-lg text-black dark:text-white font-black cursor-pointer">
            <span className="mr-1">Go to my works</span>{' '}
            {theme === 'light' ? <RightArrow /> : <RightArrowwhite />}
          </a>
        </Link>
      </motion.div>
    </Layout>
  );
};

export default Contact;
