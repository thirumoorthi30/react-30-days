import React, { Component } from "react";

class Footer extends Component {
  render() {
    console.log(this.props);

    return (
      <footer className="bg-gray-800 text-white py-3 text-center">
        <h3 className="text-sm font-semibold">© 2025 All Rights Reserved</h3>
      </footer>
    );
  }
}

export default Footer;
