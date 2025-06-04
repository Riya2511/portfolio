import React, { useState } from 'react';

// icons
import {
  DiPython,
  DiJavascript1,
  DiGit,
  DiDocker,
  DiMysql,
  DiReact
} from 'react-icons/di';

import {
  SiCplusplus,
  SiMongodb,
  SiSqlite,
  SiJupyter,
  SiPowerbi,
  SiPostman,
  SiAmazonaws,
  SiStreamlit,
  SiGoogledatastudio,
  SiDjango,
  SiFlask,
  SiSelenium,
  SiOpencv,
  SiApachekafka
} from 'react-icons/si';


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [
          <DiPython/>,
          <SiCplusplus/>,
          <DiJavascript1/>
        ],
      },
      {
        title: 'Tools',
        icons: [
          <DiGit/>,
          <SiJupyter/>,
          <SiPostman/>,
          <DiDocker/>,
          <SiAmazonaws/>,
          <SiStreamlit/>,
          <SiPowerbi/>
        ],
      },
      {
        title: 'Frameworks and Modules',
        icons: [
          <SiDjango/>,
          <SiFlask/>,
          <DiReact/>,
          <SiSelenium/>,
          <SiOpencv/>,
          <SiApachekafka/>
        ],
      },
      {
        title: 'Databases',
        icons: [
          <DiMysql />,
          <SiMongodb />,
          <SiSqlite />
        ],
      }
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Winner - Smart India Hackathon 2022 (Hardware Edition)',
        organizedBy: 'Dept. of Science & Technology, Gov. of India',        
        project: 'Netra-Connect',
        perks: 'Cash Prize: Rs. 1,00,000',
      },
      {
        title: 'Runner Up - Retirement Industry Hackathon',
        organizedBy: 'TIAA Global Capabilities',
        project: 'AI-Based Retirement Planning Assistant',
        perks: 'Received Certificate and Goodies',
      },
      {
        title: 'Runner Up - Researcher Discover Platform',
        organizedBy: 'IIT Bombay, in association with TATA Sons',
        project: 'Researcher Discovery Platform by Hexapods',
        perks: 'Cash Prize: Rs. 25,000',
      },
      {
        title: 'Winner - National-Level Science Day Competition',
        organizedBy: 'GMRT, in association with Growing Dots',
        project: 'Natural River Trash Regulation',
        perks: 'Received Trophy and Certificate',
      },
      {
        title: 'Runner Up - Skill Championship',
        organizedBy: 'IIT Delhi, in collaboration with MakeIntern',
        project: 'Treenery',
        perks: 'Cash Prize: Rs. 15,000',
      }
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Backend Developer - OneOpen Educare Federation',
        stage: '2023 - Present',
      },
      {
        title: 'Automation Engineer - VizualLeads',
        stage: '2024 - 2025',
      },
      {
        title: 'Intern - WhiziFi Robotics Lab',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Bachelor of Artificial Intelligence and Data Science - SPPU',
        stage: '2024',
      },
      {
        title: 'All India Senior School Certificate Examination - CBSE',
        stage: '2020',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';

import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit="hidden" className='hidden xl:flex absolute -bottom-50 -left-[450px] 2xl:-left-[350px]'>
      <Avatar />
    </motion.div>
    <div className='container mt-6 lg:mt-0 mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit="hidden" className='h2'>
          Powerful <span className='text-accent'>systems</span> <br /> begin with solid <span className='text-accent'>foundations.</span>
        </motion.h2>

        <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit="hidden" className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-lg'>
          I’m Riya — a backend developer and data enthusiast driven by clean architecture, efficient APIs, and meaningful impact. With 4+ years of experience in Python, Django, databases, and automation, I’ve built everything from lead-gen engines scraping datasets to AI-powered trackers for national hackathons. I don’t just code — I create systems that work, scale, and solve.
        </motion.p>

        <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit="hidden" className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/* Experience Section */}
            <div className='relative flex-1 after:w-[1px] after:h-full after-bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={4} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
            </div>
            {/* Projects */}
            <div className='relative flex-1 after:w-[1px] after:h-full after-bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={50} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished Projects</div>
            </div>
            {/* Awards */}
            <div className='relative flex-1'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={5} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning Awards</div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit="hidden" className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div
              key={itemIndex}
              className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} text-xl cursor-pointer capitalize xl:text-2xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <>
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/90'>
                <div className='font-light text-lg mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage && item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, iconIndex) => {
                    return (
                      <div className='text-2xl text-white'>
                        {icon}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='font-light italic text-white/70 text-lg -mt-4'>{item.organizedBy && `Organized By ${item.organizedBy}`}</div>
              <div className='font-light text-white/70 text-lg -mt-2 xl:-mt-4'>{item.project && `Project: ${item.project}`}</div>
              <div className='font-light text-white/70 text-lg -mt-2 xl:-mt-4 mb-2'>{item.perks && `${item.perks}`}</div>
              </>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
