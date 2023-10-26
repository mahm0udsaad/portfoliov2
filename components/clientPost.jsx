"use client"
import React from 'react';

const Cpost = ({ item }) => {
    const parts = item.image.split("/"); // Split by forward slash
    const filenameWithBackslash = parts[parts.length - 1]; // Get the last part, which includes the backslash
    
    // To remove the backslash, you can split it by backslash and get the last part:
    const filenameParts = filenameWithBackslash.split("\\");
    const img = filenameParts[filenameParts.length - 1];
  return (
    <div>
      <div>
      <h1 className='flex font-semibold pb-3  items-start justify-around '><p className='w-[20%]'>{item.name}</p> <span className='text-blue-500'>(</span> <p className='text-sm text-center'>{item.brief}</p> <span className='text-blue-500'>)</span></h1>
        <div className="img-wrapper flex justify-center">
          <img
            fetchPriority='low'
            width={200}
            height={200}
            src={img}
            alt={item.title}
          />
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Cpost;