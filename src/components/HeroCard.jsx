import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroCard.css";
import { Link } from "react-router-dom";

function HeroCard({ service }) {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className={`hero-sml ${service.name}`}>
      <div className="text-sml">
        <div className="text-left">
          <h2 className="poppins-semibold">{service.name}</h2>
          <p>{service.description}</p>
        </div>
        <button className="mt-8" onClick={() => navigate(service.link)}>
          <p className="poppins-medium">Learn more</p>
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
  );
}

export default HeroCard;
