import './ListCart.css';
import CartObject from "./CartObject.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function ListCart() {
    const { cart, updateQuantity, removeFromCart, total } = useCart();

    return (
        <div>
            <h1 className="listcart-title">Your Cart:</h1>
            {cart.map((item) => (
                <div key={item.productId}>
                    <CartObject info={item}/>
                    <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.productId, Number(e.target.value))}/>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.productId)}>Remove</button>
                </div>
            ))}
            <h1>Total: ${total.toFixed(2)}</h1>
        </div>
    )
}