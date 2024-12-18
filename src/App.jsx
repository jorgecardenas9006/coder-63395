import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
