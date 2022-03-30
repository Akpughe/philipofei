import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import BounceArrow from '../icons/BounceArrow';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slide from 'react-reveal/Slide';

export default function Home() {
  // Our custom easing
  let easing = [0.6, -0.05, 0.01, 0.99];

  // Custom variant
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
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

  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  // useEffect(() => {
  //   function handleScroll() {
  //     const yPos = window.scrollY;
  //     const isScrollingUp = yPos > lastYPos;

  //     setShouldShowActions(isScrollingUp);
  //     setLastYPos(yPos);
  //   }

  //   window.addEventListener('scroll', handleScroll, false);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll, true);
  //   };
  // }, [lastYPos]);

  return (
    <>
      <Layout>
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <div className="mt125">
            <div className="mb-10">
              <motion.h1
                variants={fadeInUp}
                className="neue-machina-ultrabold black1 dark:text-white font-size1 "
              >
                Hey 👋🏽, I’m Philip .
              </motion.h1>
            </div>
            {/* line */}
            <motion.div
              variants={fadeInUp}
              className=" h-5p w-full bg-black dark:bg-white "
            ></motion.div>
            {/* end line */}
            <motion.div variants={fadeInUp} className="py-8">
              <p className="airbnb-cereal-medium grey1 dark:text-white font-size2 leading-loose max-w-850 ">
                I am a curious digital product designer and tech enthusiast, who
                has made this curiosity the core of my experience. I am trying
                to find out why we (users) do what we do and why we take certain
                decisions, what is the intersection between these decisions and
                technology, in what way will these intersections drive business
                growth across organisations, thereby making life easier for the
                everyday users (All these questions drive my thought process).
                Welcome to my portfolio! hope you find this exploration
                exciting🚀
              </p>
            </motion.div>
            <div className="pt-0 pb-16">
              <div className="flex items-center">
                <span className="airbnb-cereal-medium font-bold  dark:text-white text-sm mr-2">
                  Selected Projects
                </span>
                <BounceArrow />
              </div>
            </div>
            {/* images */}
            <div>
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1647261272/philip/Group_288_nxfl88.svg"
                alt=""
              />
              <div className="py-8">
                <h1 className="neue-machina-ultrabold font-black font-size4">
                  VOBB
                </h1>
                <p className="airbnb-cereal-medium kow dark:text-white">
                  UX {'&'} UI Design
                </p>
              </div>
            </div>
            <Slide left>
            <div>
              {/* <Image src={invest} /> */}
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1647386012/philip/Group_289_pcqdzv.svg"
                alt=""
              />
              <div className="py-8">
                <h1 className="neue-machina-ultrabold font-black font-size4 dark:text-white pb-0">
                  i-invest
                </h1>
                <p className="airbnb-cereal-medium kow dark:text-white">
                  Product Design
                </p>
              </div>
            </div>
            </Slide>
            <Slide right>

            <div className=" pt-14 ">
              {/* <Image src={invest} /> */}
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1647386739/philip/Frame_1717_fuobty.svg"
                alt=""
              />
              <div className="py-8">
                <h1 className="neue-machina-ultrabold font-black font-size4 dark:text-white">
                  Afreal one
                </h1>
                <p className="airbnb-cereal-medium kow dark:text-white">
                  UX {'&'} UI Design
                </p>
              </div>
            </div>
            </Slide>

          </div>
        </motion.div>
      </Layout>
    </>
  );
}
