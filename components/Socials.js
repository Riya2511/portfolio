import Link from 'next/link';

import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
} from 'react-icons/ri';

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-2xl right-8'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.github.com/Riya2511'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/riya-jain-226476205/'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
  </div>;
};

export default Socials;
