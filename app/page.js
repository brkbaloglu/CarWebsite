import HomePageImage from '../public/images/home-img.jpeg'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='relative'>
      <Image src={HomePageImage} width={1920} height={1080}  alt='homepage-image'></Image>
      <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/40'></div>
      <div className='absolute top-20 left-24 text-white max-w-[700px]'>
        <h3 className='capitalize font-bold text-7xl'>join the journey</h3>
        <p className='font-semibold text-xl my-6 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, adipisci!</p>
        <Link href="/cars" className='bg-transparent text-white px-4 py-2 rounded-xl hover:text-black hover:bg-white border-2 border-white '>Our Catalog</Link>
      </div>
    </div>
  );
}
