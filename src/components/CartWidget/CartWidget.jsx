import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FcShop } from "react-icons/fc";

const CartWidget = () => {
  const { TotalItems } = useContext(CartContext)
  return (
    <div className='flex m-4' onClick={() => console.log('Cart')}>
      <FcShop className="text-white text-4xl" />
      <div className='w-8 h-8 bg-transparent border-4 border-red-200 rounded-full flex items-center justify-center'>
        <p className='text-red-200'>{ TotalItems() }</p>
      </div>
    </div>
  )
}

export default CartWidget