import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout';
import CircleArrow from '../icons/CircleArrow';
import CricleArrowwhite from '../icons/CricleArrowwhite';
import DiagArrowwhite from '../icons/DiagArrowwhite';
import DiagArrow from '../icons/DiagArrow';
// import vobb from '../public/img/vobb.png';
// import vobbProcess from '../public/img/image_2.png';
// import maryTaylor from '../public/img/mary_taylor.png';
// import christianMartin from '../public/img/christian_martin.png';
// import vobbSol from '../public/img/vobb_solution.png';
// import vobb_userflow from '../public/img/vobb_userflow.png';
// import vobb_userflow2 from '../public/img/vobb_userflow2.png';
import frame1 from '../public/img/Frame 1_.svg';
import frame2 from '../public/img/Frame 2_.svg';
import frame3 from '../public/img/Frame 3_.svg';
import frame4 from '../public/img/Frame 4_.svg';
import frame5 from '../public/img/Frame 5_.svg';
import frame6 from '../public/img/Frame 6_.svg';
import frame7 from '../public/img/Frame 7_.svg';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const ArrowSvg = () => {
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
        stroke="#344054"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83325 6.3335H14.1666V14.6668"
        stroke="#344054"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Work = ({ page }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <motion.div
        className="mt-28 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.5, scale: 0 },
        }}
      >
        <h1 className="neue-machina-ultrabold text-7xl mb-10 ">
          {page.project}
        </h1>
        <div className=" h-1 w-full bg-black dark:bg-white mb-4 "></div>

        <div className="flex justify-between">
          <div className="flex">
            <div className="mr-14">
              <h4 className="airbnb-cereal-bold font-bold grey-work mb-1">
                Services
              </h4>
              <p className="airbnb-cereal-light text-sm color-work ">
                {page.service}
              </p>
            </div>
            <div className="mr-14">
              <h4 className="airbnb-cereal-bold font-bold grey-work mb-1">
                My Role
              </h4>
              <p className="airbnb-cereal-light text-sm color-work">
                {page.role}
              </p>
            </div>
            <div className="mr-14">
              <h4 className="airbnb-cereal-bold font-bold grey-work mb-1">
                Project Duration
              </h4>
              <p className="airbnb-cereal-light text-sm color-work">
                {page.duration}
              </p>
            </div>
          </div>

          <div className="flex">
            <a className="airbnb-cereal-bold font-bold mr-2 cursor-pointer grey-work">
              Visit website
            </a>{' '}
            <ArrowSvg />
            {/* {theme === 'light' ? <DiagArrow /> : <DiagArrowwhite />} */}
          </div>
        </div>
      </motion.div>

      <div className=" mb-24 ">
        <img src="https://res.cloudinary.com/davak/image/upload/v1647261272/philip/Group_288_nxfl88.svg" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.5, scale: 0 },
        }}
      >
        <div className=" mt-20 mb-10 ">
          <h6 className="neue-machina-ultrabold font-size5 ls1 leading-9 devby dark:text-white mb-2">
            Background
          </h6>
          {/* line */}
          <div className=" h-5p w-12 bgblack dark:bg-white "></div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.5, scale: 0 },
        }}
      >
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          {page.background}
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          {page.background1}
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          {page.background2}
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          {page.background3}
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          {page.background4}
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          {page.background5}
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          {page.background6}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: '0' }}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.5, scale: 0 },
        }}
      >
        <div className=" mt-20 mb-10 ">
          <h6 className="neue-machina-ultrabold font-size5 ls1 leading-9 devby dark:text-white mb-2">
            Goal
          </h6>
          {/* line */}
          <div className=" h-1 w-12 bgblack dark:bg-white "></div>
        </div>
        <div>
          <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7">
            {/* Goal is to build a marketplace to accommodate three main players; */}
            {page.goal.head}
          </p>
          <ul className="airbnb-cereal-light text-base leading-7 list-decimal pl-5 pt-2 work-p dark:text-white ">
            {!page.goal.goal1 ? (
              ''
            ) : (
              <>
                {' '}
                <li className=""> {page.goal.goal1}</li>
                <li className=""> {page.goal.goal2}</li>
                <li className=""> {page.goal.goal3}</li>
              </>
            )}
          </ul>

          <h6 className="airbnb-cereal-mdeium font-size6 devby dark:text-white mt-10  ">
            Breakdown
          </h6>
          <ul className="airbnb-cereal-light  text-base leading-7 pl-8 work-p dark:text-white">
            <li className="li">{page.breakdown.breakdown1}</li>
            <li className="li">{page.breakdown.breakdown2}</li>
            <li className="li">{page.breakdown.breakdown3}</li>
            {page.breakdown.breakdown4 ? (
              <>
                <li className="li">{page.breakdown.breakdown4}</li>
                <li className="li">{page.breakdown.breakdown5}</li>
              </>
            ) : (
              ''
            )}
          </ul>
        </div>
      </motion.div>

      <div>
        <div className=" mt-20 mb-10 ">
          <h6 className="neue-machina-ultrabold text-2xl leading-9 ls1 devby dark:text-white mb-2">
            Design process
          </h6>
          {/* line */}
          <div className=" h-5p w-14 bgblack dark:bg-white "></div>
        </div>

        <div className="border border-gray-500 w-full h-425 flex justify-center items-center ">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.5, scale: 0 },
            }}
            src={page.image2_designprocess}
            className=" sm:h-72 h-36 "
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: '0' }}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.5, scale: 0 },
        }}
      >
        <div className=" mt-20 mb-10 ">
          <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
            {page.understand.head}
          </h6>
          {/* line */}
          <div className=" h-5p w-12 bgblack dark:bg-white "></div>
        </div>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7 mb-1">
          {page.understand.p1}
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7 mb-1">
          {page.understand.p2}
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7 mb-1">
          {page.understand.p3}
        </p>
        {!page.understand.list.item1 ? (
          ''
        ) : (
          <ul className="airbnb-cereal-light text-base leading-7  pl-6 work-p dark:text-white ">
            <li className="-mt-1 li">{page.understand.list.item1}</li>
            <li className="-mt-1 li">{page.understand.list.item2} </li>
            <li className="-mt-1 li"> {page.understand.list.item3}</li>
            <li className="-mt-1 li">{page.understand.list.item4}</li>
          </ul>
        )}
      </motion.div>

      <div>
        <div className=" mt-20 mb-10 ">
          <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
            User personas
          </h6>
          {/* line */}
          <div className=" h-5p w-14 bgblack dark:bg-white "></div>
        </div>

        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8 mb-8">
          {page.user_p.persona}
        </p>
        {/* case 1 */}
        <motion.div
          className="border border-gray-500 w-full h-auto  mb-8 flex sm:flex-row flex-col p-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
        >
          <div>
            <img
              src={page.user1.img}
              style={{ width: '320px', height: '100%' }}
            />
          </div>
          <div className=" max-w-2xl px-7 sm:mt-0 mt-4">
            <h2 className="airbnb-cereal-medium font-size4 ls2 mb-3 ">
              {page.user1.name}
            </h2>
            <p className="airbnb-cereal-light text-base devby dark:text-white mb-2">
              {page.user1.status}
            </p>
            <hr />
            <h6 className="airbnb-cereal-bold text-xs leading-8 mt-2">
              Bio ️📜
            </h6>
            <div>
              <p className="airbnb-cereal-light text-sm leading-7 mb-1 work-p dark:text-white">
                {page.user1.p1}
              </p>
              <p className="airbnb-cereal-light text-sm leading-7 mb-1 work-p dark:text-white">
                {page.user1.p2}
              </p>
              <p className="airbnb-cereal-light text-sm leading-7 mb-1 work-p dark:text-white">
                {page.user1.p3}
              </p>
              <p className="airbnb-cereal-light text-sm leading-7 work-p dark:text-white">
                {page.user1.p4}
              </p>
            </div>
            <div className="flex sm:flex-row flex-col mt-4">
              <div className=" mr-10 ">
                <h6 className="airbnb-cereal-bold text-xs">Goals 😃</h6>
                <ul className="airbnb-cereal-light text-sm leading-7  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">{page.user1.goals.goal1}</li>
                  <li className="li">{page.user1.goals.goal2}</li>
                  <li className="li">{page.user1.goals.goal3}</li>
                  {page.user1.goals.goal4 ? (
                    <>
                      <li className="li">{page.user1.goals.goal4}</li>
                      <li className="li">{page.user1.goals.goal5}</li>
                      <li className="li">{page.user1.goals.goal6}</li>
                    </>
                  ) : (
                    ''
                  )}
                </ul>
              </div>
              <div className="sm:mt-0 mt-4">
                <h6 className="airbnb-cereal-bold text-xs">Frustrations ☹️</h6>
                <ul className="airbnb-cereal-light text-sm leading-7  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">{page.user1.frustration.frustration1}</li>
                  <li className="li">{page.user1.frustration.frustration2}</li>
                  <li className="li">{page.user1.frustration.frustration3}</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        {/* end case 1 */}
        {/* case 2 */}
        <motion.div
          className="border border-gray-500 w-full h-auto  mb-8 flex sm:flex-row flex-col p-5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
        >
          <div>
            <img
              src={page.user2.img}
              style={{ width: '360px', height: '630px' }}
            />
          </div>
          <div className=" max-w-2xl px-7 sm:mt-0 mt-4">
            <h2 className="airbnb-cereal-medium font-size4 ls2 mb-3 ">
              {page.user2.name}
            </h2>
            <p className="airbnb-cereal-light text-base devby dark:text-white mb-2">
              {page.user2.status}
            </p>
            <hr />
            <h6 className="airbnb-cereal-bold text-xs leading-8 mt-2">
              Bio ️📜
            </h6>
            <div>
              <p className="airbnb-cereal-light text-sm leading-7 work-p dark:text-white">
                {page.user2.p1}
              </p>
              <p className="airbnb-cereal-light text-sm leading-7 work-p dark:text-white">
                {page.user2.p2}
              </p>
              <p className="airbnb-cereal-light text-sm leading-7 work-p dark:text-white">
                {page.user2.p3}
              </p>
              <p className="airbnb-cereal-light text-sm leading-7 work-p dark:text-white">
                {page.user2.p4}
              </p>
            </div>
            <div className="flex sm:flex-row flex-col mt-4">
              <div className=" mr-10 ">
                <h6 className="airbnb-cereal-bold text-xs">Goals 😃</h6>
                <ul className="airbnb-cereal-light text-sm leading-7  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">{page.user2.goals.goal1}</li>
                  <li className="li">{page.user2.goals.goal2}</li>
                  <li className="li">{page.user2.goals.goal3}</li>
                  {page.user2.goals.goal4 ? (
                    <>
                      <li className="li">{page.user2.goals.goal4}</li>
                      <li className="li">{page.user2.goals.goal5}</li>
                    </>
                  ) : (
                    ''
                  )}
                </ul>
              </div>
              <div className="sm:mt-0 mt-4">
                <h6 className="airbnb-cereal-bold text-xs">Frustrations ☹️</h6>
                <ul className="airbnb-cereal-light text-sm leading-7  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">{page.user2.frustration.frustration1}</li>
                  <li className="li">{page.user2.frustration.frustration2}</li>
                  <li className="li">{page.user2.frustration.frustration3}</li>
                  {page.user2.frustration.frustration4 ? (
                    <>
                      <li className="li">
                        {page.user2.frustration.frustration4}
                      </li>
                    </>
                  ) : (
                    ''
                  )}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        {/* end case 2 */}
      </div>

      <motion.div
        initial={{ opacity: '0' }}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.5, scale: 0 },
        }}
      >
        <div className=" mt-20 mb-10 ">
          <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
            Solution
          </h6>
          {/* line */}
          <div className=" h-5p w-12 bgblack dark:bg-white "></div>
        </div>
        <p className="airbnb-cereal-light text-base leading-7 work-p dark:text-white ">
          {page.solution.p1}
        </p>

        {page.solution.h5 ? (
          <p className="airbnb-cereal-bold text-sm leading-8 devby dark:text-white mt-12">
            {page.solution.h5}
          </p>
        ) : (
          <div className="mb-8"></div>
        )}
        {/* <p className="airbnb-cereal-bold text-sm leading-8 devby dark:text-white mt-12">
          {page.solution.h5}
        </p> */}
        <div>
          <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white mt-4">
            {page.solution.h5_p1}
          </p>
          <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white">
            {page.solution.h5_p2}
          </p>
          <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white">
            {page.solution.h5_p3}
          </p>
          <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white">
            {page.solution.h5_p4}
          </p>
        </div>

        {!page.solution.image ? (
          ''
        ) : (
          <div className=" border border-gray-500 w-full h-auto flex flex-col justify-center mt-12  ">
            <div className="flex justify-center sm:py-14 py-7 ">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0.5, scale: 0 },
                }}
                className="vb-sol"
                src={page.solution.image}
              />
            </div>
            <div className="flex pb-4 sm:px-12 px-4 justify-start">
              <h6 className="airbnb-cereal-bold text-left text-sm leading-8 devby dark:text-white ">
                {page.solution.image_text}
              </h6>
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: '0' }}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.5, scale: 0 },
        }}
      >
        <h6 className="airbnb-cereal-bold text-sm leading-8 devby dark:text-white mt-12">
          {page.solution.university.head}
        </h6>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white mt-4">
          {page.solution.university.p1}
        </p>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white ">
          {' '}
          {page.solution.university.p2}
        </p>
        <ul className="airbnb-cereal-light text-base leading-8 work-p dark:text-white  pl-8">
          {page.solution.university.p3}
          <li></li>
          <li>{page.solution.university.p4}</li>
          <li> {page.solution.university.p5}</li>
        </ul>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white ">
          {page.solution.university.p6}
        </p>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white ">
          {page.solution.university.p7}
        </p>
      </motion.div>
      {/*  */}
      <motion.div
        initial={{ opacity: '0' }}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.5, scale: 0 },
        }}
      >
        <h6 className="airbnb-cereal-bold text-sm leading-8 devby dark:text-white mt-12">
          {page.solution.agent.head}
        </h6>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white mt-4">
          {page.solution.agent.p1}
        </p>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white ">
          {' '}
          {page.solution.agent.p2}
        </p>
        <ul className="airbnb-cereal-light text-base leading-8 work-p dark:text-white  pl-8">
          {page.solution.agent.p3}
          <li></li>
          <li>{page.solution.agent.p4}</li>
          <li> {page.solution.agent.p5}</li>
        </ul>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white ">
          {page.solution.agent.p6}
        </p>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white ">
          {page.solution.agent.p7}
        </p>
      </motion.div>

      {!page.infoArch.h1 ? (
        ''
      ) : (
        <div>
          <div className=" mt-20 mb-10 ">
            <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
              {page.infoArch.h1}
            </h6>
            {/* line */}
            <div className=" h-1 w-16 bgblack dark:bg-white "></div>
          </div>
          <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white mt-4">
            {page.infoArch.p1}
          </p>
          <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white">
            {page.infoArch.p2}
          </p>
          <div className="mt-8">
            <img src={page.infoArch.img1} alt="arch1" />
          </div>
          <div className="mt-8">
            <img src={page.infoArch.img2} alt="arch2" />
          </div>
        </div>
      )}

      {page.flowChart.h1 ? (
        <div>
          <div className=" mt-20 mb-10 ">
            <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
              {page.flowChart.h1}
            </h6>
            {/* line */}
            <div className=" h-1 w-16 bgblack dark:bg-white "></div>
          </div>

          <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white mb-14">
            {page.flowChart.p1}
          </p>

          <div className="flex flex-col justify-center px-10">
            <div>
              <img src={page.flowChart.img1} />
            </div>
            <div className="hr"></div>
            <div className="mt-6">
              <img src={page.flowChart.img2} />
            </div>
            <div className="hr"></div>

            <div className="mt-6">
              <img src={page.flowChart.img3} />
            </div>
            <div className="hr"></div>

            <div className="mt-6">
              <img src={page.flowChart.img4} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className=" mt-20 mb-10 ">
            <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
              {page.user_flow.h2}
            </h6>
            {/* line */}
            <div className=" h-1 w-16 bgblack dark:bg-white "></div>
          </div>

          <div className="flex flex-col justify-center px-10">
            <div>
              <img src={page.user_flow.img1} />
            </div>
            <div className="mt-6">
              <img src={page.user_flow.img2} />
            </div>
          </div>
        </div>
      )}

      <div>
        <div className=" mt-20 mb-10 ">
          <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
            High-fidelity prototypes
          </h6>
          {/* line */}
          <div className=" h-1 w-16 bgblack dark:bg-white "></div>
        </div>

        <div>
          <p className="airbnb-cereal-light text-base devby dark:text-white leading-8">
            Due to the short time frame of delivering the product, we went from
            Mid-fi{'’'}s to high-fi{'’'}s
          </p>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Style guide
            </h6>
          </div>
          <div>
            <Image src={frame1} />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Landing page
            </h6>
          </div>
          <div>
            <Image src={frame2} />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Authentication
            </h6>
          </div>
          <div>
            <Image src={frame3} />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Components
            </h6>
          </div>
          <div>
            <Image src={frame4} />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Student Dashboard
            </h6>
          </div>
          <div>
            <Image src={frame5} />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Agent dashboard
            </h6>
          </div>
          <div>
            <Image src={frame6} />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Mobile responsiveness
            </h6>
          </div>
          <div>
            <Image src={frame7} />
          </div>
        </div>
      </div>

      <div>
        <div className=" mt-20 mb-10 ">
          <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
            Conclusion
          </h6>
          {/* line */}
          <div className=" h-1 w-16 bgblack dark:bg-white "></div>
        </div>

        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8">
          {page.conclusion.p1}
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8">
          {page.conclusion.p2}
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8">
          {page.conclusion.p3}
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8">
          {page.conclusion.p4 ? page.conclusion.p4 : ''}
        </p>
      </div>

      <div className="mt-32">
        <Link href={''}>
          <a
            className={` ${
              theme === 'light' ? 'view-project' : 'view-project-white'
            }  neue-machina-ultrabold bg-black dark:bg-white text-white py-5 px-10 cursor-pointer`}
          >
            <p className="flex text-white text-lg dark:text-black">
              View next project{' '}
              <i className="ml-3">
                {theme === 'light' ? <CircleArrow /> : <CricleArrowwhite />}
              </i>
            </p>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const pages = (await import(`../data/work.json`)).default;

  const id = pages.map((page) => page.slug);

  const paths = id.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const pages = (await import(`../data/work.json`)).default;

  const page = pages.find((x) => x.slug === slug);

  return {
    props: {
      page,
    },
  };
}

export default Work;
