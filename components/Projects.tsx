import { motion } from 'framer-motion';
import React from 'react'
import Image from "next/image";
import img1 from '/hero.png'
import gym from '/log.png'
import eco from '/ecommerce.png'
import plc from '/logoss.png'
import inve from '/mikeinventory.png'
import myInsure from '/myinsure.jpeg'
import spaceApp from '/SpaceApp.png'
import netflix from '/netflix.png'
import recipe from '/Recipe.png'
import Link from 'next/link';


type Props = {}

const Projects = (props: Props) => {

    const projects = [
        {
            img: gym,
            title: 'A Phone Insurance Application',
            desc: "An insurance app that lets you subscribe to an insurance plan that covers any of your phone damages all year round Developed, tested and Deployed an insurance web application with Reactjs, Bootstrap, Firebase, Paystack API's and so on. Worked directly with firebase authentication, cloudstore database and firebase storage among others to make the app ready for clients' usage Integrated paystack payment into the app as a means of payment.",
            live: 'https://myinsure-9b6d0.web.app/',
            source: '#',

        },
        {
            img: gym,
            title: 'A FullStack inventory Application',
            desc: "An insurance app that lets you subscribe to an insurance plan that covers any of your phone damages all year round Developed, tested and Deployed an insurance web application with Reactjs, Bootstrap, Firebase, Paystack API's and so on. Worked directly with firebase authentication, cloudstore database and firebase storage among others to make the app ready for clients' usage Integrated paystack payment into the app as a means of payment.",
            live: 'https://inventory-frontend-xi.vercel.app/',
            source: '#',

        },
        {
            img: gym,
            title: 'Platform Lead Limited Official Website',
            desc: "Platform Lead Limited Official Website made with ReactJs, Tailwind Css, EmailJs and etc. A responsive multi-page website that tells more about the company and allows user to find out more about our programs and how we run them. It also allows user to reach out directly to the company through the contact us page with the help of EmailJs that was integrated into it",
            live: 'https://plitsolutions.com/',
            source: 'https://plitsolutions.com/',
        },
        {
            img: gym,
            title: 'A React Gym WebApp',
            desc: "A live Gym APp that allows users access different exercises to help them through their healthy life. it lets users view different categories of exercise ranging from chest, to shoulder, to leg and so on, With details of each and the visual representation of them. It also gives user access to different youtube tutorial for each exercises directly from the website. All these were created using ExerciseDb Api and youtube-search and download Api from Rapid Api.",
            live: 'https://petermichael28.github.io/MyGym/',
            source: 'https://github.com/PeterMichael28/MyGym'
        },
        {
            img: netflix,
            title: 'Responsive Netflix clone App WebApp',
            desc: "Created with Nextjs, Typescript and TailwindCss. A fully responsive Netflix that allows you check for different Genre of movies to watch their trailers as well as add to list of favorites.  TMDB Rest Api was consumed to make this possible as well as Context Api to manage my states. Successfully deployed to Vercel",
            live: 'https://netflix-clone28.vercel.app',
            source: 'https://github.com/PeterMichael28/Netflix'
        },
        {
            img: eco,
            title: 'React E-commerce WebApp',
            desc: "An E-commerce web app created with ReactJs, Bootstrap, Redux-toolKit and Redux for the state Management. A Multi-page e-commerce website that allows you to check through different products and their details. There is also a add to cart functionality that lets you add any item of your choice to your cart",
            live: 'https://petermichael28.github.io/React-E-commerce/',
            source: 'https://petermichael28.github.io/React-E-commerce/'
        },
        {
            img: recipe,
            title: 'A Food Recipe App',
            desc: "Created with React, Rest Api's, bootstrap and React Hooks. A Recipe site that allows you check through different recipes, read through their summary and also cooking instructions to make each. A search page to search for any recipe of your choice, as well as a like button to let you like your favorites recipe. A Liked Recipe page that lets you see all your liked recipe",
            live: 'https://petermichael28.github.io/RecipesApp/',
            source: 'https://github.com/PeterMichael28/RecipesApp'
        },
        {
            img: spaceApp,
            title: 'Space Multi-page Website',
            desc: "A Static Multiple page Space App where you can navigate through different locations available, the travel crews as well as the travel vehicles. THis project was created with HTML, CSS and Javascript. it gives user access to navigate through different pages that includes viewing the different destinations, the different crews and also different transportation technology in use. It is fully responsive on all screens",
            live: 'https://petermichael28.github.io/mynewprojects/',
            source: 'https://github.com/PeterMichael28/mynewprojects'
        },

    ]

  

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
    
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-5  scrollbar-track-gray-400/40 scrollbar-thumb-[#f7ab0a]/70 scrollbar-thin'>
        {
            projects.map((project, i) => (
                <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center h-screen px-4 xs:px-7 py-16 md:p-20 md:px-44 md:py-12'>

                    <motion.div
                    initial={{ opacity: 0, y:-100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1 }}
                    viewport={{once: true}}
                    >
                    <Image src={project.img} alt='logo' className='w-[170px] h-[170px]' />

                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y:100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1 }}
                    viewport={{once: true}}
                        className='space-y-3 px-0 md:px-10 max-w-4xl'>
                        <h4 className='text-xl font-semibold text-center'><span className='underline decoration-[#f7ab0a]/50 text-[#f7ab0a]/50'>Case Study {i + 1} of {projects.length}:</span>  {project.title}</h4>

                        <p className="text-sm text-center md:text-left md:text-base">
                            {project.desc}
                        </p>
                        <div className='flex justify-center items-center space-x-6'>
                            <Link href={project.live} className='bg-[#f7ab0a]/40 px-9 py-2 rounded-md font-semibold tracking-widest hover:border hover:border-[#f7ab0a]/40 transition-all duration-500 hover:bg-[rgba(36,36,36)]'>
                                Live
                            </Link>
                            <Link href={project.source} className='bg-[#f7ab0a]/40 px-9 py-2 rounded-md font-semibold tracking-widest hover:border hover:border-[#f7ab0a]/40 transition-all duration-500 hover:bg-[rgba(36,36,36)]'>
                                Source
                            </Link>
                        </div>
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