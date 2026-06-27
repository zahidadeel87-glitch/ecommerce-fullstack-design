import { useEffect, useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = () => {
    fetch("https://ecommerce-backend1-tyx0.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async () => {
    if (!name || !price) return;

    await fetch(
      "https://ecommerce-backend1-tyx0.onrender.com/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price: Number(price),
          description: "",
          category: "",
          stock: 10,
        }),
      }
    );

    setName("");
    setPrice("");

    fetchProducts();
  };

  const handleDelete = async (id) => {
    await fetch(
      `https://ecommerce-backend1-tyx0.onrender.com/products/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchProducts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={handleAdd}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Add Product
      </button>

      <hr />

      {products.map((p) => (
        <div
          key={p._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{p.name}</h3>

          <p>Rs. {p.price}</p>

          <button
            onClick={() => handleDelete(p._id)}
            style={{
              padding: "8px 15px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}