import React from 'react'

const header = () => {
  return (
    <div className='md:h-40 sm:h-38 h-20 w-[100vw] flex items-center sm:px-5 px-2'>
      <div className='flex flex-col items-center md:h-28 sm:h-25 h-15 w-fit'>
        <p className='font-lucky flex items-center tracking-wide md:text-7xl sm:text-5xl text-4xl w-fit'>NYC</p>
        <p className='font-fredoka font-semibold flex items-end md:text-2xl sm:text-xl text-lg w-fit'>Not Your Calc</p>
      </div>
    </div>
  )
}

export default header
