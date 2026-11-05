import React from 'react'

const calcButton = (props) => {
  return (
    <div className={`flex flex-col duration-200 justify-center h-14 text-center w-20 font-semibold transition-all rounded-xl text-2xl font-fredoka ${props.textColor || 'text-black'} ${props.hoverBgColor || 'hover:bg-accent'} ${props.bgColor || 'bg-app-bg'}`}>
      {props.content}
    </div>
  )
}


export default calcButton