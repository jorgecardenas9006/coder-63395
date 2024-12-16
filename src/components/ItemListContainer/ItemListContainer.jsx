import { useState, useEffect } from 'react'
import { getProducts } from '../../../data/products.js'
import { use } from 'react'
import ItemList from './ItemList.jsx'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProducts()
        .then((data) => {
                setProducts(data);
            })
        .catch((error) => {
                console.error('Error:', error);
            })
        .finally(() => {
                setLoading(false);
            });
    }
    , [])

  return (
    <div className="container mx-auto px-4 py-8 columns-3 align-middle my-4">    
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer