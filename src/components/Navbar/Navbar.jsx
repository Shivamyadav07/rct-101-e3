import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const {Auth}=useContext(AuthContext);
  const navigate=useNavigate();
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/" >Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=>navigate("/login")} >{Auth?"logout":"login"}</button>
    </div>
  );
};

export default Navbar;
