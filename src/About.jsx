import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "./About.css";

import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section>
        <div className="about-card">
          <div className="front">
            <h2 className="poppins-semibold">
              About <span className="poppins-bold">Sandstone</span>
            </h2>
            <p>
              Sandstone salon is a hair clinic dedicated to providing clients
              with quality, professional hair services.
            </p>
            <p>
              You can find our team of industry professionals at{" "}
              <span className="poppins-semibold">14 Clover Drive,</span> where
              we accept walk-ins and bookings.
            </p>
            <button className="mt-8" onClick={() => navigate("/book")}>
              <p className="poppins-medium">Book with us</p>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#F0E7D5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>

          <div className="circle"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
