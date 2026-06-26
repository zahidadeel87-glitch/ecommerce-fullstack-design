import { useEffect, useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = () => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async () => {
    if (!name || !price) return;

    await fetch("http://localhost:5000/products", {
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
    });

    setName("");
    setPrice("");

    fetchProducts();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });

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

      <button onClick={handleAdd}>
        Add Product
      </button>

      <hr />

      {products.map((p) => (
        <div key={p._id}>
          <h3>{p.name}</h3>

          <p>Rs. {p.price}</p>

          <button onClick={() => handleDelete(p._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}