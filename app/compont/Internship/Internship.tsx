"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ConIternship from './ConIternship';
import DataInter from './DataIntenship';
import "aos/dist/aos.css"



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}
export default function Internship() {
  return (
    <div className='bg-[#11101e] py-10 text-white '>
        <h1 className='text-5xl text-yellow-500 font-semibold text-center' data-aos="fade-up">Internships</h1>
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            showDots={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            itemClass='item'
            responsive={responsive}
            dotListClass="custom-dot-list-style"
            
            >
                {DataInter.map((item,index)=>{
                    return(
                        <div key={index} data-aos="zoom-in" >
                            <ConIternship web={item.web} image={item.image} title={item.title} rate={item.rate} decription={item.decription} />
                        </div>
                    )
                })}
            </Carousel>

    </div>
  )
}
