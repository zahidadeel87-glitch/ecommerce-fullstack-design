import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    total,
  } = useCart();

  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={item._id || index}
              style={{
                border: "1px solid #ddd",
                margin: "15px",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{item.name}</h3>

              <p>Price: Rs. {item.price}</p>

              <div>
                <button
                  onClick={() =>
                    decreaseQty(item._id || item.id)
                  }
                  style={{
                    padding: "8px 15px",
                    marginRight: "10px",
                  }}
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() =>
                    increaseQty(item._id || item.id)
                  }
                  style={{
                    padding: "8px 15px",
                    marginLeft: "10px",
                  }}
                >
                  +
                </button>
              </div>

              <p>
                Total: Rs. {item.qty * item.price}
              </p>

              <button
                onClick={() =>
                  removeFromCart(item._id || item.id)
                }
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h2>Grand Total: Rs. {total}</h2>

          <button
            onClick={() => navigate("/checkout")}
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Go to Checkout
          </button>
        </>
      )}
    </div>
  );
}