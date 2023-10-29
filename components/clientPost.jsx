"use client"
import Image from 'next/image';
import React from 'react';

const Cpost = ({ item }) => {
    const parts =item && item.image.split("/"); // Split by forward slash
    const filenameWithBackslash =parts&& parts[parts.length - 1]; // Get the last part, which includes the backslash
    
    // To remove the backslash, you can split it by backslash and get the last part:
    const filenameParts =item &&  filenameWithBackslash.split("\\");
    const img =item &&  filenameParts[filenameParts.length - 1];
  return (
    <div>
      {item && <div className='py-8'>
      <h1 className='flex font-semibold pb-3  items-center justify-around '><p className='w-[20%]'>{item.name}</p> <span className='text-blue-500'>(</span> <p className='text-sm text-center'>{item.brief}</p> <span className='text-blue-500'>)</span></h1>
        <div className="img-wrapper py-8 flex justify-center">
          <Image
            fetchPriority='low'
            width={400}
            height={200}
            src={`/${img}`}
            alt={item.title}
          />
        </div>
        <p>{item.description}</p>
      </div>}
    </div>
  );
};

export default Cpost;