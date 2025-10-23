import { Link } from "react-router-dom";

let user = "Thiru";

const navigation = [
  { title: "Home", path: "/" },
// { title: "Profile Card", path: "/profile-card" }, 
// { title: "Counter App", path: "/counter-app" }, 
// { title: "Practice App", path: /practice-app/${user} }, 
// { title: "Todo List", path: "/todo-list" }, 
// { title: "Product", path: "/product" }, 
// { title: "Digital Clock", path: "/digital-clock" }, 
// { title: "Joke App", path: "/joke-app" },
];

export default function NavBar() {
  return (
    <nav className="bg-violet-800/90 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center text-white font-bold text-xl">
            React-30Days
          </div>

          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`text-gray-300 hover:bg-yellow-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
