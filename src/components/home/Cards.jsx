import React from 'react'
import { CARD_DATA } from '../common/Helper'
const Cards = () => {
  return (
    <>
      <h2 className='text-center text-5xl text-rose-700'>MAP Use</h2>
      <div className='flex items-center justify-center gap-5'>
        {CARD_DATA.map((data, i) => (
          <div key={i}>
            <img className='max-w-[400px]' src={data.imgSrc} alt="madara" />
            <h1> {data.heading}</h1>
            <p> {data.para}</p>
          </div>
        ))}
         </div>
       
    
      </>
  )
}

export default Cards
