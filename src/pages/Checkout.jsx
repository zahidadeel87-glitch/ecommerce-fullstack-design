import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const handleOrder = () => {
    alert("Thanks! Your order has been placed successfully.");
    clearCart();
    navigate("/success");
  };

  return (
    <div>
      <h1>Checkout Page</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>
            {item.qty} × {item.price}
          </p>
        </div>
      ))}

      <h2>Total: Rs. {total}</h2>

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}