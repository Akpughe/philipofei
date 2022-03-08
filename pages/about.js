import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import philip from '../public/img/philip.png';
import BounceArrow from '../icons/BounceArrow';
import Circle from '../icons/Circle';
import RightArrow from '../icons/RightArrow';

const About = () => {
  const [show, setShow] = useState(false);
  function changeColor(e) {
    e.target.style.color = '#EF4444';
  }
  function changeBack(e) {
    e.target.style.color = '';
  }
  return (
    <Layout>
      <div className="flex pt-32">
        <div className="flex-1">
          {/* head */}
          <div>
            <h1 className="neue-machina-ultrabold font-extrabold dark:text-white text-7xl pb-2">
              About me.
            </h1>
          </div>
          {/* paragraph */}
          <div>
            <p
              className="airbnb-cereal-medium text-xl text-gray-400 dark:text-white"
              style={{ lineHeight: '48px', width: '750px' }}
            >
              I am Philip Olorunfemi Ofei, a Software product designer whose
              focus is to create seamless user experience and beautiful
              cross-functional platforms. <br /> I have years of Experience
              creating user centered products, meeting both business and user
              needs optimally. <br /> Using strategy, research and design to
              solve product challenges - The outcome : Functional and
              technically refined products that are aswell aesthetically
              pleasing and easy to use. <br /> I have worked with some of the
              front runners in organizations across Fintech, Realestate-tech,
              Medtech, Edu-tech and Psychometric-tech. <br />I love traveling
              and exploring food documentaries from around the world
            </p>
          </div>
        </div>
        {/* image */}
        <div className="flex justify-center flex-1 px-4 ">
          <div className="img-rect">
            <Image className="img-rect-image" src={philip} />
          </div>
        </div>
      </div>
      <div className="pt-10 pb-32">
        <div className="flex items-center">
          <span className="airbnb-cereal-medium font-bold text-lg mr-2 dark:text-white">
            More about me
          </span>
          <BounceArrow />
        </div>
      </div>
      <div className=" mt-20 ">
        <h6 className="airbnb-cereal-medium text-2xl leading-9 text-gray-400 dark:text-white mb-2">
          Skills Highlight ✨.
        </h6>
        {/* line */}
        <div className=" h-1 w-16 bg-black dark:bg-white "></div>
      </div>
      <div className="pb-32">
        {/* 1 */}
        <div className="flex mt-16 justify-between">
          <div>
            <a className="neue-machina-ultrabold skill-size cursor-pointer  text-red-500 ">
              UX Research
            </a>
          </div>
          <div>
            <a
              onMouseEnter={changeColor}
              onMouseLeave={changeBack}
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
            >
              Design thinking
            </a>
          </div>
          <div>
            <a
              onMouseEnter={changeColor}
              onMouseLeave={changeBack}
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
            >
              UI Design
            </a>
          </div>
          <div>
            <a
              onMouseEnter={changeColor}
              onMouseLeave={changeBack}
              className="neue-machina-ultrabold skill-size  cursor-pointer  dark:text-white text-gray-500 dark:text-white "
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
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
            >
              Communication
            </a>
          </div>
          <div>
            <a
              onMouseEnter={changeColor}
              onMouseLeave={changeBack}
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
            >
              Information Architecture
            </a>
          </div>
          <div>
            <a
              onMouseEnter={changeColor}
              onMouseLeave={changeBack}
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
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
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
            >
              User Testing
            </a>
          </div>
          <div>
            <a
              onMouseEnter={changeColor}
              onMouseLeave={changeBack}
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
            >
              Interaction Design
            </a>
          </div>
          <div>
            <a
              onMouseEnter={changeColor}
              onMouseLeave={changeBack}
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
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
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
            >
              Design Sprint
            </a>
          </div>
          <div>
            <a
              onMouseEnter={changeColor}
              onMouseLeave={changeBack}
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
            >
              Customer Journey Map
            </a>
          </div>
          <div>
            <a
              onMouseEnter={changeColor}
              onMouseLeave={changeBack}
              className="neue-machina-ultrabold skill-size cursor-pointer  dark:text-white text-gray-500 dark:text-white "
            >
              Empathy
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" mt-20 ">
        <h6 className="airbnb-cereal-medium text-2xl leading-9  dark:text-whitetext-gray-400 mb-2">
          Tools ⚙️.
        </h6>
        {/* line */}
        <div className=" h-1 w-10 bg-black dark:bg-white "></div>
      </div>
      {/*  */}
      <div className="flex justify-center mb-10 mt-10">
        {/* begin */}
        <div className="flex flex-col h-full items-center relative w-14 space-y-10">
          <div className="block-line w-px h-full absolute  "></div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            return (
              <div key={i} className="">
                <Circle />
              </div>
            );
          })}
        </div>
        {/* end */}
        {/* new */}
        <div className=" h-full pt-10 pl-12 space-y-12 pb-32  ">
          {' '}
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white  dark:text-white text-2xl">
            {' '}
            Figma{' '}
          </p>{' '}
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white  dark:text-white text-2xl ">
            {' '}
            Adobe XD{' '}
          </p>{' '}
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white  dark:text-white text-2xl">
            Adobe illustration
          </p>
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white  dark:text-white text-2xl">
            Adobe Photoshop
          </p>
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white  dark:text-white text-2xl">
            Framer
          </p>
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white h-5 dark:text-white text-2xl">
            Google Services
          </p>
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white text-2xl">Miro</p>
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white   text-2xl">
            Whimsical
          </p>
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white  text-2xl">Lookback</p>
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white  text-2xl">Notion</p>
          <p className="neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white h-5 text-2xl">Jira</p>
        </div>
        {/* new end */}
      </div>
      {/*  */}
      <div className=" mt-20 ">
        <h6 className="airbnb-cereal-medium text-2xl leading-9 text-gray-400 dark:text-white mb-2">
          Experience 💻️.
        </h6>
        {/* line */}
        <div className=" h-1 w-20 bg-black dark:bg-white dark:bg-white "></div>
      </div>
      {/* experience */}
      <div className="flex mb-10 mt-10">
        {/* b  */}
        <div className=" h-full pt-10 pr-10 ">
          {' '}
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white text-2xl space1 ">
            {' '}
            Medsaf Disrupt Pharmacy{' '}
            <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
              July 2021 - Lagos, Nigeria
            </span>
          </p>{' '}
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white  text-2xl space2  ">
            {' '}
            Parthian Partners (i-invest){' '}
            <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
              July 2021 - Lagos, Nigeria
            </span>
          </p>{' '}
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white  text-2xl space2 ">
            KUPLR
            <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
              July 2021 - Lagos, Nigeria
            </span>
          </p>
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white  text-2xl space2 ">
            Yudimy
            <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
              July 2021 - Lagos, Nigeria
            </span>
          </p>
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white  text-2xl space2s ">
            VOBBS
            <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
              July 2021 - Lagos, Nigeria
            </span>
          </p>
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white dark:text-white text-2xl ">
            <div>
              AFREAL{' '}
              <small className="text-xs">
                (newhomes.ng, financeplus.ng, afrealone)
              </small>
            </div>
            <span className="airbnb-cereal-medium text-sm text-gray-400 dark:text-white ">
              July 2021 - Lagos, Nigeria
            </span>
          </p>
        </div>
        {/* e  */}
        {/* begin */}
        <div className="flex flex-col h-full items-center relative w-14">
          <div className="block-line w-px h-full absolute  "></div>
          {/* begin */}
          <div className="circle-mb mt-10">
            <Circle />
          </div>
          <div className="circle-mb1 mt-10">
            <Circle />
          </div>
          <div className="circle-mb1 mt-10">
            <Circle />
          </div>
          <div className="circle-mb1 mt-10">
            <Circle />
          </div>
          <div className="circle-mb1 mt-10">
            <Circle />
          </div>
          <div className="mt-10 mb-36">
            <Circle />
          </div>
          {/* end */}
        </div>
        {/* end */}
        {/* new */}
        <div className=" h-full pt-10 pl-12 pb-32  ">
          {' '}
          <div className=" mb-32 ">
            <p className="neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl">
              {' '}
              UX {'&'} UI Designer (Remote){' '}
            </p>{' '}
            <ul className="airbnb-cereal-medium text-base text-gray-500 dark:text-white pl-5 pt-5 max-w-xl  list-disc">
              <li className="pb-4">
                Medsaf is a medical tech firm backed by Crunchbase.
              </li>
              <li className="pb-4">
                At Medsaf I{"’"}m currently incharge of designing medical solutions
                that seamlessly brings authentic medications to stakeholders
                (Hospitals, etc) and individuals across Africa.
              </li>
              <li className="pb-4">
                Performing user research {'&'} ideating on exciting ideas.
              </li>
              <li className="pb-4">
                Rolling out series of products (Medsaf Assure, Medsaf
                Diagnostics, Medsaf Patients Direct) that will service different
                players in the medical industry.
              </li>
              <li className="pb-4">
                Estimated ROI increased by 20% at the end of 4th quater of 2021
              </li>
              <li className="pb-4">
                Designed pitch decks that has raised over $200k in closed
                investor pitch rounds
              </li>
              <li className="pb-4">
                Medsaf was among the winners of Google{"’"}s Black Founders Fund
                2021
              </li>
            </ul>
          </div>
          <div className=" margin-b ">
            <p className="neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl">
              {' '}
              UX {'&'} UI Designer{' '}
            </p>{' '}
            <ul className="airbnb-cereal-medium text-base text-gray-500 dark:text-white pl-5 pt-5 max-w-xl  list-disc">
              <li className="pb-4">
                i-invest is Nigeria{"’"}s foremost digital platform for Treasury
                Bills, and now the preferred financial services marketplace in
                Africa.{' '}
              </li>
              <li className="pb-4">
                I revamped the i-invest mobile application and shipped 3 new
                features to production which did 26% increase in the ROI of 2021
                compared to 2020.
              </li>
              <li className="pb-4">
                i-invest processed over ₦ 16.3 billion investment payouts to its
                users in 2021.
              </li>
              <li className="pb-4">
                I revamped the i-invest web application and redesigned the
                i-invest website.
              </li>
            </ul>
          </div>
          <div className="margin-b3">
            <p className="neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl">
              {' '}
              Lead Product Designer (Contract)
            </p>{' '}
            <ul className="airbnb-cereal-medium text-base text-gray-500 dark:text-white pl-5 max-w-xl pt-5  list-disc">
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
          </div>
          <div className="margin-b4">
            <p className="neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl">
              {' '}
              Product Designer
            </p>{' '}
            <ul className="airbnb-cereal-medium text-base text-gray-500 dark:text-white pl-5 max-w-xl pt-5  list-disc">
              <li className="pb-4">
                At Yudimy, i worked on clarity.yudimy.com, a psychometric web
                app that helps individuals and organizations to be happily
                productive.
              </li>
              <li className="pb-4">
                Saw an increase of users by 40% and bagged several awards in the
                tech space.
              </li>
              <li className="pb-4">Redesigned the company’s website</li>
              <li className="pb-4">
                Worked directly with the CEO {'&'} rest of product team to
                achieve these results
              </li>
            </ul>
          </div>
          <div className="margin-b5">
            <p className="neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl">
              {' '}
              UX {'&'} UI Designer (Contract){' '}
            </p>{' '}
            <ul className="airbnb-cereal-medium text-base text-gray-500 dark:text-white pl-5 max-w-xl pt-5  list-disc">
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
          </div>
          <div>
            <p className="neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl">
              {' '}
              UX {'&'} UI Designer (Contract){' '}
            </p>{' '}
            <ul className="airbnb-cereal-medium text-base text-gray-500 dark:text-white pl-5 max-w-xl pt-5  list-disc">
              <li className="pb-4">
                Afreal is a real estate platform using innovative technology to
                solve real estate problems for Nigerians
              </li>
              <li className="pb-4">
                Created design system and web applications
              </li>
              <li className="pb-4">
                Proposed several solutions around the companies products
              </li>
            </ul>
          </div>
        </div>
        {/* new end */}
      </div>
      {/* education */}
      <div className=" mt-20 ">
        <h6 className="airbnb-cereal-medium text-2xl leading-9 text-gray-400 dark:text-white mb-2">
          Education {'&'} Certifications 💻️.
        </h6>
        {/* line */}
        <div className=" h-1 w-10 bg-black dark:bg-white "></div>
      </div>
      {/*  */}
      <div className="flex justify-center mb-10 mt-10 ml-10">
        <div className="flex flex-col h-full items-center relative w-14 ">
          <div className="block-line w-px h-full absolute  "></div>

          <div className="mb-20 mt-12">
            <Circle />
          </div>
          <div className="mb-20">
            <Circle />
          </div>
          <div className="mb-20">
            <Circle />
          </div>
          <div className="mb-20">
            <Circle />
          </div>
          <div className="mb-20">
            <Circle />
          </div>
        </div>

        <div className=" h-full max-w-xs pl-4 pb-32 pt-9 ">
          {' '}
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl mb-14 mt-4">
            {' '}
            Google{' '}
            <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
              UX Design - 2022
            </span>
          </p>{' '}
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl mb-14 ">
            {' '}
            Udemy{' '}
            <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
              Learn Jira Real world examples - 2021
            </span>
          </p>{' '}
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl mb-14">
            Product school
            <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
              Product Masterclass : How to build digital products - 2020
            </span>
          </p>
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl mb-14">
            Udacity
            <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
              User Experience Design Nano Degree - 2020
            </span>
          </p>
          <p className="flex flex-col neue-machina-ultrabold text-gray-700 dark:text-white  text-2xl">
            University of Abuja
            <span className="airbnb-cereal-medium text-sm mt-2 text-gray-700 dark:text-white ">
              B.Sc. PHYSICS - 2015
            </span>
          </p>
        </div>
      </div>
      {/* end education */}

      <div className="work flex flex-row justify-center py-5 ">
        <a className="flex items-center airbnb-cereal-medium text-lg text-black font-black cursor-pointer">
          <span className="mr-1">Go to my works</span> <RightArrow />{' '}
        </a>
      </div>
    </Layout>
  );
};

export default About;
