import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignup } = useContext(userContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSignup(email, password);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Signup</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Signup
        </button>

        <p className="text-center text-gray-600 mt-4">
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
