import React from "react";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
function HeaderAuth() {
  return (
    <div className=" lg:mx-12 mx-6 mt-6 " dir="ltr">
      <Link to={"/"}>
        <img src={logo} className=" w-[200px]" />
      </Link>
    </div>
  );
}

export default HeaderAuth;
