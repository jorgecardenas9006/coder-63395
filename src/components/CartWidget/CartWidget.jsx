import React from 'react'
import { FcShop } from "react-icons/fc";

const CartWidget = () => {
  return (
    <div className='flex m-4'>
      <FcShop className="text-white text-4xl" />
      <div className='w-8 h-8 bg-transparent border-4 border-red-200 rounded-full flex items-center justify-center'>
        <p className='text-red-200'>1</p>
      </div>
    </div>
  )
}

export default CartWidget