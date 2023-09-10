import { motion } from 'framer-motion';
import React from 'react'
import Image from "next/image";
import img1 from '../assets/hero.png'
import ventetrack from '../assets/icon.png'
import arabian from '../assets/arabian.png'
import eco from '../assets/ecommerce.png'
import plc from '../assets/logoss.png'
import inve from '../assets/mikeinventory.png'
import myInsure from '../assets/myinsure.jpeg'
import Link from 'next/link';


type Props = {}

const Projects = (props: Props) => {

    const projects = [

        {
            img: ventetrack,
            title: 'Ventetrack - A web accounting software',
            desc: "A web accounting software designed for managing inventories, invoicing, receipt bookkeeping and point of sale application. it provides business with comprehensive solutions to manage their business operations seamlessly",
            live: 'https://ventetrack.com/',
            source: '#',

        },
        {
            img: arabian,
            title: 'Arabianlens - A dubai tourist App',
            desc: "A web application to discover and explore the adventure dubai has to offer. It gives you the best tour experience, and it also  brings you the best, memorable and exquisite experience",
            live: 'https://arabianlens.com/',
            source: '#',

        },
        {
            img: myInsure,
            title: 'A Phone Insurance Application',
            desc: "An insurance app that lets you subscribe to an insurance plan that covers any of your phone damages all year round Developed, tested and Deployed an insurance web application with Reactjs, Bootstrap, Firebase, Paystack API's and so on. Worked directly with firebase authentication, cloudstore database and firebase storage among others to make the app ready for clients' usage Integrated paystack payment into the app as a means of payment.",
            live: 'https://myinsure-9b6d0.web.app/',
            source: '#',

        },
        {
            img: inve,
            title: 'A FullStack inventory Application',
            desc: "An insurance app that lets you subscribe to an insurance plan that covers any of your phone damages all year round Developed, tested and Deployed an insurance web application with Reactjs, Bootstrap, Firebase, Paystack API's and so on. Worked directly with firebase authentication, cloudstore database and firebase storage among others to make the app ready for clients' usage Integrated paystack payment into the app as a means of payment.",
            live: 'https://inventory-frontend-xi.vercel.app/',
            source: '#',

        },
        {
            img: plc,
            title: 'Platform Lead Limited Official Website',
            desc: "Platform Lead Limited Official Website made with ReactJs, Tailwind Css, EmailJs and etc. A responsive multi-page website that tells more about the company and allows user to find out more about our programs and how we run them. It also allows user to reach out directly to the company through the contact us page with the help of EmailJs that was integrated into it",
            live: 'https://plitsolutions.com/',
            source: 'https://plitsolutions.com/',
        },
        
        
        {
            img: eco,
            title: 'React E-commerce WebApp',
            desc: "An E-commerce web app created with ReactJs, Bootstrap, Redux-toolKit and Redux for the state Management. A Multi-page e-commerce website that allows you to check through different products and their details. There is also a add to cart functionality that lets you add any item of your choice to your cart",
            live: 'https://petermichael28.github.io/React-E-commerce/',
            source: 'https://petermichael28.github.io/React-E-commerce/'
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
      Selected Projects
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
                    <Image src={project.img} width={150} height={150} alt='logo' className='w-[170px] h-[170px] object-contain' />

                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y:100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1 }}
                    viewport={{once: true}}
                        className='space-y-3 px-0 md:px-10 max-w-5xl'>
                        <h4 className='text-3xl max-sm:text-2xl font-semibold text-center'><span className='underline decoration-[#f7ab0a]/50 text-[#f7ab0a]/50'>Case Study {i + 1} of {projects.length}:</span>  {project.title}</h4>

                        <p className="text-sm text-center md:text-base max-w-3xl">
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

// Developed a NextJs E-commerce web app using NextJs, Tyspescript, TailwindCss, Redux and Redux toolkit for the state management, and integrated stripeJs as a payment platform.
// All products were fetched from Sanity CMS , that serves as a backend for the project
// it allows user to add to cart, checkout and use the stripeJs test-mode payment option
// Its been deployed on Vercel
// mike-shop.vercel.app