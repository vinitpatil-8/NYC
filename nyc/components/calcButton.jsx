import React from 'react'

const calcButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.clickFunc}
      className={`
        w-full h-full min-w-0 px-1
        inline-flex items-center justify-center
        text-lg sm:text-2xl
        font-semibold font-fredoka
        rounded-lg sm:rounded-xl
        shadow-md
        transition-all duration-200
        active:scale-95
        ${props.border || ''}
        ${props.textColor || 'text-black'}
        ${props.hoverBgColor || 'hover:bg-accent'}
        ${props.bgColor || 'bg-app-bg'}
      `}
    >
      {props.content}
    </button>
  )
}

export default calcButton