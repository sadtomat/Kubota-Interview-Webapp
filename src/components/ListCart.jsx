import './ListCart.css';
import CartObject from "./CartObject.jsx";
import CheckoutButton from "./CheckoutButton.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function ListCart() {
    const { cart, total } = useCart();

    return (
        <div className="listcart-scroll">
            <h1 className="listcart-title">Your Cart:</h1>
            {cart.map((item) => (
                <div key={item.productId}>
                    <CartObject info={item}/>
                </div>
            ))}
            <div className="listcart-checkoutbox">
                <h1 className="listcart-total">Total: ${total.toFixed(2)}</h1>
                <CheckoutButton/>
            </div>
        </div>
    )
}