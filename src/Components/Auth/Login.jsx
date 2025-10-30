import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import { themeContext } from "../../App";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(userContext);
  const { theme } = useContext(themeContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    navigate("/home");
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`flex items-center justify-center min-h-screen 
      ${isDark ? "bg-gray-900" : "bg-blue-50"}`}
    >
      <form
        onSubmit={onSubmit}
        className={`p-8 rounded-xl shadow-md w-96 border
        ${isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black"}
      `}
      >
        <h2
          className={`text-2xl font-bold text-center mb-6 
          ${isDark ? "text-yellow-400" : "text-blue-600"}`}
        >
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className={`w-full p-3 border rounded-lg mb-4 focus:outline-none
          ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                   : "bg-white border-gray-300 text-black"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className={`w-full p-3 border rounded-lg mb-4 focus:outline-none
          ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                   : "bg-white border-gray-300 text-black"}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className={`w-full py-2 rounded-lg transition 
          ${isDark ? "bg-yellow-500 hover:bg-yellow-600 text-black" 
                   : "bg-blue-600 hover:bg-blue-700 text-white"}`}
        >
          Login
        </button>

        <p className="text-center mt-4">
          <Link
            to="/signup"
            className={`${isDark ? "text-yellow-400" : "text-blue-600"} font-medium hover:underline`}
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
