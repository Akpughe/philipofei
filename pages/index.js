import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import BounceArrow from '../icons/BounceArrow';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { GlassMagnifier } from 'react-image-magnifiers';
import Magnifier from 'react-magnifier';

export default function Home({ works }) {
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
            <Slide>
              <div>
                <Magnifier
                  src="https://res.cloudinary.com/davak/image/upload/v1647261272/philip/Group_288_nxfl88.svg"
                  mgShape="circle"
                  zoomFactor={1.5}
                  mgBorderWidth={2}
                  mgShowOverflow={true}
                  mgMouseOffsetX={0}
                  mgMouseOffsetY={0}
                  mgTouchOffsetX={-50}
                  mgTouchOffsetY={-50}
                />
                <div className="py-8">
                  <Link href="/work/vobb_io">
                    <a className="neue-machina-ultrabold font-black font-size4 cursor-pointer">
                      VOBB
                    </a>
                  </Link>
                  <p className="airbnb-cereal-medium kow dark:text-white">
                    UX {'&'} UI Design
                  </p>
                </div>
              </div>
            </Slide>
            <Slide left>
              <div>
                <Magnifier
                  src="https://res.cloudinary.com/davak/image/upload/v1647386012/philip/Group_289_pcqdzv.svg"
                  mgShape="circle"
                  zoomFactor={1.5}
                  mgBorderWidth={2}
                  mgShowOverflow={true}
                  mgMouseOffsetX={0}
                  mgMouseOffsetY={0}
                  mgTouchOffsetX={-50}
                  mgTouchOffsetY={-50}
                />
                <div className="py-8">
                  <Link href="/work/i-invest">
                    <a className="neue-machina-ultrabold font-black font-size4 dark:text-white pb-0 cursor-pointer">
                      i-invest
                    </a>
                  </Link>
                  <p className="airbnb-cereal-medium kow dark:text-white">
                    Product Design
                  </p>
                </div>
              </div>
            </Slide>
            <Slide right>
              <div className=" pt-14 ">
                <Magnifier
                  src="https://res.cloudinary.com/davak/image/upload/v1647386739/philip/Frame_1717_fuobty.svg"
                  mgShape="circle"
                  zoomFactor={1.5}
                  mgBorderWidth={2}
                  mgShowOverflow={true}
                  mgMouseOffsetX={0}
                  mgMouseOffsetY={0}
                  mgTouchOffsetX={-50}
                  mgTouchOffsetY={-50}
                />
                <div className="py-8">
                  <Link href="/work/afrealone">
                    <div className="flex items-center">
                      <a className="neue-machina-ultrabold font-black font-size4 dark:text-white mr-5 cursor-pointer">
                        Afreal one
                      </a>{' '}
                      <div className="coming-soon airbnb-cereal-medium">
                        <span>Coming soon</span>
                      </div>
                    </div>
                  </Link>
                  <p className="airbnb-cereal-medium kow dark:text-white">
                    UX {'&'} UI Design
                  </p>
                </div>
              </div>
            </Slide>
            {/* images end */}

            {/* <div>
              {works.map((work) => {
                return (
                  <>
                    <Fade key={work.id}>
                      <div>
                        <Magnifier
                          src={work.image1}
                          mgShape="circle"
                          zoomFactor={1.5}
                          mgBorderWidth={2}
                          mgShowOverflow={true}
                          mgMouseOffsetX={0}
                          mgMouseOffsetY={0}
                          mgTouchOffsetX={-50}
                          mgTouchOffsetY={-50}
                        />
                        <div className="py-8">
                          <Link href={`/${work.slug}`}>
                            <a className="neue-machina-ultrabold font-black font-size4 cursor-pointer">
                              {work.project}
                            </a>
                          </Link>
                          <p className="airbnb-cereal-medium kow dark:text-white">
                            {work.service}
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </>
                );
              })}
            </div> */}
          </div>
        </motion.div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const works = (await import(`../data/work.json`)).default;

  return {
    props: {
      works,
    },
  };
}
