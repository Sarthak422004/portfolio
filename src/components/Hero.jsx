import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

import { slideIn } from "../utils/motion";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
  <div
    className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-5 ${styles.paddingX} overflow-hidden` }
  >
    {/* Left Side and Text Content */}
    <div className='flex flex-col sm:flex-row items-center gap-5'>
      {/* Left Side (Hidden on mobile) */}
      <div className='flex flex-col justify-center items-center mt-5 sm:block hidden'>
        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        <div className='w-1 ml-2 sm:h-80 h-40 violet-gradient' />
      </div>

      {/* Text Content */}
      <div className='text-center sm:text-left'>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#915EFF]'>Sarthak</span>
        </h1>
        <p className={`${styles.heroSubText} mt-6 text-white-100`}>
          I develop 3D visuals, user <br className='sm:block hidden' />
          interfaces and web applications
        </p>
      </div>
    </div>

    {/* EarthCanvas (Visible on all views, but different layout for mobile) */}
    <div className='w-full flex justify-center mt-10'>
      <div className='w-full md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </div>
    </div>
  </div>
</section>

    // <section className={`relative w-full h-screen mx-auto`}>
    //   <div
    //     className={`absolute inset-0 top-[120px]   max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5 overflow-hidden`}
    //   >
    //     <div className='flex flex-col justify-center items-center mt-5'>
    //       <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
    //       <div className='w-1 sm:h-80 h-40 violet-gradient' />
    //     </div>

    //     <div className=''>
    //       <h1 className={`${styles.heroHeadText} text-white`}>
    //         Hi, I'm <span className='text-[#915EFF]'>Sarthak</span>
    //       </h1>
    //       <p className={`${styles.heroSubText} mt-6 text-white-100`}>
    //         I develop 3D visuals, user <br className='sm:block hidden' />
    //         interfaces and web applications
    //       </p>
    //     </div>
       
    //     <div
    //     className='xl:flex-1 bottom-10 md:h-[550px] h-[350px]'
    //   >
    //     <EarthCanvas />
    //   </div>

    //   </div>


      
    // </section>
  )
}

export default Hero