import './CartObject.css';
import { useCart } from "../context/CartContext.jsx";

export default function CartObject({info}) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="cartobject-outerbox">
            <div className="cartobject-imgbox">
                <img src={info.imageUrl} alt="" className="cartobject-img"></img>
                <div className="cartobject-leftside">
                    <h1 className="cartobject-title">{info.name}</h1>
                    <h1 className="cartobject-header">{info.header}</h1>
                    <input className="cartobject-counter" type="number" value={info.quantity} onChange={(e) => updateQuantity(info.productId, Number(e.target.value))}/>
                </div>
            </div>
            <div className="cartobject-rightside">
                <h1 className="cartobject-price">${info.price}</h1> 
                <h1 className="cartobject-quantity">Quantity: {info.quantity}</h1>
                <button className="cartobject-remove" onClick={() => removeFromCart(info.productId)}>Remove</button>
            </div>
        </div>
    )
}