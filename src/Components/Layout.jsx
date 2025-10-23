
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
<div className="flex flex-col h-auto bg-gray-50">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;