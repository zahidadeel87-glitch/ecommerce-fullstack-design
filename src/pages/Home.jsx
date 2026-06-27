import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Shop Now
        </motion.button>
      </Link>
    </motion.div>
  );
}