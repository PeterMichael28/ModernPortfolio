import { motion } from 'framer-motion';
import React from 'react'
import Image from "next/image";
import img1 from '../public/hero.png'

type Props = {}

const Projects = (props: Props) => {
    const projects = [2,4,4,4,,5,5,6,7,]


  return (
    <motion.section initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    id="projects"
    className="snap-center min-h-screen "
   >
    <div className="flex flex-col relative h-screen text-left xl:flex-row max-w-full justify-center mx-auto items-center z-0 overflow-x-hidden">
     <h3 className="absolute top-16 font-semibold uppercase tracking-[10px] text-gray-500 text-xl">
      Projects
     </h3>
    
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 -mt-5  scrollbar-track-gray-400/40 scrollbar-thumb-[#f7ab0a]/70 scrollbar-thin'>
        {
            projects.map((project, i) => (
                <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-screen px-10 py-16 md:p-20 md:px-44'>

                    <motion.div
                    initial={{ opacity: 0, y:-100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1 }}
                    viewport={{once: true}}
                    >
                    <Image src={img1} alt='logo' className='w-[170px] h-[170px]' />

                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y:100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1 }}
                    viewport={{once: true}}
                        className='space-y-6 px-0 md:px-10 max-w-4xl'>
                        <h4 className='text-2xl font-semibold text-center'><span className='underline decoration-[#f7ab0a]/50 text-[#f7ab0a]/50'>Case Study {i + 1} of {projects.length}:</span>  UPS Clone</h4>

                        <p className="text-sm text-center md:text-left md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur dolor libero, accusantium ex, similique ullam cum obcaecati maiores, quia reiciendis sed iusto qui quo sit eum blanditiis beatae vel recusandae officiis consectetur aut expedita quis eveniet? Voluptate, dolorum id Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus repellendus tempora perspiciatis blanditiis nobis culpa voluptas, laborum dolore ipsum eos.
                        </p>
                    </motion.div>
                </div>
            ))
        }
    </div>
    <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[200px] -skew-y-12'></div>
    </div>
    </motion.section>
  )
}

export default Projects