import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }){
    const [cart, setCart] = useState([])

    function addToCart(product, quantity = 1){
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.productId === product.ProductId);

            if (existingItem) {
                // if already in cart, increase quantity by 1
                return prevCart.map((item) => 
                    item.productId === product.ProductId ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            //if no items of that in cart, add as a new entry
            return [
                ...prevCart,
                {
                    productId: product.ProductId,
                    name: product.Name,
                    header: product.Header,
                    price: product.Price,
                    imageUrl: product.ImageUrl2,
                    quantity,
                }
            ]
        })
    }

    function removeFromCart(productId) {
        setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
    }

    //sets a specific products quantity to a number
    function updateQuantity(productId, quantity) {
        //if user sets quantity to 0, remove from array
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.productId === productId ? { ...item, quantity } : item
            )
        );
    }

    function clearCart() {
        setCart([]);
    }

    //cost total of everything in cart
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}