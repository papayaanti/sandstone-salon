import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import services from "./data/services.json";
import HeroCard from "./components/HeroCard.jsx";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section>
        <div id="hero-img">
          <div className="spacer"></div>
          <div className="text">
            <h1 className="poppins-semibold">Hair service</h1>
            <h1 className="poppins-semibold">
              catered to <span className="poppins-extrabold">you.</span>
            </h1>
            <p className="mt-0">
              Feel confident in your hair with our professional stylists and
              quality products.
            </p>
            <button className="mt-8" onClick={() => navigate("/book")}>
              <p className="poppins-medium">Book a service</p>
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
        </div>
        {services.map((service, index) => (
          <HeroCard key={index} service={service} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
