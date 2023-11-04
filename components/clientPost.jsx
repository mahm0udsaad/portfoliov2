"use client"
import Image from 'next/image';
import React from 'react';

const Cpost = ({ item }) => {

  return (
    <div>
      {item && <div className='py-8'>
      <h1 className='flex font-semibold pb-3  items-center justify-around '><p className='w-[20%]'>{item.name}</p> <span className='text-blue-500'>(</span> <p className='text-sm text-center'>{item.brief}</p> <span className='text-blue-500'>)</span></h1>
        <div className="img-wrapper py-8 flex justify-center">
          <Image
            fetchPriority='low'
            width={400}
            height={200}
            src={item.Image}
            alt={item.title}
          />
        </div>
        <p>{item.description}</p>
      </div>}
    </div>
  );
};

export default Cpost;