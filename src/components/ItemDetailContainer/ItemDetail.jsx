
const ItemDetail = ({ product }) => {
    console.log(product)
  return (
    // card horizontal con toda la info del producto
    <div key={product.id} className="flex max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/3 bg-cover bg-center">
            <img src={product.img} alt={product.nombre} width={"100%"} height={"100%"}/>
        </div>
        <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">{product.nombre}</h1>
            <p className="mt-2 text-gray-600 text-sm">{product.descripcion}</p>
            <div className="flex item-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">{product.precio}</h1>
                <h1></h1>
            </div>
            <div>
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Comprar</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail