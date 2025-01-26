import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './components/Cart/Cart'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <BrowserRouter >
        <CartProvider >
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<ItemDetailContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<h1>404 Not found</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter >
    </>
  )
}

export default App
