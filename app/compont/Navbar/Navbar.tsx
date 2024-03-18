"use client"

import React, { useState } from 'react'
import styles from "./navbar.module.scss"
import MenuIcon from '@mui/icons-material/Menu'; 
import MenueMobile from '../Menue/MenueMobile';
import {Link} from 'react-scroll';

export default function Navbar() {
  const [open,setOpen]=useState(false)
  const close=()=>setOpen(false);
  return (
    <div className='bg-[#09101a]  text-white p-6  shadow-lg z-[1000] fixed top-0 w-full backdrop-blur-md '>
        <div className="container mx-auto flex flex-row justify-between items-center ">
            <Link to={"/"} className="text-4xl text-yellow-500 hover:text-yellow-300 hover:scale-125 transition-all duration-300 cursor-pointer">MS</Link>
            <div className="  justify-between gap-6 items-center hidden md:flex">
                <Link  to={"hero"} smooth={true}  offset={-70}  className={`${styles.linkNav} cursor-pointer`}>Home</Link>
                <Link to={"about"} smooth={true} offset={-70}  className={`${styles.linkNav} cursor-pointer`}>About</Link>
                <Link to={"projects"} smooth={true}  offset={-250}  className={`${styles.linkNav} cursor-pointer`}>Projects</Link> 
                <Link to={"contact"} smooth={true}  offset={-70}  className={`${styles.linkNav} cursor-pointer`}>Contacts</Link>
            </div>
            <MenuIcon className={`md:hidden text-4xl cursor-pointer transition-all duration-300 `} onClick={()=>setOpen(!open)}/>

        </div> 
        <div className={`transition-all duration-1000 transform  ${open?"translate-x-0":"translate-x-[-100%]"} `}>
            {open && <MenueMobile close={close} open={open}/>}
        </div>
    </div>
  )
}
