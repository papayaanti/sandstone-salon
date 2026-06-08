import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./Header.jsx";

import Footer from "./Footer.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import services from "./data/servicedetails.json";

function Colour() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section>
        <div className="services-page">
          <ServiceCard service={services[2]} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Colour;
