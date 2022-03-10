import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import BounceArrow from '../icons/BounceArrow';
import vobb from '../public/img/vobb.png';
import invest from '../public/img/invest.png';
import { motion } from 'framer-motion';

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


  return (
    <>
      <Layout>
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <div className=" mt-36 ">
            <div className="py-20">
                <motion.h1 variants={fadeInUp} className="neue-machina-ultrabold dark:text-white font-extrabold text-7xl ">
                  Hey 👋🏽, I’m Philip .
                </motion.h1>
            </div>
            {/* line */}
            <motion.div variants={fadeInUp} className=" h-1 w-full bg-black dark:bg-white "></motion.div>
            {/* end line */}
            <motion.div variants={fadeInUp} className="py-10">
              <p className="airbnb-cereal-medium text-gray-400 dark:text-white text-2xl leading-loose w-2/3">
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
                <span className="airbnb-cereal-medium font-bold  dark:text-white text-lg mr-2">
                  Selected Projects
                </span>
                <BounceArrow />
              </div>
            </div>
            {/* images */}
            <div>
              <Image src={vobb} />
              <div className="py-8">
                <h1 className="neue-machina-ultrabold font-black text-3xl pb-3">
                  VOBB
                </h1>
                <p className="airbnb-cereal-medium text-lg text-gray-600 dark:text-white">
                  UX {'&'} UI Design
                </p>
              </div>
            </div>
            <div className=" pt-14 ">
              <Image src={invest} />
              <div className="py-8">
                <h1 className="neue-machina-ultrabold font-black text-3xl dark:text-white pb-3">
                  i-invest
                </h1>
                <p className="airbnb-cereal-medium text-lg text-gray-600 dark:text-white">
                  Product Design
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
}
