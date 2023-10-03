"use client" 

import {  React , useEffect, useRef, useState} from "react"
import { AnimatePresence , motion, useInView} from 'framer-motion';
import {RxExit} from 'react-icons/rx'
import { imageLinks } from "@/data/images";

const Note = ({ children, bg, text, mt , w , x, scale , hiddenContent}) => {
    const [isFull, setFull] = useState(false);
    const [isSmallScreen, setSmallScreen] = useState(false);
    const ref = useRef(null)
    const isInview = useInView(ref , {once:true})
    const handleResize = () => {
      if(window.innerWidth < 780 ){
        setSmallScreen(true);
      }
    };
    useEffect(() => {
      console.log(isSmallScreen);
      handleResize()
      window.addEventListener('load', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('load', handleResize);
      };
    }, []);

    const displayFull = () => {
      if(!isSmallScreen){
        return;
      }
      setFull(true);
    }
    const shrink = (e) => {
      e.stopPropagation(); // Stop event propagation to parent div
        if(!isSmallScreen){
          return ;
        }
         setFull(false);
      }
    
    return (
      <AnimatePresence>
        <motion.div
          ref={ref}
          onClick={displayFull}
          initial={{ scale: 1, x: 0 }}
          animate={{width: isFull ? w : "", scale: isInview ? (isFull ? scale : 1): 0, x: isFull ? x : 0 }}
          transition={{duration:.2}}
          className={`${isFull ? "z-20 text-sm" : "text-xl"} p-4 sm:p-8 ${bg} ${mt} rounded-lg relative ${text} w-full cursor-pointer`}
          >
            {isFull && <RxExit onClick={shrink} className="absolute top-3 right-3 z-30 text-2xl" />}
          {children}

          {!isSmallScreen ? 
          (
            isFull  && hiddenContent
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
         <div ref={ref} className="sm:block hidden sm:-translate-y-[15%] sm:-translate-x-[70%] rotate-[60deg]  images-container sm:w-[45%] sm:h-[300vh] overflow-hidden">
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