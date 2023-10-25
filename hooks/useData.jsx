"use client"

import { useEffect, useState } from "react";
import axios from "axios";

export const useData = () =>{
  const apiUrl = '/api/getitems';
    const [data , setData] = useState(null)
    useEffect(()=>{
        axios.get(apiUrl)
      .then(data => {
        setData(data); 
      })
      .catch(error => {
        console.error('Error:', error); 
      });
    },[])
    return data ;
}