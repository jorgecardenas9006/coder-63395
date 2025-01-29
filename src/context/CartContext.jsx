import { use } from 'react';
import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cartStorage = JSON.parse(localStorage.getItem('cart-ecommerce')) || [];
    const [cart, setCart] = useState(
        cartStorage ? cartStorage : []
    );
    useEffect(() => {
        localStorage.setItem('cart-ecommerce', JSON.stringify(cart));
        return () => {
            localStorage.setItem('cart-ecommerce', JSON.stringify(cart));
        }
    }, [cart]);

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

    const SumarProduct = (product) => {
        const newCart = [...cart];
        const index = newCart.findIndex((productCart) => productCart.id === product.id);
        if(product.stock === newCart[index].quantity){
            return;
        }
        newCart[index].quantity += 1;
        setCart(newCart);
    };

    const RestarProduct = (product) => {
        const newCart = [...cart];
        const index = newCart.findIndex((productCart) => productCart.id === product.id);
        newCart[index].quantity -= 1;
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, AddProduct, RemoveProduct, ClearCart, TotalItems, TotalPrice, TotalPriceForProduct, SumarProduct, RestarProduct}}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };