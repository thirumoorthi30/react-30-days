import React from "react";

function Header(props) {
  console.log(props); // will receive data from another component
  return (
    <header className="bg-green-600 text-white py-4 shadow-md">
      <h1 className="text-2xl font-bold text-center tracking-wide">
        PROJECTS
      </h1>
    </header>
  );
}

export default Header;
