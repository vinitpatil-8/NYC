import React from 'react'
import CalcButton from './calcButton'

const calc = () => {
  return (
    <div className='sm:w-[50vw] w-[100vw] sm:h-[70vh] h-[60vh] flex items-center justify-center'>
        {/* container */}
      <div className='bg-app-surface hover:shadow-2xl flex flex-col py-5 items-center gap-5 justify-center hover:mb-1 transition-all duration-200 rounded-3xl h-[95%] shadow-sm w-[85%] max-w-[420px]'>
        {/* screen */}
        <div className='w-[90%] h-[30%] bg-app-bg rounded-3xl'></div>
        {/* buttons */}
        <div className='w-[90%] h-[60%]'>
            <CalcButton content="C" />
        </div>
      </div>
    </div>
  )
}

export default calc