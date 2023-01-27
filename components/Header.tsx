import { motion } from "framer-motion";

import React from "react";
import { SocialIcon } from "react-social-icons";



type Props = {};

function Header({}: Props) {
 return (
  <header className="flex items-center justify-between px-5 sticky top-0 left-0 max-w-6xl mx-auto z-20 py-2">
   <motion.div 
   className=""
   initial={{
    x:-500,
    opacity: 0,
    scale: 0.5
    }}
    
    animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    
    transition={{duration:1.5}}
    >


    
    <SocialIcon
     network="github"
     bgColor="transparent"
     fgColor="grey"
     style={{width:'50px', margin: '0', padding: '0'}}
     className='cursor-pointer'
    />

    <SocialIcon
     network="twitter"
     bgColor="transparent"
     fgColor="grey"
     style={{width:'40px', margin: '0', padding: '0'}}
     className='cursor-pointer'
    />

    <SocialIcon
     network="facebook"
     bgColor="transparent"
     fgColor="grey"
     style={{width:'40px', margin: '0', padding: '0'}}
     className='cursor-pointer'
    />

    <SocialIcon
     network="linkedin"
     bgColor="transparent"
     fgColor="grey"
     style={{width:'40px', margin: '0', padding: '0'}}
     className='cursor-pointer'
    />
   </motion.div>

   <motion.div 
    initial={{
        x:500,
        opacity: 0,
        scale: 0.5
        }}
        
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        
        transition={{duration:1.5}}
   >
    <SocialIcon
     network="email"
     bgColor="transparent"
     fgColor="grey"
     className='cursor-pointer'
    />
    <p className="hidden md:inline text-sm text-gray-400">
     Get In Touch
    </p>
   </motion.div>
  </header>
 );
}

export default Header;
