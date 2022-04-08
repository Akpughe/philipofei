import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../components/Layout';
import CircleArrow from '../../icons/CircleArrow';
import CricleArrowwhite from '../../icons/CricleArrowwhite';
import DiagArrowwhite from '../../icons/DiagArrowwhite';
import DiagArrow from '../../icons/DiagArrow';
// import vobb from '../public/img/vobb.png';
// import vobbProcess from '../public/img/image_2.png';
// import maryTaylor from '../public/img/mary_taylor.png';
// import christianMartin from '../public/img/christian_martin.png';
// import vobbSol from '../public/img/vobb_solution.png';
// import vobb_userflow from '../public/img/vobb_userflow.png';
// import vobb_userflow2 from '../public/img/vobb_userflow2.png';


import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const ArrowSvg = () => {
  const { theme, setTheme } = useTheme();

  return (
    <svg
      width="16"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83325 14.6668L14.1666 6.3335"
        stroke={theme === 'light' ? "#344054" : '#fff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83325 6.3335H14.1666V14.6668"
        stroke={theme === 'light' ? "#344054" : '#fff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Invest = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <motion.div
        className="mt-28 mb-20"
        initial={{ opacity: '0' }}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.5, scale: 0 },
        }}
      >
        <div className="flex items-center">
          <h1
            className="neue-machina-ultrabold text-afrealblue-100 dark:text-white text-7xl mb-10 "
            // style={{ color: '#344054' }}
          >
            afrealone
          </h1>
          <div className="coming-soon airbnb-cereal-medium mb-10 ml-4">
            <span>Coming soon</span>
          </div>
        </div>
        <div className=" h-1 w-full bg-black dark:bg-white mb-4 "></div>

        <div className="flex justify-between">
          <div className="flex">
            <div className="mr-14">
              <h4 className="airbnb-cereal-bold font-bold dark:text-white grey-work mb-1">
                Services
              </h4>
              <p className="airbnb-cereal-light text-sm dark:text-white color-work ">
                UX {'&'} UI Design
              </p>
            </div>
            <div className="mr-14">
              <h4 className="airbnb-cereal-bold font-bold dark:text-white grey-work mb-1">
                My Role
              </h4>
              <p className="airbnb-cereal-light text-sm dark:text-white color-work">
                Lead Designer
              </p>
            </div>
            <div className="mr-14">
              <h4 className="airbnb-cereal-bold font-bold dark:text-white grey-work mb-1">
                Project Duration
              </h4>
              <p className="airbnb-cereal-light text-sm dark:text-white color-work">1 month</p>
            </div>
          </div>

          <div className="flex">
            <motion.a
            whileHover={{ scale: 1.1 }}
              href="https://www.afreal.com/"
              target="_blank"
              rel="noreferrer"
              className="airbnb-cereal-bold font-bold dark:text-white mr-2 cursor-pointer grey-work"
            >
              Visit website
            </motion.a>{' '}
            <ArrowSvg />
            {/* {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />} */}
          </div>
        </div>
      </motion.div>

      <div className=" mb-24 ">
        <motion.img
          initial={{ opacity: '0' }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
          src="https://res.cloudinary.com/davak/image/upload/v1647386739/philip/Frame_1717_fuobty.svg"
        />
      </div>

      <div className="flex mt-32">
        {/* 1 */}

        <div>
          {/* 2 */}
          <Link href="/work/vobb_io">
            <motion.a
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.0 }}
              className={` ${
                theme === 'light' ? 'view-project' : 'view-project-white'
              }  neue-machina-ultrabold bg-black dark:bg-white text-white py-5 px-10 cursor-pointer`}
            >
              <p className="flex text-white text-lg dark:text-black">
                View next project{' '}
                <i className="ml-3">
                  {theme === 'light' ? (
                    <CircleArrow color="white" rotate={0} />
                  ) : (
                    <CricleArrowwhite color="black" />
                  )}
                </i>
              </p>
            </motion.a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Invest;
