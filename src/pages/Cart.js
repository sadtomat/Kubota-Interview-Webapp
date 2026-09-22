import './Cart.css';
import ListCart from "../components/ListCart.jsx";
import ProfileDisplay from "../components/ProfileDisplay.jsx";

function Cart() {

    return (
        <div className="cart-outerbox">
            <div className="cart-listbox">
                <ListCart/>
            </div>
            <div className="cart-pfpbox">
                <ProfileDisplay/>
            </div>
        </div>
    )
}

export default Cart;