import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
        color: "white",
        padding: "18px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ margin: 0 }}>
        Ecommerce Store
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>

        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart ({cart.length})
        </Link>

        <Link to="/checkout" style={{ color: "white", textDecoration: "none" }}>
          Checkout
        </Link>

        {user && (
          <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
            Admin
          </Link>
        )}
      </div>

      <div>
        {user ? (
          <>
            <span style={{ marginRight: "15px" }}>
              {user.email}
            </span>

            <button
              onClick={logout}
              style={{
                padding: "8px 15px",
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}