import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(userContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-center text-gray-600 mt-4">
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
