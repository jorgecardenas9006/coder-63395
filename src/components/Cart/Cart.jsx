import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, TotalPrice, TotalPriceForProduct, RemoveProduct, ClearCart, SumarProduct, RestarProduct } = useContext(CartContext)
    if (cart.length === 0) {
        return (
            <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Carrito</h1>
                <p className="text-xl font-semibold text-gray-800 mt-4">
                    No hay productos en el carrito
                </p>
                <div className="mt-4">
                    <Link to="/" className="mt-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Volver a la tienda</Link>
                </div>
            </div>
        )
    }
  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Carrito</h1>
        <ul className="space-y-4">
            {cart.map((product) => (
            <li
                key={product.id}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-gray-200"
            >
                <div>
                <h2 className="text-lg font-semibold text-gray-700">
                    {product.nombre}
                </h2>
                <p className="text-gray-600">Cantidad: {product.quantity}</p>
                </div>
                <div>
                    <p className="text-gray-700 font-semibold">
                        precio: 
                        ${TotalPriceForProduct(product)}
                    </p>
                </div>
                <div className='flex space-x-2'>
                    <button onClick={ () => SumarProduct(product) } className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500" aria-label={`Sumar ${product.nombre}`}>
                        <i className="fas fa-plus"></i> {/* Ícono de suma */}
                    </button>
                    <div className=" mt-2 flex items-center justify-center h-full align-middle">
                        {
                            product.quantity <= 0 ? (
                                RemoveProduct(product.id)
                            ) : (
                                <p className="text-center">{product.quantity}</p>
                            )
                        }
                    </div>
                    <button onClick={ () => RestarProduct(product) } className="w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500" aria-label={`Restar ${product.nombre}`}>
                        <i className="fas fa-minus"></i> {/* Ícono de resta */}
                    </button>
                </div>
                <button
                onClick={() => RemoveProduct(product.id)}
                className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label={`Eliminar ${product.nombre}`}
                >
                <i className="fas fa-trash-alt"></i> {/* Ícono de basura */}
                </button>
            </li>
            ))}
        </ul>
        <p className="text-xl font-semibold text-gray-800 mt-4">
            Total: ${TotalPrice()}
        </p>
        <button onClick={ () => ClearCart() } type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Borrar carrito</button>
    </div>
  )
}

export default Cart