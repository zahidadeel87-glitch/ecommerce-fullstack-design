import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    // Admin credentials
    if (
      email !== "admin@gmail.com" ||
      password !== "123456"
    ) {
      alert("Invalid email or password.");
      return;
    }

    login(email, password);

    navigate("/");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <h1>Admin Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            margin: "10px",
          }}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            margin: "10px",
          }}
        />

        <br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      <p style={{ marginTop: "20px", color: "gray" }}>
        Demo Admin Login:
        <br />
        admin@gmail.com
        <br />
        Password: 123456
      </p>
    </div>
  );
}