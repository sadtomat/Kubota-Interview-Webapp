import "./AddCartButton.css";
import { useCart } from "../context/CartContext.jsx";

export default function AddCartButton({item, quantity}) {
    const { addToCart } = useCart();

    const handleClick = () => {
        alert(`Added ${item.Name} to cart`);
        addToCart(item, quantity);
    } 

    return (
        <div>
            <button className="addcartbutton-button" onClick={handleClick}>Add to Cart</button>
        </div>
    )
}