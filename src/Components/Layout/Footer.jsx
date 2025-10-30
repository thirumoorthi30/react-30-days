import React, { useContext } from "react";
// import { userContext } from "../../App";

function Footer() {
  // let {user} =useContext(userContext);
  return (
    <footer className="py-3 text-center bg-[var(--bg)] text-[var(--text)] border-t border-gray-300 dark:border-gray-700">
      <h3 className="text-sm font-semibold">© 2025 All Rights Reserved</h3>
    </footer>
  );
}

export default Footer;
