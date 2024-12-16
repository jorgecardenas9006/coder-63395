const ItemList = ({ products }) => {
  return (
    <div>
        {
        products.map((product) => {
            return (
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto mb-8"
                  key={product.id}
                  style={{ height: '540px' }}>
                  <img
                    className="w-full h-80 object-cover"
                    src={product.img}
                    alt={product.nombre}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.nombre}</div>
                    <p className="text-gray-700 text-base">{product.description}</p>
                    <p className="text-gray-700 text-base">${product.precio}</p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #{product.categoria}
                    </span>
                  </div>
                  <div className="flex justify-center content-end"> 
                    <button>
                      <a
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        href={`/productos/${product.id}`}
                      >
                        Ver más
                      </a>
                    </button>
                  </div>
                </div>
              );
              
        })
    }
    </div>
  )
}

export default ItemList