import React from 'react'
import MapIcon from '@mui/icons-material/Map';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import "aos/dist/aos.css"

export default function Footer() {
  return (
    <div className='bg-[#000]  text-white pt-20 pb-10' >
        <div className='w-[80%] mx-auto flex justify-between items-center gap-7 flex-row flex-wrap' data-aos="zoom-in-down" id="contact">
            <div className=' flex flex-row gap-3 items-center'>
                <div className='p-3 bg-[#55e6a5] rounded-full'>
                    <MapIcon className='text-black text-6xl '/>
                </div>
                <div>
                    <h1 className='font-semibold text-xl'>Address</h1>
                    <p className='text-lg font-normal text-slate-600'>Egypt, Giza</p>
                </div>
            </div>
            <div className=' flex flex-row gap-3 items-center'>
                <div className='p-3 bg-[#55e6a5] rounded-full'>
                    <DeveloperModeIcon className='text-black text-6xl '/>
                </div>
                <div>
                    <h1 className='font-semibold text-xl'>Phone</h1>
                    <p className='text-lg font-normal text-slate-600'>+201155953141</p>
                    <p className='text-lg font-normal text-slate-600'>+201069165316</p>
                </div>
            </div>
            <div className=' flex flex-row gap-3 items-center'>
                <div className='p-3 bg-[#55e6a5] rounded-full'>
                    <LocalPostOfficeIcon className='text-black text-6xl '/>
                </div>
                <div>
                    <h1 className='font-semibold text-xl'>Send Me Email</h1>
                    <p className='text-lg font-normal text-slate-600'>mohammedsalah182002@gmail.com</p>
                </div>
            </div>
        </div>
        <p className='text-xl text-gray-500 text-center mt-12 border-t-2 pt-10'>Copyright <span className='text-3xl'>&copy;</span> 2024; Designed by <span className='text-yellow-500'>MOHAMED SALAH</span></p>
    </div>
  )
}
