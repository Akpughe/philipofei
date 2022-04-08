import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import philip from '../public/img/philip.png';
import BounceArrow from '../icons/BounceArrow';
import Circle from '../icons/Circle';
import Circlewhite from '../icons/Circle-white';
import RightArrow from '../icons/RightArrow';
import RightArrowwhite from '../icons/RightArrow-white';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const About = () => {
  const [show, setShow] = useState(false);
  const { theme, setTheme } = useTheme();
<<<<<<< HEAD
  const [active, setActive] = useState(false);
=======
  const [active, setActive] = useState(false)

>>>>>>> 0334ab5630ed3ef33b4ed8958dbdd4fc9587c9ff

  function changeColor(e) {
    e.target.style.color = '#EF4444';
  }
  function changeBack(e) {
    e.target.style.color = '';
  }

  // Our custom easing
  let easing = [0.6, -0.05, 0.01, 0.99];

  // Custom variant
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0.5,
      transition: { duration: 1, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  const fadeInUp2 = {
    initial: {
      y: 60,
      opacity: 0.5,
      transition: { duration: 1, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easing,
      },
    },
  };
  const fadeInUp3 = {
    initial: {
      x: 60,
      opacity: 0.5,
      transition: { duration: 1, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <Layout>
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0.5 }}>
        <div className="flex pt-24 ">
          <div className="flex-1">
            {/* head */}
            <div>
              <motion.h1
                variants={fadeInUp}
                className="neue-machina-ultrabold font-extrabold dark:text-white font-size1 pb-2"
              >
                About me .
              </motion.h1>
            </div>
            {/* paragraph */}
<<<<<<< HEAD
            <motion.div className="" variants={fadeInUp2}>
              <p
=======
            <div>
              <motion.p
                variants={fadeInUp2}
>>>>>>> 0334ab5630ed3ef33b4ed8958dbdd4fc9587c9ff
                className="airbnb-cereal-medium about_p text-gray-400 dark:text-white"
                // style={{ lineHeight: '48px', width: '750px' }}
              >
                I am Philip Olorunfemi Ofei, a Software product designer whose
                focus is to create seamless user experience and beautiful
                cross-functional platforms.
              </p>
              <p className="airbnb-cereal-medium about_p text-gray-400 dark:text-white">
                I have years of Experience creating user centered products,
                meeting both business and user needs optimally.
              </p>
              <p className="airbnb-cereal-medium about_p text-gray-400 dark:text-white">
              Using strategy, research and design to
                solve product challenges - The outcome : Functional and
                technically refined products that are aswell aesthetically
                pleasing and easy to use.
              </p>
              <p className="airbnb-cereal-medium about_p text-gray-400 dark:text-white">
              I have worked with some of the
                front runners in organizations across Fintech, Realestate-tech,
                Medtech, Edu-tech and Psychometric-tech.
              </p>
              <p className="airbnb-cereal-medium about_p text-gray-400 dark:text-white">
              I love traveling
                and exploring food documentaries from around the world
              </p>
            </motion.div>
          </div>
          {/* image */}
          <div className="sm:flex hidden justify-center flex-1 px-4 -mt-4 ">
            <motion.div
              variants={fadeInUp3}
              className={` ${
                theme === 'light' ? 'img-rect' : 'img-rect-white'
              } `}
            >
              <Image className="img-rect-image z-10" src={philip} />
            </motion.div>
          </div>
        </div>
        <div className="pt-12 pb-32">
          <div className="flex items-center">
            <span className="airbnb-cereal-medium font-bold text-sm mr-2 dark:text-white">
              More about me
            </span>
            <BounceArrow />
          </div>
        </div>
        <motion.div
          className=" mt-20 "
<<<<<<< HEAD
          initial="hidden"
=======
          initial={{ opacity: 0.4 }}
>>>>>>> 0334ab5630ed3ef33b4ed8958dbdd4fc9587c9ff
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
<<<<<<< HEAD
            hidden: { opacity: 0, scale: 0 },
=======
            hidden: { opacity: 0.5, scale: 0 },
>>>>>>> 0334ab5630ed3ef33b4ed8958dbdd4fc9587c9ff
          }}
        >
          <h6 className="airbnb-cereal-medium text-xl leading-9 sidebar-git dark:text-white mb-2">
            Skills Highlight ✨.
          </h6>
          {/* line */}
          <div className=" h-5p w-11 bgblack dark:bg-white"></div>
        </motion.div>
        <div className="pb-32">
          {/* 1 */}
          <div className="flex mt-16 justify-between">
            <div>
              <a
                className="neue-machina-ultrabold skill-size cursor-pointer dark:text-white"
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
              >
                UX Research
              </a>
            </div>
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                Design thinking
              </a>
            </div>
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                UI Design
              </a>
            </div>
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size  cursor-pointer  dark:text-white "
              >
                Scrum
              </a>
            </div>
          </div>
          {/* 2 */}
          <div className="flex mt-8 justify-between">
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                Communication
              </a>
            </div>
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                Information Architecture
              </a>
            </div>
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                Agile
              </a>
            </div>
          </div>
          {/* 3 */}
          <div className="flex mt-8 justify-between">
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                User Testing
              </a>
            </div>
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                Interaction Design
              </a>
            </div>
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                Wireframing
              </a>
            </div>
          </div>
          {/* 4 */}
          <div className="flex mt-8 justify-between">
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                Design Sprint
              </a>
            </div>
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                Customer Journey Map
              </a>
            </div>
            <div>
              <a
                onMouseEnter={changeColor}
                onMouseLeave={changeBack}
                className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white "
              >
                Empathy
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="">
          <h6 className="airbnb-cereal-medium text-xl leading-9  dark:text-white sidebar-git mb-2">
            Tools ⚙️.
          </h6>
          {/* line */}
          <div className=" h-5p w-8 bgblack dark:bg-white "></div>
        </div>
        {/*  */}
        <div className="flex justify-center mb-10 mt-10">
          {/* begin */}
          <div className="flex flex-col h-full items-center relative w-14 space-y-10 circ">
            <div
              className={`${
                theme === 'light' ? 'block-line' : 'block-line-white'
              } w-px h-full absolute`}
            ></div>

            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className=" z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className=""
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="mb-4 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
          </div>
          {/* end */}
          {/* new */}
          <div className=" h-full pt-10 pl-8 pb-32  ">
            {' '}
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white text-xl"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              {' '}
              Figma{' '}
            </motion.p>{' '}
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white text-xl mt12 "
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              {' '}
              Adobe XD{' '}
            </motion.p>{' '}
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white text-xl mt12"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Adobe illustration
            </motion.p>
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white text-xl mt12"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Adobe Photoshop
            </motion.p>
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white text-xl mt24"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Framer
            </motion.p>
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white h-5 text-xl mt24"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Google Services
            </motion.p>
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white text-xl mt33"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Miro
            </motion.p>
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white text-xl mt25"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Whimsical
            </motion.p>
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white text-xl mt26"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Lookback
            </motion.p>
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white text-xl mt12"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Notion
            </motion.p>
            <motion.p
              className="neue-machina-ultrabold devby dark:text-white h-5 text-xl mt25"
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Jira
            </motion.p>
          </div>
          {/* new end */}
        </div>
        {/*  */}
        <div className="">
          <h6 className="airbnb-cereal-medium text-xl leading-9 text-gray-400 dark:text-white mb-2">
            Experience 💻️.
          </h6>
          {/* line */}
          <div className=" h-5p w-16 bg-black dark:bg-white "></div>
        </div>
        {/* experience */}
        <div className="flex mb-10 mt-10">
          {/* b  */}
          <div className=" h-full pt-10 pr-10 ">
            {' '}
            <motion.p
              className="flex flex-col neue-machina-ultrabold devby dark:text-white text-xl space1 "
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              {' '}
              Medsaf Disrupt Pharmacy{' '}
              <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
                July 2021 - Lagos, Nigeria
              </span>
            </motion.p>{' '}
            <motion.p
              className="flex flex-col neue-machina-ultrabold devby dark:text-white  text-xl space2  "
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              {' '}
              Parthian Partners (i-invest){' '}
              <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
                July 2021 - Lagos, Nigeria
              </span>
            </motion.p>{' '}
            <motion.p
              className="flex flex-col neue-machina-ultrabold devby dark:text-white  text-xl space2i "
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              KUPLR
              <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
                July 2021 - Lagos, Nigeria
              </span>
            </motion.p>
            <motion.p
              className="flex flex-col neue-machina-ultrabold devby dark:text-white  text-xl space2e "
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              Yudimy
              <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
                July 2021 - Lagos, Nigeria
              </span>
            </motion.p>
            <motion.p
              className="flex flex-col neue-machina-ultrabold devby dark:text-white  text-xl space2s "
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              VOBBS
              <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
                July 2021 - Lagos, Nigeria
              </span>
            </motion.p>
            <motion.p
              className="flex flex-col neue-machina-ultrabold devby dark:text-white text-xl "
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              <div>
                AFREAL{' '}
                <small className="text-xs">
                  (newhomes.ng, financeplus.ng, afrealone)
                </small>
              </div>
              <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
                July 2021 - Lagos, Nigeria
              </span>
            </motion.p>
          </div>
          {/* e  */}
          {/* begin */}
          <div className="flex flex-col h-full items-center relative w-14">
            <div
              className={`${
                theme === 'light' ? 'block-line' : 'block-line-white'
              } block-line w-px h-full absolute  `}
            ></div>
            {/* begin */}
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="circle-mb mt-10 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="circle-mb1 mt-10 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="circle-mb1i mt-10 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="circle-mb1e mt-10 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="circle-mb1s mt-10 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="mt-10 mb-36 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            {/* end */}
          </div>
          {/* end */}
          {/* new */}
          <div className=" h-full pt-10 pl-12 pb-32  ">
            {' '}
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className=" mb-16 "
            >
              <p className="neue-machina-ultrabold devby dark:text-white  text-xl">
                {' '}
                UX {'&'} UI Designer (Remote){' '}
              </p>{' '}
              <ul className="airbnb-cereal-medium text-sm grey1 dark:text-white pl-5 pt-5 max-w-xl  list-disc">
                <li className="pb-4">
                  Medsaf is a medical tech firm backed by Crunchbase.
                </li>
                <li className="pb-4">
                  At Medsaf I{'’'}m currently incharge of designing medical
                  solutions that seamlessly brings authentic medications to
                  stakeholders (Hospitals, etc) and individuals across Africa.
                </li>
                <li className="pb-4">
                  Performing user research {'&'} ideating on exciting ideas.
                </li>
                <li className="pb-4">
                  Rolling out series of products (Medsaf Assure, Medsaf
                  Diagnostics, Medsaf Patients Direct) that will service
                  different players in the medical industry.
                </li>
                <li className="pb-4">
                  Estimated ROI increased by 20% at the end of 4th quater of
                  2021
                </li>
                <li className="pb-4">
                  Designed pitch decks that has raised over $200k in closed
                  investor pitch rounds
                </li>
                <li className="pb-4">
                  Medsaf was among the winners of Google{'’'}s Black Founders
                  Fund 2021
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className=" margin-b "
            >
              <p className="neue-machina-ultrabold devby dark:text-white  text-xl">
                {' '}
                UX {'&'} UI Designer{' '}
              </p>{' '}
              <ul className="airbnb-cereal-medium text-sm grey1 dark:text-white pl-5 pt-5 max-w-xl  list-disc">
                <li className="pb-4">
                  i-invest is Nigeria{'’'}s foremost digital platform for
                  Treasury Bills, and now the preferred financial services
                  marketplace in Africa.{' '}
                </li>
                <li className="pb-4">
                  I revamped the i-invest mobile application and shipped 3 new
                  features to production which did 26% increase in the ROI of
                  2021 compared to 2020.
                </li>
                <li className="pb-4">
                  i-invest processed over ₦ 16.3 billion investment payouts to
                  its users in 2021.
                </li>
                <li className="pb-4">
                  I revamped the i-invest web application and redesigned the
                  i-invest website.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="margin-b3"
            >
              <p className="neue-machina-ultrabold devby dark:text-white  text-xl">
                {' '}
                Lead Product Designer (Contract)
              </p>{' '}
              <ul className="airbnb-cereal-medium text-sm grey1 dark:text-white pl-5 max-w-xl pt-5  list-disc">
                <li className="pb-4">
                  At Kuplr, I led all product design efforts, managed a small
                  remote design team
                </li>
                <li className="pb-4">
                  Managed all design handoffs and projects, conducted usability
                  testing, led user interview sessions
                </li>
                <li className="pb-4">
                  Created journey maps, user flows, style guides {'&'} UI
                  libraries.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="margin-b4"
            >
              <p className="neue-machina-ultrabold devby dark:text-white  text-xl">
                {' '}
                Product Designer
              </p>{' '}
              <ul className="airbnb-cereal-medium text-sm grey1 dark:text-white pl-5 max-w-xl pt-5  list-disc">
                <li className="pb-4">
                  At Yudimy, i worked on clarity.yudimy.com, a psychometric web
                  app that helps inmotion.iduals and organizations to be happily
                  productive.
                </li>
                <li className="pb-4">
                  Saw an increase of users by 40% and bagged several awards in
                  the tech space.
                </li>
                <li className="pb-4">Redesigned the company’s website</li>
                <li className="pb-4">
                  Worked directly with the CEO {'&'} rest of product team to
                  achieve these results
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="margin-b5"
            >
              <p className="neue-machina-ultrabold devby dark:text-white  text-xl">
                {' '}
                UX {'&'} UI Designer (Contract){' '}
              </p>{' '}
              <ul className="airbnb-cereal-medium text-sm grey1 dark:text-white pl-5 max-w-xl pt-5  list-disc">
                <li className="pb-4">
                  Vobbs is an international platform based in the UK helping
                  students find credible abroad study agents
                </li>
                <li className="pb-4">I designed the companies website</li>
                <li className="pb-4">
                  Conducted secondary research, and spoke to stake holders
                  validating the idea
                </li>
                <li className="pb-4">
                  Designed high-fidelity prototypes of the web application
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
            >
              <p className="neue-machina-ultrabold devby dark:text-white  text-xl">
                {' '}
                UX {'&'} UI Designer (Contract){' '}
              </p>{' '}
              <ul className="airbnb-cereal-medium text-sm grey1 dark:text-white pl-5 max-w-xl pt-5  list-disc">
                <li className="pb-4">
                  Afreal is a real estate platform using innovative technology
                  to solve real estate problems for Nigerians
                </li>
                <li className="pb-4">
                  Created design system and web applications
                </li>
                <li className="pb-4">
                  Proposed several solutions around the companies products
                </li>
              </ul>
            </motion.div>
          </div>
          {/* new end */}
        </div>
        {/* education */}
        <div className=" mt-20 ">
          <h6 className="airbnb-cereal-medium text-xl leading-9 text-gray-400 dark:text-white mb-2">
            Education {'&'} Certifications 💻️.
          </h6>
          {/* line */}
          <div className=" h-5p w-14 bg-black dark:bg-white "></div>
        </div>
        {/*  */}
        <div className="flex justify-center mb-10 mt-10 ml-10">
          <div className="flex flex-col h-full items-center relative w-14 ">
            <div
              className={`${
                theme === 'light' ? 'block-line' : 'block-line-white'
              } block-line w-px h-full absolute  `}
            ></div>

            <motion.div
              initial={{ opacity: 0.5 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="mb-20 mt-8 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.3 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="mb-20 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.3 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="mb-24 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.3 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="mb85 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0.3 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="mb-20 z-50 "
            >
              {theme === 'light' ? <Circle /> : <Circlewhite />}
            </motion.div>
          </div>

          <div className=" h-full max-w-xs pl-4 pb-32 pt-5 ">
            {' '}
            <motion.p
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white text-xl mb_14 mt-4"
            >
              {' '}
              Google{' '}
              <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
                UX Design - 2022
              </span>
            </motion.p>{' '}
            <motion.p
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white text-xl mb_14i "
            >
              {' '}
              Udemy{' '}
              <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
                Learn Jira Real world examples - 2021
              </span>
            </motion.p>{' '}
            <motion.p
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white  text-xl mb-14"
            >
              Product school
              <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
                Product Masterclass : How to build digital products - 2020
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white  text-xl mb-14"
            >
              Udacity
              <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
                User Experience Design Nano Degree - 2020
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0.4 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0 },
              }}
              className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white  text-xl"
            >
              University of Abuja
              <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
                B.Sc. PHYSICS - 2015
              </span>
            </motion.p>
          </div>
        </div>
        {/* end education */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${
            theme === 'light' ? 'work' : 'work-white'
          } flex flex-row justify-center py-5 `}
        >
          <Link href="/work">
            <a className="flex items-center airbnb-cereal-medium text-lg text-black dark:text-white font-black cursor-pointer">
              <span className="mr-1">Go to my works</span>{' '}
              {theme === 'light' ? <RightArrow /> : <RightArrowwhite />}
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default About;
