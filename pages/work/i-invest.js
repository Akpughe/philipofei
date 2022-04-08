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
import frame1 from '../../public/img/Frame 1_.svg';
import frame2 from '../../public/img/Frame 2_.svg';
import frame3 from '../../public/img/Frame 3_.svg';
import frame4 from '../../public/img/Frame 4_.svg';
import frame5 from '../../public/img/Frame 5_.svg';
import frame6 from '../../public/img/Frame 6_.svg';
import frame7 from '../../public/img/Frame 7_.svg';

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
        <h1 className="neue-machina-ultrabold text-7xl mb-10 ">i-invest</h1>
        <div className=" h-1 w-full bg-black dark:bg-white mb-4 "></div>

        <div className="flex justify-between">
          <div className="flex">
            <div className="mr-14">
              <h4 className="airbnb-cereal-bold dark:text-white font-bold grey-work mb-1">
                Services
              </h4>
              <p className="airbnb-cereal-light dark:text-white text-sm color-work ">
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
                Continous
              </p>
            </div>
          </div>

          <div className="flex">
            <motion.a whileHover={{ scale: 1.1 }} href='https://i-investng.com/'   target="_blank"
              rel="noreferrer" className="airbnb-cereal-bold dark:text-white font-bold mr-2 cursor-pointer grey-work">
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
          src="https://res.cloudinary.com/davak/image/upload/v1647386012/philip/Group_289_pcqdzv.svg"
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
        <p className="airbnb-cereal-light text-base leading-7  work-p dark:text-white ">
          <b className="airbnb-cereal-medium"> i-invest</b> is Nigeria’s
          foremost digital platform for Treasury Bills, and now the preferred
          financial services marketplace in Africa that gives you access to
          investment opportunities from various financial service providers
          within one safe {'&'} secure platform.
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mt-1 work-p dark:text-white ">
          Simply put, <b className="airbnb-cereal-medium"> i-invest</b> enables
          you to grow the money that you have worked hard for, by making the{' '}
          <b className="airbnb-cereal-bold">money work for you</b> .
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mt-1 work-p dark:text-white ">
          Enjoy real-time access to an array of products like Treasury bills,
          Fixed deposit notes, Commercial papers, Eurobonds, Equities,
          insurance, curated savings plans and more, conveniently from your
          phone, anywhere in the world.
        </p>
        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white ">
          No paperwork, no bank queues, no broker required.
        </p>
      </motion.div>

      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
          className=" mt-16 mb-10 "
        >
          <h6 className="neue-machina-ultrabold font-size5 ls1 leading-9 devby dark:text-white mb-2">
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
          <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7">
            The goal for i-invest is to build an investment platform that can
            sort every financial needs for its users, in this case we built both
            native and web applications, this is as a result of the target
            audience, a cross-functional platform will allow unlimited access
            anywhere and everywhere in the world.
          </p>

          <h6 className="airbnb-cereal-mdeium font-size6 devby dark:text-white mt-10  ">
            Breakdown
          </h6>
          <ul className="airbnb-cereal-light  text-base leading-7 pl-8 work-p dark:text-white">
            <li className="li">
              Build a strong portfolio by choosing from a variety of financial
              products like Treasury bills, Fixed deposit notes, Commercial
              papers, Eurobonds, Equities, Insurance, currated savings plans and
              more.
            </li>
            <li className="li">
              Track your investment portfolio performance on the go and access
              everything you need directly from your mobile phone anywhere in
              the world.
            </li>
            <li className="li">
              Top up, withdraw, and transfer funds to family and friends on
              i-invest, from your wallet.
            </li>
            <li className="li">
              Invest safely {'&'} securely with bank-level security, end-to-end
              encryption protocols, two-factor authentication (2FA) protection
              and other cutting-edge security technologies.
            </li>
            <li className="li">
              Stay informed on financial trends with real-time update on market
              trends, and everything happening with the financial industry.
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
            src="https://res.cloudinary.com/davak/image/upload/v1649105482/philip/image_31_srmexo.svg"
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
            Empatihising with users
          </h6>
          {/* line */}
          <div className=" h-5p w-12 bgblack dark:bg-white "></div>
        </div>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7">
          We conducted series of interviews with dieferent group of users,
          trying to understand how they have been investing both offline and
          online, our demographics were people inbetween the age of 31-35 years
          as our primary traget and 26-30 years as our secondary target. For
          easy onboarding they are required to have basic understanding of
          investing and be technology literate.
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-7 mt-1">
          The reason we chose these demoghraphics; especially for the age
          bracket, after speaking to our users and some secondary research and
          competitor analysis, we understand the people willing to make long
          term investments are those who are middle aged, a little bit stable in
          their income, and are looking to build passive income.
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
            User personas
          </h6>
          {/* line */}
          <div className=" h-5p w-14 bgblack dark:bg-white "></div>
        </motion.div>

        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8 mb-8">
          We combined different data from research and conversations we had with
          a group of users
        </p>
        {/* case 1 */}
        <motion.div
          initial={{ opacity: '0' }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
          className="border border-gray-500 w-full h-auto  mb-8 flex sm:flex-row flex-col p-5 "
        >
          <div>
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649106914/philip/Rectangle_1890_wty8nf.png"
              style={{ width: '320px', height: '100%' }}
            />
          </div>
          <div className=" max-w-2xl px-7 sm:mt-0 mt-4">
            <h2 className="airbnb-cereal-medium font-size4 ls2 mb-3 ">
              Lotanna, 32yrs
            </h2>
            <p className="airbnb-cereal-light text-base devby dark:text-white mb-2">
              Software engineer
            </p>
            <hr />
            <h6 className="airbnb-cereal-bold text-xs leading-8 mt-2">
              Bio ️📜
            </h6>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7 work-p dark:text-white">
              Lotanna is a middle-aged and young affluent individual who loves
              to travel for business and pleasure.
            </p>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7 work-p dark:text-white">
              He is seeking access to investment opportunities in order to
              achieve his financial goals and meet immediate family needs.
            </p>
            <p className="airbnb-cereal-light mb-1 text-sm leading-7 work-p dark:text-white">
              He is a techie and investment savvy, so he is looking for a
              one-stop-shop with an array of competitive financial products to
              keep his finances safe
              {'&'} secure while delivering optimal user experience.
            </p>
            <div className="flex sm:flex-row flex-col mt-6">
              <div className=" mr-10 ">
                <h6 className="airbnb-cereal-bold text-xs">Goals 😃</h6>
                <ul className="airbnb-cereal-light text-sm leading-7  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">
                    To conveniently manage his finances with 24/7 access to
                    execute financial transactions even when he is out of the
                    country
                  </li>
                  <li className="li">
                    Achieve his financial goals with minimal effort at a
                    relatively high ROI
                  </li>
                  <li className="li">
                    Access to real-time financial advisory in order to always
                    make informed decisions
                  </li>
                  <li className="li">Complicated transaction processes</li>
                  <li className="li">
                    Inadequate access to real-time financial news • Fraudulent
                    investment companies
                  </li>
                  <li className="li">Low interest rates</li>
                </ul>
              </div>
              <div className="sm:mt-0 mt-4">
                <h6 className="airbnb-cereal-bold text-xs">Frustrations ☹️</h6>
                <ul className="airbnb-cereal-light text-sm leading-7  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">
                    Difficulty in tracking investments across multiple platforms
                  </li>
                  <li className="li">
                    Not being able to read investment thread because of too much
                    charts and graphs
                  </li>
                  <li className="li">
                    Not being able to make a decision, no tailored news channels
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        {/* end case 1 */}
        {/* case 2 */}
        <motion.div
          initial={{ opacity: '0' }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0 },
          }}
          className="border border-gray-500 w-full h-auto  mb-8 flex sm:flex-row flex-col p-5 "
        >
          <div>
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649106929/philip/unsplash_R8kIwcdo_10_oc5w5r.png"
              style={{ width: '360px', height: '100%' }}
            />
          </div>
          <div className=" max-w-2xl px-7 sm:mt-0 mt-4">
            <h2 className="airbnb-cereal-medium font-size4 ls2 mb-3 ">
              Justine, 34yrs
            </h2>
            <p className="airbnb-cereal-light text-base devby dark:text-white mb-2">
              Entrepreneur
            </p>
            <hr />
            <h6 className="airbnb-cereal-bold text-xs leading-8 mt-2">
              Bio ️📜
            </h6>
            <p className="airbnb-cereal-light mb-4 text-sm leading-7 work-p dark:text-white">
              Justine is a Tech-savvy serial Businesswoman and a mother of 3.
              She runs 3 businesses in the Fashion and Hospitality sectors (with
              support from her husband) and is seeking access to investment
              opportunities to sustain and grow her busniessess, achieve her
              expantion goals and support her family despite her extremely busy
              schedule
            </p>
            <div className="flex sm:flex-row flex-col mt-4">
              <div className=" mr-10 ">
                <h6 className="airbnb-cereal-bold text-xs">Goals 😃</h6>
                <ul className="airbnb-cereal-light text-sm leading-7 pl-6 max-w-sm work-p dark:text-white">
                  <li className="li">
                    To conveniently manage her finances with 24/7 access to
                    execute financial transactions
                  </li>
                  <li className="li">
                    To acheive her short and long term business expansion goals
                  </li>
                  <li className="li">
                    Gain access to low interest loans and high interest
                    investment opportunities
                  </li>
                  <li className="li">
                    Access to real-time business advisory in order to stay ahead
                    in her business engagements
                  </li>
                  <li className="li">To secure her business legacy</li>
                </ul>
              </div>
              <div className="sm:mt-0 mt-4">
                <h6 className="airbnb-cereal-bold text-xs">Frustrations ☹️</h6>
                <ul className="airbnb-cereal-light text-sm leading-7  max-w-sm pl-8 work-p dark:text-white">
                  <li className="li">Infrequent flow of income</li>
                  <li className="li">
                    Inability to afford long-term investments due to increased
                    liquidity demands
                  </li>
                  <li className="li">Fraudulent investment companies</li>
                  <li className="li">
                    Complicated technical investment linguals
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
          We have created a product to meet all the needs of our target users
          appropriately; Just like the tagline for the product{' '}
          <b className="airbnb-cereal-medium">
            Invest securely anytime, anywhere!
          </b>
        </p>
        <p className="airbnb-cereal-light text-base leading-7 work-p dark:text-white mt-8 ">
          We built a mobile application which allows current and aspiring
          investors purchase securities and other related instruments without
          the aid of a broker.
        </p>
        <p className="airbnb-cereal-light text-base leading-7 work-p dark:text-white mt-1 ">
          In addition, the application provides a seamles user interface that
          allows tracking diverse investment portfolios, provides a convenient
          way for retail investors to save money whilst earning attractive
          interest rates, and allowing retail investors to help fund
          infrastructure projects in Nigeria whilst earning an income.
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
          <h6 className="neue-machina-ultrabold text-2xl ls1 leading-9 devby dark:text-white mb-2">
            Information architecture
          </h6>
          {/* line */}
          <div className=" h-1 w-16 bgblack dark:bg-white "></div>
        </div>
        <p className="airbnb-cereal-light text-base leading-7 work-p dark:text-white mt-4">
          i created an information architecture, sighting every aspect of the
          i-invest application; this will enable me to not skip any aspect of
          the app when designing and this gives the application proper structure
          in terms of hierachy, navigation and nomencleture.
        </p>
        <p className="airbnb-cereal-light text-base leading-7 mt-1 work-p dark:text-white">
          This architecture will work for both web and mobile applications.
        </p>
        <div className="mt-8">
          <img
            src="https://res.cloudinary.com/davak/image/upload/v1649192564/philip/Group_48095344_lhf8md.svg"
            alt="arch1"
          />
        </div>
        <div className="mt-10">
          <img
            src="https://res.cloudinary.com/davak/image/upload/v1649192601/philip/Group_48095345_lwqgoc.svg"
            alt="arch2"
          />
        </div>
      </motion.div>

      {/*  */}
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
            Flow chart
          </h6>
          {/* line */}
          <div className=" h-1 w-16 bgblack dark:bg-white "></div>
        </motion.div>

        <p className="airbnb-cereal-light text-base leading-8 work-p dark:text-white mb-14">
          Some core business logic.
        </p>

        <div className="flex flex-col justify-center px-10">
          <div>
            <img src="https://res.cloudinary.com/davak/image/upload/v1649194238/philip/Group_48095348_g9obcz.svg" />
          </div>
          <div className="hr"></div>
          <div className="mt-6">
            <img src="https://res.cloudinary.com/davak/image/upload/v1649194259/philip/Group_48095347_iuph7b.svg" />
          </div>
          <div className="hr"></div>

          <div className="mt-6">
            <img src="https://res.cloudinary.com/davak/image/upload/v1649194275/philip/Group_48095349_fagtss.svg" />
          </div>
          <div className="hr"></div>

          <div className="mt-6">
            <img src="https://res.cloudinary.com/davak/image/upload/v1649194290/philip/Group_48095350_u8xd2m.svg" />
          </div>
        </div>
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
            Walkthrough some highfidelity screens
          </p>
          <p className="airbnb-cereal-light text-base devby dark:text-white leading-8">
            For the highfidelity prototype, we adopted the Pegasus design system
            to our brand guidelines and used iconly2 for our icons.{' '}
          </p>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Website
            </h6>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649323762/philip/Frame_23_bqm9gk.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="mt-16 mb-10">
            <h6 className="airbnb-cereal-bold text-xl ls2 devby dark:text-white leading-8">
              Mobile application
            </h6>
            <h6 className="airbnb-cereal-bold text-base ls2 devby dark:text-white leading-8 mt-8">
              Splash screen {'&'} Onboarding{' '}
            </h6>
            <p className="airbnb-cereal-light text-base devby dark:text-white leading-7">
              Created a simple flow for the onboarding to quickly introduce the
              users into the the benefit of using the app, giving them the
              option to simply read through or skip if they want to.
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649323456/philip/Group_48095351_wn0plj.svg"
              alt=""
            />
          </div>
          <h6 className="airbnb-cereal-bold text-base ls2 devby dark:text-white leading-8 mt-14">
            Registration and Login
          </h6>
          <p className="airbnb-cereal-light text-base devby dark:text-white leading-7">
            We created an experience with easy to fill forms, that allows quick
            onboarding of users.
          </p>
          <div className="mt-8">
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649322701/philip/Group_48095355_fk26n4.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649323247/philip/Group_48095356_dmbits.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center mt-14 mb-20">
          <div className=" max-w-md flex-1 ">
            <h6 className="airbnb-cereal-medium text-base ls2 devby dark:text-white leading-8 mt-8 mb-4">
              Dashboard
            </h6>
            <p className="airbnb-cereal-light text-base devby dark:text-white leading-7">
              A user friendly dashboard that brings to the forefront every
              aspect of the app experience. Users will be able to view their
              wallet and investment balance, see progress of their portfolio,
              make quick actions like investing, paying of bills, creating
              saving plans and generally getting all the prompts that will help
              them make the best investment decisions
            </p>
          </div>
          <div className="flex-1 -ml-40 ">
            <img
              src="https://res.cloudinary.com/davak/image/upload/c_scale,h_885,w_1000/v1649261656/philip/Samsung_Galaxy_Note_20_Ultra_czj0bw.svg"
              alt=""
              style={{ transform: 'scale(1.2)' }}
            />
          </div>
        </div>

        <div>
          <h6 className="airbnb-cereal-bold text-base ls2 devby dark:text-white leading-8 mt-8">
            Other mobile app screens
          </h6>
          <p className="airbnb-cereal-light text-base devby dark:text-white leading-7">
            Showing other aspect of the mobile experience
          </p>
          <div className="mt-8">
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649323851/philip/Frame_24_twd0xv.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <h6 className="airbnb-cereal-bold text-base ls2 devby dark:text-white leading-8 mt-14">
            Web app screens
          </h6>
          <p className="airbnb-cereal-light text-base devby dark:text-white leading-7 mt-1">
            I made sure the web application work as closely as the mobile app,
            so the experience is the same, you can move from the mobile app to
            the web app and expereience and seamless transition
          </p>
          <div className="mt-8">
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649323171/philip/Group_48095370_itdsel.svg"
              alt=""
              className="mb-20"
            />
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649322704/philip/Frame_25_j42p8e.svg"
              alt=""
            />
          </div>
        </div>

        <div>
          <h6 className="airbnb-cereal-bold text-base ls2 devby dark:text-white leading-8 mt-14">
            Mobile Web Responsivenes
          </h6>
          <p className="airbnb-cereal-light text-base devby dark:text-white leading-7 mt-1">
            Designed mobile responsive screens for the web app to ensure the
            experience is optimized for the multiple cross functional platforms
          </p>
          <div className="mt-8">
            <img
              src="https://res.cloudinary.com/davak/image/upload/v1649323300/philip/Frame_26_ma1a51.svg"
              alt=""
              className="mb-20"
            />
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
          I have gained so much experience working on i-invest, the daily
          interaction with the development team, getting users feedback and also
          feedback from the stakeholders, it has been both sweet and not so
          sweet experience. Currently i-invest is among one of the investment
          and savings platform in Nigeria.
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8 mt-1">
          Currently i-invest has over{' '}
          <b className="airbnb-cereal-medium">100k</b> downloads on appstore and
          play store, and resolved over{' '}
          <b className="airbnb-cereal-medium">44k</b> transactions with a ROI of
          over <b className="airbnb-cereal-medium">16b</b>
          naira in 2021, surpasing the best year (2020) since inception.
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8 mt-1">
          You can download and check out{' '}
          <b className="airbnb-cereal-medium">i-invest</b> on all platforms
        </p>
        <p className="airbnb-cereal-light text-base work-p dark:text-white leading-8 mt-1">
          Thanks for reading❤️... Hope you enjoyed it as much as i did creating
          it
        </p>
      </div>

      <div className="flex mt-32">
        {/* 1 */}
        <div className="mr-10">
          <Link href="/work/vobb_io">
            <motion.a
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.0 }}
              className={` ${
                theme === 'light' ? 'view-project-p' : 'view-project-white'
              }  neue-machina-ultrabold bg-transparent dark:bg-white text-white py-5 px-10 cursor-pointer`}
            >
              <p className="flex prev_text text-lg dark:text-black">
                <i className="mr-3">
                  {theme === 'light' ? (
                    <CircleArrow color="#8795A1" rotate={180} />
                  ) : (
                    <CricleArrowwhite color="#8795A1" rotate={180} />
                  )}
                </i>
                View previous project{' '}
              </p>
            </motion.a>
          </Link>
        </div>
        <div>
          {/* 2 */}
          <Link href='/work/afrealone'>
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
