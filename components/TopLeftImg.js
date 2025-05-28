import Image from 'next/image';

const TopLeftImg = () => {
  return <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opcaity-50'>

    <Image
      src="/./top-left-img.png"
      alt="Top Left Decorative Image"
      width={400}
      height={400}
      className="absolute top-0 left-0 z-10"
    />
  </div>;
};

export default TopLeftImg;
