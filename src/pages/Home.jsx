import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Ecommerce Store</h1>

      <p>Buy the best products at affordable prices.</p>

      <Link to="/products">
        <button style={{
          padding: "10px 20px",
          fontSize: "16px"
        }}>
          Shop Now
        </button>
      </Link>
    </div>
  );
}