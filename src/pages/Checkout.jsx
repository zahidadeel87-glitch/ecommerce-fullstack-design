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
        style={{
  border: "1px solid #ddd",
  padding: "15px",
  margin: "15px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  transition: "0.3s"
}}
        Place Order
      </button>
    </div>
  );
}