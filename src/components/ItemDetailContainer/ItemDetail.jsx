const ItemDetail = ({ product }) => {
    console.log(product)
    return (
      <div key={product.id} className="my-5 flex max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          {/* Imagen */}
          <div className="w-1/3 bg-cover bg-center overflow-hidden">
              <img src={product.img} alt={product.nombre} className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"/>
          </div>
  
          {/* Detalles del producto */}
          <div className="w-2/3 p-6 flex flex-col justify-between">
              {/* Nombre del producto */}
              <h1 className="text-gray-900 font-bold text-3xl mb-2">{product.nombre}</h1>
  
              {/* Descripción */}
              <p className="mt-2 text-gray-600 text-sm">{product.descripcion}</p>
  
              {/* Edad recomendada */}
              <h2 className="mt-3 text-gray-800 font-medium">Edad Recomendada: <span className="text-gray-600">{product.edadRecomendada}</span></h2>
  
              {/* Precio y botón */}
              <div className="flex items-center justify-between mt-4">
                  <h1 className="text-gray-700 font-semibold text-2xl">{product.precio}</h1>
                  <button className="px-6 py-3 bg-indigo-600 text-white text-xs font-bold uppercase rounded-full shadow-lg transition duration-300 transform hover:bg-indigo-700 hover:scale-105 focus:outline-none">Comprar</button>
              </div>
          </div>
      </div>
    )
  }
  
  export default ItemDetail