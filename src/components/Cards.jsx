import React from 'react'
import madara from '../assets/images/png/madara.jpg'
import CommonHeading from './common/CommonHeading'
const Cards = () => {
  return (
      <>
          <div className='flex items-center justify-center '>
          <div className='border border-solid border-black rounded-xl w-full max-w-[450px] p-5 '>
              <img src={madara} alt="madra" className='w-full rounded-lg max-w-[400px]' />
              <h2 className='text-4xl font-semibold text-center pt-3'>Ghost of Uchhia Madara Uchhia</h2>
              <p className='text-2xl font-medium italic text-center pt-3'>Wake up to reality nothing ever goes as you plan in this curse world </p>

        </div>
        <CommonHeading heading="Accept" headingSpan="Accept"/>
        
              </div>
      </>
  )
}

export default Cards
