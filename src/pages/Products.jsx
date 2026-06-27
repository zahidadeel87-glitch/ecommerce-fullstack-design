import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

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
        }}
      />

      {products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            (p.category &&
              p.category
                .toLowerCase()
                .includes(search.toLowerCase()))
        )
        .map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{p.name}</h3>

            <p>Price: Rs. {p.price}</p>

            <p>{p.description}</p>

            <button onClick={() => addToCart(p)}>
              style={{
  border: "1px solid #ddd",
  padding: "15px",
  margin: "15px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  transition: "0.3s"
}}
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
}