import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const AddProduct = (product, quantity) => {
        const index = cart.findIndex((productCart) => productCart.id === product.id);
        if (index !== -1) {
            const newCart = [...cart];
            newCart[index].quantity += quantity;
            setCart(newCart);
            return;
        }
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

    const TotalPriceForProduct = (product) => {
        return product.precio * product.quantity;
    };

    const TotalPrice = () => {
        const totalPrice = cart.reduce((acc, productCart) => acc + productCart.precio * productCart.quantity, 0);
        return totalPrice;
    };


    return (
        <CartContext.Provider value={{ cart, AddProduct, RemoveProduct, ClearCart, TotalItems, TotalPrice, TotalPriceForProduct, ClearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };