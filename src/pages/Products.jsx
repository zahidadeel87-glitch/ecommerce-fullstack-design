import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://ecommerce-backend1-tyx0.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid gray",
        }}
      />

      {products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            (p.category &&
              p.category.toLowerCase().includes(search.toLowerCase()))
        )
        .map((p) => (
          <motion.div
            key={p._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              margin: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              backgroundColor: "white",
            }}
          >
            <h3>{p.name}</h3>

            <p>Price: Rs. {p.price}</p>

            <p>{p.description}</p>

            <button
              onClick={() => addToCart(p)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
    </div>
  );
}