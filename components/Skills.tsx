import { motion } from 'framer-motion';
import React from 'react'
import Skill from './Skill';
import html from '/html.png'
import css from '/css.png'
import js from '/js.png'
import react from '/react.png'
import nextjs from '/nextjs.png'
import express from '/express.png'
import redux from '/redux.png'
import bootstrap from '/bootstrap.png'
import tailwind from '/tailwind.png'
import mongo from '/mongo.png'
import rquery from '/rquery.png'
import nodejs from '/nodejs.png'
import sass from '/sass.png'
import framer from '/framer.png'
import mui from '/mui.png'
import ts from '/ts.png'
import git from '/git.png'

type Props = {}

const Skills = (props: Props) => {
  return (
   <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    id="skills"
    className="snap-start min-h-screen overflow-x-hidden"
   >
    <div className="flex flex-col relative h-screen text-center md:text-left xl:flex-row max-w-[1300px]  px-3 xl:px-10 justify-center mx-auto items-center xl:space-x-0 ">
     <h3 className="absolute top-16 font-semibold uppercase tracking-[10px] text-gray-500 text-xl">
      Skills
     </h3>

     <h3 className="absolute top-28 uppercase tracking-[2px] text-gray-500 text-sm">
      Hover a skill for a current proficiency
     </h3>

     <div className="mt-20 space-y-5">
        <motion.div 
        initial={{x: -150 , opacity: 0}}
        whileInView={{x:0, opacity: 1}}
        transition={{duration: 1.5}}
        className='grid grid-cols-4 gap-5 place-items-center'>
        <Skill img={html} text='95%' />
      <Skill img={css} text='95%'  />
      <Skill img={js} text='85%'  />
      <Skill img={react} text='85%'  />
      <Skill img={nextjs} text='75%'  />
      <Skill img={ts} text='65%'  />
      <Skill img={nodejs} text='55%'  />
      <Skill img={express} text='55%'  />
   
        </motion.div>
        <motion.div 
        initial={{x: 150, opacity: 0}}
        whileInView={{x:0, opacity: 1}}
        transition={{duration: 1.5}}
        className='grid grid-cols-4 gap-5 place-items-center'>
              <Skill img={framer} text='65%' />
             <Skill img={mongo} text='55%'  />
      <Skill img={bootstrap} text='75%'  />
      <Skill img={tailwind} text='85%'  />
      <Skill img={git} text='75%'  />
      <Skill img={redux} text='65%' />
      <Skill img={sass} text='65%' />
      <Skill img={mui} text='65%' />
      
        </motion.div>
      
     </div>
    </div>
   </motion.section>
  );
}

export default Skills