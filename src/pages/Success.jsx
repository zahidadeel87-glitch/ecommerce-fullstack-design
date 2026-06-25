import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Order Placed Successfully!</h1>

      <p>Thank you for shopping with us.</p>

      <Link to="/products">
        <button>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}