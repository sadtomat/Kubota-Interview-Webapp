import "./AddCartButton.css";
import { useCart } from "../context/CartContext.jsx";

export default function AddCartButton({item, quantity}) {
    const { addToCart } = useCart();

    return (
        <div>
            <button className="addcartbutton-button" onClick={() => addToCart(item, quantity)}>Add to Cart</button>
        </div>
    )
}