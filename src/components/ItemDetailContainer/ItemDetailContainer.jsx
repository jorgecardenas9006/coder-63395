import { useEffect, useState } from 'react'
import { getProductById } from '../../../data/products'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading.jsx'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        getProductById(id)
        .then((data) => {
            setProduct(data)
        })
        .catch((error) => {
            console.error('Error:', error)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [id])

  return (
    <div>
        {
            loading === true ? ( 
                <Loading />) : ( < ItemDetail product={product} /> )
        }
    </div>
  )
}

export default ItemDetailContainer