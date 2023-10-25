import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 text-lg bg-coral-red text-white rounded-full  px-7 py-4'>
       {label}
       <img src={iconURL} className='ml-2 rounded-full w-5 h-5' alt="" />
    </button>
  )
}

export default Button