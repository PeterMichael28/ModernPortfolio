import { motion } from 'framer-motion';
import React from 'react'
import ExperienceCard from './ExperienceCard';
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
import sh from '/sidehustle.png'
import firebase from '/firebase.png'
import jp from '/jp.png'
import plc from '/logo.png'

type Props = {}

function Experience({}: Props) {

  const experienceData = [
    {
      images: [html, css, js, bootstrap],
      lists: ['Designed and updated layouts to meet usability and performance requirements', 'Improved tools to boost user interaction and deliver design versatility.', 'Created a Mobile Responsive User Experience with CSS Flexbox that allowed cross-platform accessibility to the website on any device with primary use on mobile.'],
      img: sh,
      title: 'Front-end Developer Intern',
      company: 'Side Hustle Ng',
      timeRange: 'Feb 2022 - March 2022'
    },
    {
      images: [html, css, js, bootstrap, git],
      lists: ['Worked as an assistant team leader in a team of 7 other developers.', " Helped managed and monitor the developer's GitHub accounts for the startup project where I get to merge all pull requests after checking for no conflicts.", 'Liaised between marketing and IT on web development projects integrating front-end assets to back-end systems.', 'Produced websites compatible with multiple browsers.'],
      img: sh,
      title: 'Frontend Developer',
      company: 'Side Hustle Start-ups Bootcamp',
      timeRange: 'April 2022 - May 2022'
    },
    {
      images: [react, css, firebase, bootstrap, git],
      lists: ["Developed, tested and Deployed an insurance web application with Reactjs, Bootstrap, Firebase, Paystack API???s and so on.", " Worked directly with firebase authentication, cloudstore database and firebase storage among others to make the app ready for clients' usage", 'Integrated paystack payment into the app as a means of payment.', 'Developed And deployed our admin side of our insurance app.'],
      img: jp,
      title: 'Frontend Developer',
      company: 'Juniper Labs',
      timeRange: 'June 2022 - Oct 2022'
    },
    {
      images: [react, css, tailwind, redux, sass, git],
      lists: ["Developed the official website with modern JavaScript frameworks, React, TailwindCss, css animation which improved user satisfaction.", "Created the user experience that fetched, parsed, and formatted analytic data, and relayed it into React components.", 'Tutor students in front-end development concepts and technologies', 'Create and deliver lesson plans and curriculum', ' Provide one-on-one and group instruction and Monitored student progress and provide feedback'],
      img: plc,
      title: 'Frontend Developer',
      company: 'Platform Lead ICT',
      timeRange: 'Oct 2022 - Present'
    }
  ]
  
 
 
 
 
  return (
      <motion.section
      initial={ {opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      
          id='experience' className='snap-center h-screen'>
            <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-full px-3 md:px-10 justify-evenly mx-auto items-center'>
              <h3 className='absolute top-20 font-semibold uppercase tracking-[10px] text-gray-500 text-xl'>Experience</h3>


              <div className='text-left mt-5 w-full flex space-x-8 overflow-x-scroll snap-x snap-mandatory px-10  scrollbar-track-gray-400/40 scrollbar-thumb-[#f7ab0a]/70 scrollbar-thin'>
                  {/* experience cards */}

                  {experienceData.map((experience, i) => ( <ExperienceCard key={i} images={experience.images} lists={experience.lists} img={experience.img} title={experience.title} company={experience.company} timeRange={experience.timeRange}  />))}
                  {/* <ExperienceCard />
                 
                  <ExperienceCard />
                  <ExperienceCard /> */}
              </div>
              </div>
    </motion.section>
  )
}

export default Experience