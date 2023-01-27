import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image";
import img1 from '../public/dp2.jpg'
import Link from 'next/link';


type Props = {}

const Hero = ( props: Props ) => {
    const [ text, count ] = useTypewriter( {
        words: [
            "Hello, You are Welcome",
            "I am Michael",
            "A Frontend Developer"
        ],
        loop: true,
        delaySpeed: 3000
    })
  return (
   <section id="hero" className="snap-center">
    <div className="h-screen flex flex-col items-center justify-center space-y-1 overflow-hidden">
     <BackgroundCircles />

     <Image
      src={img1}
      alt="image"
      className="w-36 h-36 rounded-full object-cover mx-auto"
     />
      <h2 className="text-sm uppercase text-gray-500 tracking-[10px] md:tracking-[15px] font-semibold">
       Software Developer
      </h2>
     <div className=''>
      <h2 className="text-center text-3xl lg:text-6xl font-semibold px-6">
       <span className="text-[1.8rem] md:text-[3rem]">{text}</span>
       <Cursor
        cursorColor="#f7ab0a"
        cursorBlinking={true}
       />
      </h2>
     </div>

     <div className='pt-5 relative z-20'>
    <Link href='#about'> <button className='hero-btn'>About</button></Link>
     
     <Link href='#experience'> <button className='hero-btn'>Experience</button></Link>
     
     <Link href='#skills'> <button className='hero-btn'>Skills</button></Link>
     
     <Link href='#projects'><button className='hero-btn'>Projects</button></Link>
      
     </div>
    </div>
   </section>
  );
}

export default Hero