import { Link } from "react-router-dom";
// import useFetch from "../Custom-Hook/useFetch";


let user = "Thiru";

const projects = [
  { day: "01", title: "Profile Card", path: "/profile-card" },
  { day: "02", title: "Counter App", path: "/counter-app" },
  { day: "03", title: "Practice App", path: `/practice-app/${user}` },
  { day: "04", title: "Todo List", path: "/todo-list" },
  { day: "05", title: "Product practice", path: "/product" },
  // { day: "05.01", title: "Add Product", path: "/new-product" },
  // { day: "05.02", title: "Update Product", path: "/update-product/:id" },
  { day: "06", title: "Digital Clock", path: "/digital-clock" },
  { day: "07", title: "Joke App", path: "/joke-app" },
  { day: "08", title: "Weather App", path: "/weather-app" },

];

export default function Home() {

  return (
    <div className="min-h-[75vh] bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        🚀 React 30-Day Challenge
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((p) => (
          <Link
            key={p.day}
            to={p.path}
            className="block p-6 bg-blue-100 hover:bg-red-100 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
          >
            <h2 className="text-xl font-semibold text-green-700">
              Day {p.day}
            </h2>
            <p className="text-gray-700 mt-2">{p.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
