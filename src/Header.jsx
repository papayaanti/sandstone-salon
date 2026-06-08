import { useState } from "react";
import "./App.css";
import "./header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <header>
      <div className="left-side">
        <Link to="/" className="logo-link poppins-semibold">
          Sandstone Salon
        </Link>
      </div>
      <div className="right-side">
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/haircuts" className="nav-link">
          Haircuts
        </NavLink>
        <NavLink to="/colour" className="nav-link">
          Hair Colour
        </NavLink>
        <NavLink to="/treatments" className="nav-link">
          Hair Treatments
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact Us
        </NavLink>
        <NavLink to="/book" className="nav-link booking">
          Book Now
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
