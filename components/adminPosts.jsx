"use client"

import { useData } from "@/hooks/useData";
import { useEffect ,useState } from "react";
import { Post } from "./post";

const Posts = () =>{
const data = useData()
    return(
        <>
          {data && (
        <>
        <h1>Data is Loading</h1>
        {data.data.map((item) =>(
         <Post item={item} />
        ))}
        </>
      )}
        </>
    )
}
export default Posts