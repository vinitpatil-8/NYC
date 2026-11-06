import React from 'react'
import CalcButton from './calcButton'
import { useState } from 'react'

const calc = () => {
  const [expression, setExpression] = useState("Ready")
  const [result, setResult] = useState(0)

  // clear function
  const clear = () => {
    setExpression("")
    setResult(0)
  }

  const numbers = (number) => {
    setExpression(expression + number)
  }

  // result function
  // const result = () => {

  // }

  return (
    <div className='sm:w-[50vw] w-[100vw] sm:h-[80vh] h-[70vh] flex items-center justify-end'>
      {/* container */}
      <div className='bg-app-surface border-2 border-solid border-app-bg hover:shadow-2xl flex flex-col py-5 items-center gap-5 justify-center hover:mb-1 transition-all duration-200 rounded-3xl h-[95%] shadow-sm w-[85%] max-w-[420px]'>
        {/* screen */}
        <div className='w-[90%] h-[25%] bg-app-bg rounded-3xl p-5 flex flex-col justify-between overflow-hidden'>
          {/* Expression */}
          <div className="text-right text-lg text-app-text/60">
            {expression}
          </div>

          {/* Result */}
          <div className="text-right text-4xl font-bold font-fredoka text-app-text truncate">
            {result}
          </div>
        </div>
        {/* buttons */}
        <div className='w-[90%] h-[75%] flex flex-col justify-between'>
          {/* rows */}
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="C" clickFunc={clear} hoverBgColor="hover:bg-app-bg" textColor="text-brand" bgColor="bg-app-surface" />
            <CalcButton content="(" hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
            <CalcButton content=")" hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
            <CalcButton content="/" hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
          </div>
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="7" clickFunc={() => numbers(7)} border='border border-solid border-app-surface' />
            <CalcButton content="8" border='border border-solid border-app-surface' />
            <CalcButton content="9" border='border border-solid border-app-surface' />
            <CalcButton content="X" hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
          </div>
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="4" border='border border-solid border-app-surface' />
            <CalcButton content="5" border='border border-solid border-app-surface' />
            <CalcButton content="6" border='border border-solid border-app-surface' />
            <CalcButton content="-" hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
          </div>
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="1" border='border border-solid border-app-surface' />
            <CalcButton content="2" border='border border-solid border-app-surface' />
            <CalcButton content="3" border='border border-solid border-app-surface' />
            <CalcButton content="+" hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
          </div>
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="del" hoverBgColor="hover:bg-app-bg" textColor="text-brand" bgColor="bg-app-surface" />
            <CalcButton content="0" border='border border-solid border-app-surface' />
            <CalcButton content="." hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
            <CalcButton content="=" hoverBgColor="hover:bg-highlight" bgColor="bg-brand" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default calc