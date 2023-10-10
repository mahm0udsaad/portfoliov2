"use client" 

import {  React , useEffect, useRef, useState} from "react"
import { AnimatePresence , motion, useInView} from 'framer-motion';
import {RxExit} from 'react-icons/rx'
import { imageLinks } from "@/data/images";

const Note = ({ children, bg, text, mt , Y, x, scale , hiddenContent}) => {
    const [isFull, setFull] = useState(false);
    const [isSmallScreen, setSmallScreen] = useState(false);
    const ref = useRef(null)
    const isInview = useInView(ref , {once:true})
    const handleResize = () => {
    };
    useEffect(() => {
      if(window.innerWidth < 780 ){
        setSmallScreen(true);
      }
    }, []);

    const displayFull = () => {
      if(isSmallScreen){
        return;
      }
      setFull(true);
    }
    const shrink = (e) => {
      e.stopPropagation(); // Stop event propagation to parent div
        if(isSmallScreen){
          return ;
        }
         setFull(false);
      }
    
    return (
      <AnimatePresence>
        <motion.div
          ref={ref}
          onClick={displayFull}
          initial={{ scale: 1, x: 0 ,y:0}}
          animate={{y: isFull ? Y : 0, scale: isInview ? (isFull ? scale : 1): 0, x: isFull ? x : 0 }}
          transition={{duration:.2}}
          className={`${isFull ? "z-20 text-sm" : "text-xl"} p-4  ${bg} ${mt} rounded-lg relative ${text} w-full cursor-pointer`}
          >
            {isFull && <RxExit onClick={shrink} className="absolute top-3 right-3 z-30 text-2xl" />}
          {children}

          {!isSmallScreen ? 
          (
            isFull  ? hiddenContent : "..."
            )
          :
          (
            hiddenContent
          )}

        </motion.div>
      </AnimatePresence>
    );
  }
const ImgContainer = () =>{
const [y , setY] = useState(0)
const ref = useRef(null)
    useEffect(()=>{
        if(y > 2500){
            setY(0)
        }
        const intervalId = setInterval(() => {
            setY(prev => prev + 1)
            ref.current.scrollTop = y;
          }, 10);
          return () => clearInterval(intervalId);
    },[y])
    return(
        <>
         <div ref={ref} className="sm:absolute top-5 right-5 hidden sm:-translate-y-[15%] sm:-translate-x-[70%] rotate-[60deg]  images-container lg:w-[45%] lg:h-[300vh] xl:h-[250vh] xl:w-[35%] overflow-hidden">
         {imageLinks.map((img , i )=>(
            <div key={img[0]+imageLinks.length + i} className="flex w-11/12 py-8 justify-between">
                <img width={200} height={400} key={img[0]} src={img[0]} style={{boxShadow:'33px 1px 0px 0px #aabaff'}} className="border-wrap rounded-full  " alt="projects-image" />
                 {img[1] && <img width={200} height={400} key={img[1]} style={{boxShadow:'33px 1px 0px 0px #aabaff'}} className="border-wrap  rounded-full  pt-20" src={img[1]} alt="projects-image" />}
            </div>
         ))}
         </div>
        </>
    )
}
export  { Note , ImgContainer}