// testimonial data
const testimonialData = [
  {
    image: '/tlubben.jpeg',
    name: 'Tyler Lubben',
    position: 'Founder, VizualLeads, USA',
    message:
      'Riya built a flawless lead automation system—processed 100GB+ data and delivered actionable insights. Truly exceeded expectations!',
  },
  {
    image: '/pradeep.jpeg',
    name: 'Pradeep Gupta',
    position: 'CEO & Founder, Bisgen Solutions, India',
    message:
      'She is technically strong and very copperative and completed the requested project on time and with quality delivery.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Tolga Caskurlu',
    position: 'Customer, Netherlands',
    message:
      "I think she has some good skills and completed the project in time. I think she may be a good and reliable choice for long-term projects.",
  },
  {
    image: '/t-avt-1.png',
    name: 'Amit Shah',
    position: 'Director, Mahati Graphics, India',
    message:
      "Brilliant offline loan manager—portable, secure, and OS-independent. Solved a real problem with a smart, reliable solution.",
  },
];

import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Navigation, Pagination} from 'swiper';

import { FaQuoteLeft} from 'react-icons/fa';

const TestimonialSlider = () => {
  return <Swiper
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
    {testimonialData.map((person, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt=''/>  
                </div>
                <div className='text-lg'>{person.name}</div>
                <div className='text-[12px] uppercase font-extralight tracking-widest'>
                  {person.position}
                </div>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
              <div className="mb-4">
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
              </div>
              <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
      )
    })}
  </Swiper>;
};

export default TestimonialSlider;
