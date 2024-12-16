import { useEffect, useState } from 'react'
import { getProductById } from '../../../data/products'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductById('Z1A2B3')
        .then((data) => {
            setProduct(data)
        })
        .catch((error) => {
            console.error('Error:', error)
        })
        .finally(() => {
            console.log('Producto cargado')
        })
    }
    , [])
    console.log(product)
  return (
    <div>
        < ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer