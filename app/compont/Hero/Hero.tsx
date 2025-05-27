/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import TextEffect from "./TextEffect"
import Particle from "./Partiacls"

import styles from "./hero.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import DownloadIcon from '@mui/icons-material/Download';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
// import AOS from 'aos';
import "aos/dist/aos.css"
import { FacebookOutlined, GitHub, LinkedIn } from '@mui/icons-material'
import { handleDownload } from '../until/globalFunction'


export default function Hero() {




  return (
    <div className={`relative h-[95] md:h-[80vh] bg-cover ${styles.bgImage} w-full relative pb-20`} id='hero'>
      <div className='relative  '>
        <Particle />
      </div>
      <div className='w-10/12 mx-auto mt-[80px] pt-12  text-white flex justify-between items-center h-full gap-2 flex-col-reverse md:flex-row' >
        <div className='basis-7/12' data-aos="zoom-out">
          <h1 className='text-4xl font-semibold '>HI,I'M <span className='text-yellow-400'>MOHAMED</span></h1>
          <div className='text-[#55e6a5] mb-3 text-xl mt-2'>
            <TextEffect/>
          </div>
          <p className='text-slate-600 text-lg '>
            I graduated from the Faculty of Science, majoring in Statistics and Computer Science, with practical experience 
            in front-end development gained through academic projects and self-learning.
            In addition to my front-end expertise, I have a solid background. 
          </p>
          <div className="mt-11 flex ">
            <Link href={'/'} className='py-2 px-5 mr-4 bg-[#55ae6a] transition-all duration-300 hover:bg-[#55e6a5]  ' onClick={()=>handleDownload()}>DOWNLOAD CV <DownloadIcon/></Link>
            <Link href={'/'} className='items-center' > <SlowMotionVideoIcon className='text-4xl mr-1  bg-[#55e6a5] rounded-full '/>Watch the vedio</Link>
          </div>
          <div className='mt-7'>
            <a href="https://www.linkedin.com/in/mohamed-salah-hanafi/"  target='_blank'><LinkedIn className='text-5xl text-yellow-400 font-semibold hover:scale-110 hover:text-[#55e6a5] transition-all duration-500 mx-2'/></a>
            <a href="https://github.com/mohamedsalah01176 "  target='_blank'><GitHub className='text-5xl text-yellow-400 font-semibold hover:scale-110 hover:text-[#55e6a5] transition-all duration-500'/></a>
          </div>
        </div>
        <div className=' w-[70%] sm:w-[60%]   lg:w-[40%] xl:w-[35%] flex justify-center  ' data-aos="zoom-in-down">
          <Image src={"/personal/Personal_Image2.jpg"} alt='about' width={300} height={300} className={`rounded-full  w-full  md:w-full ${styles.image}`}/>
        </div>

      </div>
    </div>
  )
}
