import React from 'react'

const calcButton = (props) => {
  return (
    <button onClick={props.clickFunc} className={`flex w-[5rem] flex-col duration-200 justify-center h-14 text-center font-semibold transition-all rounded-xl text-2xl shadow-lg font-fredoka ${props.border} ${props.textColor || 'text-black'} ${props.hoverBgColor || 'hover:bg-accent'} ${props.bgColor || 'bg-app-bg'}`}>
      {props.content}
    </button>
  )
}


export default calcButton