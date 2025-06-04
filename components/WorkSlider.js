// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Wayback Machine Scraper',
          path: '/thumb1.jpg',
          link: "https://github.com/Riya2511/Wayback-Machine-Scraper",
        },
        {
          title: 'Researcher Discovery Platform',
          path: '/thumb2.jpg',
          link: "https://github.com/Riya2511/Researcher-Discovery-Platform",
        },
        {
          title: 'Eye Tracker',
          path: '/thumb3.jpg',
          link: "https://github.com/Riya2511/Switching-Multiple-Cameras-Based-On-Eye-Tracking",
        },
        {
          title: 'Loan Management System',
          path: '/thumb4.jpg',
          link: "https://github.com/Riya2511/LoanApplication",
        },
      ],
    },
    {
      images: [
        {
          title: 'PAWFECT',
          path: '/thumb4.jpg',
          link: "https://github.com/Riya2511/PAWFECT",
        },
        {
          title: 'Strategic Stock Analysis',
          path: '/thumb1.jpg',
          link: "https://github.com/Riya2511/Strategic-Stock-Analysis",
        },
        {
          title: 'Personalized Learning Platform',
          path: '/thumb2.jpg',
          link: "https://github.com/Riya2511/Personalized-Learning-Platform",
        },
        {
          title: 'Real-time Streaming Data Analysis',
          path: '/thumb3.jpg',
          link: "https://github.com/Riya2511/Air-and-Water-Quality-Analysis",
        },
      ],
    },
  ],
};

import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {Pagination} from 'swiper';

import {BsArrowRight} from 'react-icons/bs';

const WorkSlider = () => {
  return <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
    {workSlides.slides.map((slide, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index)=> {
              return (
                <a href={image.link}>
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      <Image src={image.path} width={500} height={300} alt=''/>
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='traslate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            {image.title}
                          </div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </SwiperSlide>
      )
    })}
  </Swiper>;
};

export default WorkSlider;
