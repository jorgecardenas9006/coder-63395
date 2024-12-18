import { Link } from 'react-router-dom'
import Item from './Item';
const ItemList = ({ products }) => {
  return (
    <div>
        {
        products.map((product) => {
            return (
                <Item product={product} key={product.id} />
              );
              
        })
    }
    </div>
  )
}

export default ItemList