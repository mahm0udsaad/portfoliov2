"use client" 
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { projectImages } from "@/data/images";
import { motion } from "framer-motion";
export default function ProjectSlider () {

    return (
       <>
        <Carousel stopOnHover showThumbs={false} showIndicators={false} showStatus={false}>
            {projectImages.map((img , i )=>(
               <div key={i}>
                <motion.h1 
                initial={{y:30}}
                animate={{y:0}}
                style={{background:'#00337C'}} className="legend">{img.text}</motion.h1>
                <div  className="w-11/12 sm:w-5/6 mx-auto">
                <img className="rounded w-5/6" src={img.url} />
               </div>
               </div>
            ))}
        </Carousel>
       </>
    );
}