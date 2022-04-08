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
        stroke={theme === 'light' ? '#344054' : '#fff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83325 6.3335H14.1666V14.6668"
        stroke={theme === 'light' ? '#344054' : '#fff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Vobb = () => {
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
        <h1 className="neue-machina-ultrabold text-7xl mb-10 ">vobb.io</h1>
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
              <p className="airbnb-cereal-light text-sm dark:text-white color-work">
                1 month
              </p>
            </div>
          </div>

          <div className="flex">
            <a
              href="https://vobb.io/"
              target="_blank"
              rel="noreferrer"
              className="airbnb-cereal-bold font-bold dark:text-white mr-2 cursor-pointer grey-work"
            >
              Visit website
            </a>{' '}
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
          src="https://res.cloudinary.com/davak/image/upload/v1647261272/philip/Group_288_nxfl88.svg"
        />
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
          <h6 className="neue-machina-ultrabold font-size5 ls1 leading-9 devby dark:text-white mb-2">
            Background
          </h6>
          {/* line */}
          <div className=" h-5p w-12 bgblack dark:bg-white "></div>
        </div>
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
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          The study abroad market is a growing market in Africa, most of west
          Asia and central europe. Universities are now (and have been)
          partnering with Agents to recruit students to their institutions.
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          Most universities have agent portals where agents can apply for their
          prospects and wait for the admissions to be approved by an official of
          the respective university.
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          Basically students reach out to agents for study abroad services, the
          agents get their documents and apply through the respective agent
          portals.
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          This is what everyone sees, and it is true. But there is a seemingly
          invisible yet very strong player in the market; The Sub-Agents
          Sub-agents are study-abroad business owners in their respective
          countries that don{'’'}t have agent codes or are not directly
          affiliated with international universities, so they tend to partner up
          with agents other agents who are directly affiliated with these
          universities and send their student applications to the Agents.
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          {' '}
          Universities don{'’'}t grant out agent codes because they have to be
          sure of who they are partnering with, and it is not advisable for
          sub-agents that are not in the university{'’'}s country to get agent
          codes because then they cannot monitor the admission and help out the
          student after arrival.
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          The Universities also do not account for the sub-agents or
          subcontractors that their direct Agents are working with, so this
          leaves the direct agent with a little more work to do, like submitting
          applications and updating the sub-agents on status of applications,
          also keeping adequate records to make sure they pay sub-agents when
          commissions come in etc.
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mb-1 work-p dark:text-white ">
          <b className="airbnb-cereal-medium">vobb.io</b> is a collaborative
          Agents portal that allows direct agents to form partnerships with
          sub-agents, which in turn gives the sub-agents the same rights as
          direct agents.
        </p>
      </motion.div>

      <div>
        <motion.div
          className=" mt-10 mb-8 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
        >
          <h6 className="neue-machina-ultrabold font-size5 ls1 leading-9 devby dark:text-white">
            Goal
          </h6>
          {/* line */}
          <div className=" h-1 w-12 bgblack dark:bg-white "></div>
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
          <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8">
            Goal is to build a marketplace to accommodate three main players;
          </p>
          <ul className="airbnb-cereal-light text-base leading-8 list-decimal pl-5 pt-2 work-p dark:text-white -mt-1 ">
            <li className="-mt-1">Student</li>
            <li className="-mt-1">Agents</li>
            <li className="-mt-1">Universities</li>
          </ul>

          <h6 className="airbnb-cereal-mdeium font-size6 devby dark:text-white mt-10  ">
            Breakdown
          </h6>
          <ul className="airbnb-cereal-light  text-base leading-7 pl-8 work-p dark:text-white">
            <li className="li">
              For Students; they will be able to find credible study abroad
              agents to work with for easy processing of their academic travels.
            </li>
            <li className="li">
              For agents; it goes a little deeper than that, Agents can get
              students through Vobb and also showcase their portfolio.
            </li>
            <li className="li">
              Think about it as Behance is to designers and Github is to
              developers, Vobb will be to small scale “Travel agencies”
            </li>
          </ul>
        </motion.div>
      </div>

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
            src="https://res.cloudinary.com/davak/image/upload/v1649105315/philip/image_2_lalq7b.svg"
            className=" sm:h-72 h-36 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.5, scale: 0 },
            }}
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
            Understanding the problem
          </h6>
          {/* line */}
          <div className=" h-5p w-12 bgblack dark:bg-white "></div>
        </div>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7">
          Like in the background study, the study abroad agent marketplace is
          getting very saturated, and alot is going on in that space. There’s a
          saying where i come from ‘Too many hands, spoil the soup’ (especially
          one that cannot be properly regulated) this is a clear case of what is
          happening here, too many human factors has led to many cases of fraud,
          delay, and misery for both the students, credible agents and even
          Universities in some occasion.{' '}
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7 mt-1">
          Speaking to students and agents that are directly involved with
          universities, the problem cuts across the students not being able to
          get direct access to the main agents, because the market is saturated;
          there are so many con artist.
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7 mt-1">
          This always leads to;
        </p>
        <ul className="airbnb-cereal-light text-base leading-7  pl-6 work-p dark:text-white mt-1 ">
          <li className="-mt-1 li">Fraud</li>
          <li className="-mt-1 li">Loss of money for students</li>
          <li className="-mt-1 li">Loss of prospects for university</li>
          <li className="-mt-1 li">Trust issues</li>
        </ul>
      </motion.div>

      <div>
        <motion.div
          className=" mt-20 mb-10 "
          initial={{ opacity: '0' }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
        >
          <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
            User personas
          </h6>
          {/* line */}
          <div className=" h-5p w-14 bgblack dark:bg-white "></div>
        </motion.div>

        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8 mb-8">
          Speaking to different user groups, i was able to coin out these user
          personas;
        </p>
        {/* case 1 */}
        <motion.div
          className="border border-gray-500 w-full h-auto  mb-8 flex sm:flex-row flex-col p-5 "
          initial={{ opacity: '0' }}
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
              src="https://res.cloudinary.com/davak/image/upload/v1647608714/philip/mary_taylor_qhklif.png"
              style={{ width: '320px', height: '630px' }}
            />
          </div>
          <div className=" max-w-2xl px-7 sm:mt-0 mt-4">
            <h2 className="airbnb-cereal-medium font-size4 ls2 mb-3 ">
              Mary Taylor, 17yrs
            </h2>
            <p className="airbnb-cereal-light text-base devby dark:text-white mb-2">
              Undergradute
            </p>
            <hr />
            <h6 className="airbnb-cereal-bold text-xs leading-8 mt-2">
              Bio ️📜
            </h6>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7  work-p dark:text-white">
              Mary is a teenager from Nigeria, who just finished high school,
              and due to the educational standard in Nigeria, wishes to continue
              her graduate studies in Canada.
            </p>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7  work-p dark:text-white">
              {' '}
              Over the past six months she has employed the services of
              different study abroad agents to help her secure this transition
              of gaining admission into her dream university as well as a
              seamless relocation processess
            </p>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7  work-p dark:text-white">
              This has cost her nothing but misery, she has been swindled of her
              money, now she has to wait for another admission window before she
              can start the process again resulting to waste of time.
            </p>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7  work-p dark:text-white">
              {' '}
              Mary will like to have a platform where she can get direct access
              to a pool of credible agents that has been vetted and has direct
              access to her dream university.
            </p>
            <div className="flex sm:flex-row flex-col mt-8">
              <div className=" mr-10 ">
                <h6 className="airbnb-cereal-bold text-xs">Goals 😃</h6>
                <ul className="airbnb-cereal-light text-sm leading-7 mt-2  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">
                    Wants to be able to get access to more credible agents and
                    make her choice
                  </li>
                  <li className="li">Wants to be able to trust these agents</li>
                  <li className="li">
                    Wants to be able to access these agents on her phone or
                    computer
                  </li>
                </ul>
              </div>
              <div className="sm:mt-0 mt-4">
                <h6 className="airbnb-cereal-bold text-xs">Frustrations ☹️</h6>
                <ul className="airbnb-cereal-light text-sm leading-7 mt-2  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">
                    Wants to be able to get access to more credible agents and
                    make her choice
                  </li>
                  <li className="li">Wants to be able to trust these agents</li>
                  <li className="li">
                    Wants to be able to access these agents on her phone or
                    computer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        {/* end case 1 */}
        {/* case 2 */}
        <motion.div
          className="border border-gray-500 w-full h-auto  mb-8 flex sm:flex-row flex-col p-5 "
          initial={{ opacity: '0' }}
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
              src="https://res.cloudinary.com/davak/image/upload/v1647608718/philip/christian_martin_bofsan.png"
              style={{ width: '360px', height: '630px' }}
            />
          </div>
          <div className=" max-w-2xl px-7 sm:mt-0 mt-4">
            <h2 className="airbnb-cereal-medium font-size4 ls2 mb-3 ">
              Christain Martin, 27yrs
            </h2>
            <p className="airbnb-cereal-light text-base devby dark:text-white mb-2">
              Study Abroad Agent
            </p>
            <hr />
            <h6 className="airbnb-cereal-bold text-xs leading-8 mt-2">
              Bio ️📜
            </h6>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7 work-p dark:text-white">
              Christain is a lone agent based in Lagos, Nigeria. He runs a
              private business in the busy city of lagos, where due to the
              current goverment unfavourable conditions, undergraduate, graduate
              and Phd. students are looking to find favourable universities
              abroad, this has increased the demand for a direct link to these
              universities.
            </p>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7 work-p dark:text-white">
              But overtime he has had issues connecting directly to these
              universities, because most universities will not give just anyone
              their codes to bring in students, so he usually follows the
              rigorous process of helping each student to apply directly to
              these schools in the traditional way.
            </p>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7 work-p dark:text-white">
              Christain will like to have a trusted platform where he can
              showcase his portfolio, and be connected to more clients, as well
              as get direct partnership with direct agents with the university
              codes
            </p>

            <div className="flex sm:flex-row flex-col mt-6">
              <div className=" mr-10 ">
                <h6 className="airbnb-cereal-bold text-xs">Goals 😃</h6>
                <ul className="airbnb-cereal-light text-sm leading-7 pl-6 max-w-sm work-p dark:text-white">
                  <li className="li">
                    Wants to be able to get access to more credible agents and
                    make her choice
                  </li>
                  <li className="li">Wants to be able to trust these agents</li>
                  <li className="li">
                    Wants to be able to access these agents on her phone or
                    computer
                  </li>
                </ul>
              </div>
              <div className="sm:mt-0 mt-4">
                <h6 className="airbnb-cereal-bold text-xs">Frustrations ☹️</h6>
                <ul className="airbnb-cereal-light text-sm leading-7  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">
                    Wants to be able to get access to more credible agents and
                    make her choice
                  </li>
                  <li className="li">Wants to be able to trust these agents</li>
                  <li className="li">
                    Wants to be able to access these agents on her phone or
                    computer
                  </li>
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
          After the understanding the problem and validation using these
          research methods, I start creating solutions to address these
          problems, prioritizing the earlier defined problems using the
          processes listed below.
        </p>

        <p className="airbnb-cereal-bold text-sm leading-8 devby dark:text-white mt-12">
          How Vobbs plan to solve the problem
        </p>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white mt-4">
          Vobb is a collaborative Agents portal. <br /> Vobb allows direct
          agents to form partnerships with sub-agents, which in turn gives the
          sub-agents the same rights as direct agents. <br /> This way,
          Subagents can submit applications themselves directly to the
          universities, the direct agents can spend less time filling
          applications. <br /> And if the direct agent{"'"}s recruitment process
          depends entirely on sub-agents, then the direct agent does not have to
          do anything anymore.
        </p>

        <div className=" border border-gray-500 w-full h-auto flex flex-col justify-center mt-12  ">
          <div className="flex justify-center sm:py-14 py-7 ">
            <img
              className="vb-sol"
              src="https://res.cloudinary.com/davak/image/upload/v1647608866/philip/vobb_solution_xlqk6s.png"
            />
          </div>
          <div className="flex pb-4 sm:px-12 px-4 justify-start">
            <h6 className="airbnb-cereal-bold text-left text-sm leading-8 devby dark:text-white ">
              The pipeline
            </h6>
          </div>
        </div>
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
          The University
        </h6>
        <p className="airbnb-cereal-light text-base leading-6 work-p dark:text-white mt-1">
          For agents to send applications through Vobb, there needs to be an
          integration between Vobb and the school{"'"}s existing systems. Vobb
          basically becomes a substitute to all universities existing Agent
          portal{' '}
        </p>
        <p className="airbnb-cereal-light text-base leading-6 work-p dark:text-white mt-1">
          {' '}
          A university admin will manage the University or institutions account
          on Vobb. The university admin will have the following rights;
        </p>

        <ul className="airbnb-cereal-light text-base leading-6 work-p dark:text-white mt-1 pl-8">
          <li className="li">Setting up profile</li>
          <li className="li">
            Accepting / declining activation requests from Agents (Activation
            requests will be explained under {'‘'}Agents{'’'})
          </li>
          <li className="li">
            Viewing incoming applications and general statistics
          </li>
        </ul>
        <p className="airbnb-cereal-light text-base leading-6 work-p dark:text-white mt-1">
          {' '}
          When an agent submits an application on vobb, Vobb submits that
          application on the universities enrollment or admission system
          indicating the direct agent the application is from. Just like the
          university{"'"}s existing agent portals.{' '}
        </p>

        <p className="airbnb-cereal-light text-base leading-6 work-p dark:text-white mt-1">
          University admins can also view applications on Vobb.
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
          The Agents
        </h6>
        <p className="airbnb-cereal-light text-base leading-6 work-p dark:text-white mt-4">
          For agents to send applications through Vobb, there needs to be an
          integration between Vobb and the school{"'"}s existing systems. Vobb
          basically becomes a substitute to all universities existing Agent
          portal{' '}
        </p>
        <p className="airbnb-cereal-light text-base leading-6 work-p dark:text-white mt-1">
          A university admin will manage the University or institutions account
          on Vobb. The university admin will have the following rights;
        </p>
        <ul className="airbnb-cereal-light text-base leading-6 work-p dark:text-white  pl-8">
          <li className="li">Setting up profile</li>
          <li className="li">
            Accepting / declining activation requests from Agents (Activation
            requests will be explained under {'‘'}Agents{'’'})
          </li>
          <li className="li">
            Viewing incoming applications and general statistics
          </li>
        </ul>
        <p className="airbnb-cereal-light text-base leading-6 work-p dark:text-white mt-1">
          When an agent submits an application on vobb, Vobb submits that
          application on the universities enrollment or admission system
          indicating the direct agent the application is from. Just like the
          university{"'"}s existing agent portals.
        </p>
        <p className="airbnb-cereal-light text-base leading-6 work-p dark:text-white mt-1">
          University admins can also view applications on Vobb.
        </p>
      </motion.div>

      <div>
        <motion.div
          className=" mt-20 mb-10 "
          initial={{ opacity: '0' }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
        >
          <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
            User flow
          </h6>
          {/* line */}
          <div className=" h-1 w-16 bgblack dark:bg-white "></div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center px-10"
          initial={{ opacity: '0' }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
        >
          <div>
            <img src="https://res.cloudinary.com/davak/image/upload/v1647534528/philip/image_121_z88ycv.svg" />
          </div>
          <div className="mt-6">
            <img src="https://res.cloudinary.com/davak/image/upload/v1647534624/philip/image_120_yhocy1.svg" />
          </div>
        </motion.div>
      </div>

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
            <img src="https://res.cloudinary.com/davak/image/upload/v1649399806/philip/Frame_1__mtdxct.svg" />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Landing page
            </h6>
          </div>
          <div>
            <img src="https://res.cloudinary.com/davak/image/upload/v1649399045/philip/Frame_2__ts2so3.svg"/>
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Authentication
            </h6>
          </div>
          <div>
            <img src="https://res.cloudinary.com/davak/image/upload/v1649399458/philip/Frame_3__vqvbyv.svg" />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Components
            </h6>
          </div>
          <div>
            <img src="https://res.cloudinary.com/davak/image/upload/v1649399209/philip/Frame_4__m18j69.svg" />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Student Dashboard
            </h6>
          </div>
          <div>
            <img src="https://res.cloudinary.com/davak/image/upload/v1649399433/philip/Frame_5__u7qlof.svg" />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Agent dashboard
            </h6>
          </div>
          <div>
            <img src="https://res.cloudinary.com/davak/image/upload/v1649399306/philip/Frame_6__ngmimh.svg" />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Mobile responsiveness
            </h6>
          </div>
          <div>
            <img src="https://res.cloudinary.com/davak/image/upload/v1649399791/philip/Frame_7__v3w4ya.svg" />
          </div>
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
            Conclusion
          </h6>
          {/* line */}
          <div className=" h-1 w-16 bgblack dark:bg-white "></div>
        </div>

        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7">
          I love being a designer because it allows me to explore different
          perspective of people{'’'}s lives, understanding their challenges,
          frustrations and in the long run be able to provide solutions and make
          their lives alot easier. Working on this product was challenging
          because i had to understand not just one market, speaking to people
          from different continent and also putting into perspective their
          problems. i spoke to the stakeholders extensively during the course of
          building and we were always in sync, making sure we were not derailing
          from our MVP because theres actually alot of scenario at play here.{' '}
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7 mt-1">
          This was the first draft of VOBB.IO, even tho due to so many
          iterations, research and brainstorming, vobbs has evolved to a more
          robust platform than what i currently showed here, i was glad i was
          part of the early stages.
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7 mt-1">
          Thanks for reading ❤️... Hope you enjoyed it as much as i did creating
          it
        </p>
      </motion.div>

      <div className="mt-32">
        <Link href="/work/i-invest">
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
                  <CircleArrow color="white" />
                ) : (
                  <CricleArrowwhite color="black" />
                )}
              </i>
            </p>
          </motion.a>
        </Link>
      </div>
    </Layout>
  );
};

export default Vobb;
