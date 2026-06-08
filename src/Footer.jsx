import { useState } from "react";
import "./App.css";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <footer>
      <div className="left-side">
        <h3>Sandstone Salon</h3>
        <p className="sub-font">14 Clover Drive, Ottawa, ON K1X 0E8</p>
        <p className="mini-font">Tel. (431) - 073 - 8444</p>
        <p className="mini-font">Email: sandstonesalon@gmail.com</p>
      </div>
      <div className="right-side">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/haircuts" className="link">
          Haircuts
        </Link>
        <Link to="/colour" className="link">
          Hair Colour
        </Link>
        <Link to="/treatments" className="link">
          Hair Treatments
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
        <Link to="/book" className="link">
          Book Now
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
