import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find(
        (i) => i._id === product._id
      );

      if (exists) {
        return prev.map((i) =>
          i._id === product._id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (_id) => {
    setCart((prev) =>
      prev.map((i) =>
        i._id === _id
          ? { ...i, qty: i.qty + 1 }
          : i
      )
    );
  };

  const decreaseQty = (_id) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i._id === _id
            ? { ...i, qty: i.qty - 1 }
            : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const removeFromCart = (_id) => {
    setCart((prev) =>
      prev.filter((i) => i._id !== _id)
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);