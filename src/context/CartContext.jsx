import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const AddProduct = (product, quantity) => {
        const newProduct = { ...product, quantity };
        setCart([...cart, newProduct]);
    };

    const RemoveProduct = (productId) => {
        const newCart = cart.filter((product) => product.id !== productId);
        setCart(newCart);
    };

    const ClearCart = () => {
        setCart([]);
    };

    const TotalItems = () => {
        const totalItems = cart.reduce((acc, productCart) => acc + productCart.quantity, 0);
        return totalItems;
    };

    return (
        <CartContext.Provider value={{ cart, AddProduct, RemoveProduct, ClearCart, TotalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };