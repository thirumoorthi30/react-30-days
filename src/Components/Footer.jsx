import React, { useContext } from "react";
import { userContext } from "../App";

function Footer() {

  let {user} =useContext(userContext);
  return (
    <footer className="bg-gray-800 text-white py-3 text-center">
      <h3 className="text-sm font-semibold">© 2025 All Rights Reserved - {user.name}</h3>
      {/* <userContext.Consumer>
        {
          ({user}) => {
              return (
                <h3 className="text-sm font-semibold text-white py-3 text-center">{user.name}</h3>
              )
          }
        }
         </userContext.Consumer> */}
    </footer>
  );
}

export default Footer;
