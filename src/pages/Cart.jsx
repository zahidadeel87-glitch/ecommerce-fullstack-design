import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    total
  } = useCart();

  const navigate = useNavigate();

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                margin: "10px",
                padding: "10px"
              }}
            >
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>

              {/* Quantity Controls */}
              <div>
                <button onClick={() => decreaseQty(item.id)}>
                  style={{
  border: "1px solid #ddd",
  padding: "15px",
  margin: "15px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  transition: "0.3s"
}}
                  -
                </button>

                <span style={{ margin: "0 10px" }}>
                  {item.qty}
                </span>

                <button onClick={() => increaseQty(item.id)}>
                  +
                </button>
              </div>

              <p>Total: {item.qty * item.price}</p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h2>Grand Total: {total}</h2>

          {/* Checkout Button */}
          <button
            onClick={() => navigate("/checkout")}
            style={{ marginTop: "10px" }}
          >
            Go to Checkout
          </button>
        </>
      )}
    </div>
  );
}