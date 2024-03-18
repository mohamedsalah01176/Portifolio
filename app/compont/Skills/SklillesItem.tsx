
import React from 'react'


interface prop{
    title:string,
    level:string
}

export default function SklillesItem({title,level}:prop) {
    
  return (
    <div className='bg-gray-800 p-5 relative' >
        <h1 className='text-lg font-semibold'>{title}</h1>
        <div className={`  absolute bottom-0 left-0 h-1 bg-[#55e6a5] px-[${level}%]`} style={{width:level}}></div>
        <div className='absolute top-4 right-2 rounded-full p-2 bg-yellow-500'>{level}</div>
    </div>
  )
}
