import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// icons
import {
  RxDesktop,
  RxReader,
  RxArrowTopRight
} from "react-icons/rx";
import { MdPhoneAndroid } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiAnalyse, BiCameraMovie } from 'react-icons/bi';
import { BsCloudUpload } from 'react-icons/bs';
import { FaRobot, FaTools, FaPaintBrush, FaShieldAlt } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';


import {FreeMode, Pagination} from 'swiper';

// data
const serviceData = [
    {
      title: 'Automation Scripting',
      description: 'Automating repetitive tasks with Python scripts.',
      icon: <FaRobot />,
      import: "import { FaRobot } from 'react-icons/fa';",
    },
    {
      title: 'API Development',
      description: 'Designing and implementing RESTful APIs.',
      icon: <SiPostman />,
      import: "import { SiPostman } from 'react-icons/si';",
    },
    {
      title: 'Web Development',
      description: 'Building responsive and performant websites.',
      icon: <RxDesktop />,
      import: "import { RxDesktop } from 'react-icons/rx';",
    },
    {
      title: 'Mobile Development',
      description: 'Creating mobile apps for iOS and Android.',
      icon: <MdPhoneAndroid />,
      import: "import { MdPhoneAndroid } from 'react-icons/md';",
    },
    {
      title: 'Cloud Deployment',
      description: 'Deploying and managing cloud infrastructure.',
      icon: <BsCloudUpload />,
      import: "import { BsCloudUpload } from 'react-icons/bs';",
    },
    {
      title: 'DevOps',
      description: 'CI/CD pipelines, Docker, Kubernetes, and monitoring.',
      icon: <FaTools />,
      import: "import { FaTools } from 'react-icons/fa';",
    },
    {
      title: 'Data Analysis',
      description: 'Analyzing data to extract actionable insights.',
      icon: <BiAnalyse />,
      import: "import { BiAnalyse } from 'react-icons/bi';",
    },
    {
      title: 'Technical Writing',
      description: 'Documenting processes, APIs, and systems.',
      icon: <HiOutlineDocumentText />,
      import: "import { HiOutlineDocumentText } from 'react-icons/hi';",
    }
];

const ServiceSlider = () => {
  return <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
    {serviceData.map((item, index) => {
      return (
        <SwiperSlide>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>

        </SwiperSlide>
      )
    })}
  </Swiper>;
};

export default ServiceSlider;
