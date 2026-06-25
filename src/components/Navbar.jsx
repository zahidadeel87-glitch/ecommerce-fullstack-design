import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <div
      style={{
        background: "#333",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/products" style={{ color: "white" }}>
          Products
        </Link>

        <Link to="/cart" style={{ color: "white" }}>
          Cart ({cart.length})
        </Link>

        <Link to="/checkout" style={{ color: "white" }}>
          Checkout
        </Link>
      </div>

      <div>
        {user ? (
          <>
            <span style={{ marginRight: "10px" }}>
              {user.email}
            </span>

            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: "white" }}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}