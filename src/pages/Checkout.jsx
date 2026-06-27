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
    <div style={{ padding: "20px" }}>
      <h1>Checkout Page</h1>

      {cart.map((item, index) => (
        <div
          key={item._id || index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{item.name}</h3>

          <p>
            {item.qty} × {item.price}
          </p>
        </div>
      ))}

      <h2>Total: Rs. {total}</h2>

      <button
        onClick={handleOrder}
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "15px 25px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}