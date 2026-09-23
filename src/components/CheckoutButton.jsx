import './CheckoutButton.css'
import { useCart } from "../context/CartContext.jsx"

export default function CheckoutButton() {
    const { cart, clearCart } = useCart();

    async function handleCheckout() {
        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cart: cart.map((item) => ({
                        productId: item.productId,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                    })),
                }),
            });

            const result = await response.json();

            if (response.ok) {
                clearCart();
                alert(`Order placed. Order Id: ${result.orderId}`);
            } else {
                alert("Checkout failed. Please try again.");
            }
        } catch (err) {
            console.error("Checkout error: ", err);
        }
    }

    return (
        <button className="checkoutbutton" onClick={handleCheckout}>Checkout</button>
    );
}