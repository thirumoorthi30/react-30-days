import { Link, useLocation } from "react-router-dom";

let user = "Thiru";

const navigation = [
  { title: "Home", path: "/" },
  // { title: "Profile Card", path: "/profile-card" },
  // { title: "Counter App", path: "/counter-app" },
  // { title: `Practice App (${user})`, path: `/practice-app/${user}` },
  // { title: "Todo List", path: "/todo-list" },
  // { title: "Product", path: "/product" },
  // { title: "Digital Clock", path: "/digital-clock" },
  // { title: "Joke App", path: "/joke-app" },
];

export default function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-violet-800/90 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-white font-bold text-xl sm:text-2xl">
            React-30Days
          </div>

          <div className="flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200
                  ${isActive(item.path)
                    ? "bg-yellow-700 text-white"
                    : "text-gray-300 hover:bg-yellow-700 hover:text-white"
                  }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
