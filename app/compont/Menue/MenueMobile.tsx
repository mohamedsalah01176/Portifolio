import {Link} from 'react-scroll'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Menue.module.scss"

interface prop{
    close:()=>void,
    open:boolean
}

export default function MenueMobile({close,open}:prop) {
  const closeBTN=()=>{
    setTimeout(()=>{
      close()
    },700)
  }
  return (
        <div className={`bg-[#09101a] w-full h-[100vh] flex flex-col fixed justify-center items-center gap-6  top-0 left-0 right-0 bottom-0 transform z-50   md:hidden`}>
        <CloseIcon className='absolute top-7 right-5 text-white z-10 text-3xl cursor-pointer' onClick={()=>close()}/>
            <Link to={"hero"} onClick={closeBTN} smooth={true}  offset={-70}  className={`${styles.linkNav}`}>Home</Link>
            <Link to={"about"} onClick={closeBTN} smooth={true}  offset={-70}  className={`${styles.linkNav}`}>About</Link>
            <Link to={"projects"} onClick={closeBTN} smooth={true}  offset={-250}  className={`${styles.linkNav}`}>Projects</Link>
            <Link to={"contact"} onClick={closeBTN} smooth={true}  offset={-70} className={`${styles.linkNav}`}>Contacts</Link>
        </div>
    
  )
}
