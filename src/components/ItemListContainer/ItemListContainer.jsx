import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../../data/products.js'
import { getProductByCategory } from '../../../data/products.js'
import ItemList from './ItemList.jsx'
import Loading from '../Loading/Loading.jsx'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoria } = useParams(); 


    useEffect(() => {
        setLoading(true);
        if(categoria) {
            getProductByCategory(categoria)
            .then((data) => {
                    setProducts(data);
                })
            .catch((error) => {
                    console.error('Error:', error);
                })
            .finally(() => {
                    setLoading(false);
                });
        } else {
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
    }, [categoria]); // Este useEffect ahora escucha los cambios en "categoria"

  return (
    <div className="container mx-auto px-4 py-8 columns-3 align-middle my-4">
        {
            loading === true ? ( 
                <Loading />) : ( <ItemList products={products}/> )
        }  
    </div>
  )
}

export default ItemListContainer
