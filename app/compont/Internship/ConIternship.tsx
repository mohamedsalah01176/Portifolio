import { Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'


interface props{
    title:string,
    rate:number,
    decription:string,
    image:string,
    web:string
}

export default function ConIternship({title,rate,decription,image,web}:props) {
  return (
    <div className='text-center my-16'>
        <Image src={image} alt='mmm' width={150} height={150} className='rounded-full mx-auto'/>
        <Rating className='text-3xl mt-3  ' name="half-rating-read" defaultValue={rate} precision={0.2} readOnly />
        <h1 className='text-xl font-normal mt-3 mb-1'>{title}</h1>
        <p className='text-slate-600 w-80 mx-auto  mb-10'>{decription}</p>
        <a href={web} target="_blank" className='py-2 px-5 bg-sky-500 rounded-lg hover:bg-sky-600 transition-all duration-300'> View Website</a>
    </div>
  )
}
