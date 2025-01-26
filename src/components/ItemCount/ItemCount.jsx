import { useState } from 'react'

const ItemCount = ({ stock, AddProductInCart }) => {
    const [count, setCount] = useState(0)
    const handleClickRemove = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleClickAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
  return (
    <div>
        <div className="flex items-center space-x-4 bg-gray-100 p-6">
            <button onClick={handleClickRemove} className="px-4 py-2 bg-red-500 text-white rounded">
                -
            </button>
            <p className="text-xl font-bold">{count}</p>
            <button onClick={handleClickAdd} className="px-4 py-2 bg-green-500 text-white rounded">
                +
            </button>
        </div>
        <button onClick={() => AddProductInCart(count)} className="mt-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
            Agregar al carrito
        </button>
    </div>
  )
}

export default ItemCount