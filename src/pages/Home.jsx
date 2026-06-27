import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          color: "#333",
        }}
      >
        Welcome to Ecommerce Store
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "gray",
          marginBottom: "30px",
        }}
      >
        Buy the best products at affordable prices.
      </p>

      <Link to="/products">
        <button
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
}