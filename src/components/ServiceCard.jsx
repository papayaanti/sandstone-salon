import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";
import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <h2>{service.name}</h2>
      <p className="poppins-light-italic mb-50">{service.subtitle}</p>

      {service.items.map((item, i) => (
        <div className="price-row" key={i}>
          <div className="price-top">
            <p className="price poppins-semibold">{item.name}</p>
            <div className="divider"></div>
            <p className="price poppins-semibold">{item.price}</p>
          </div>
          <p className="item-subtitle">{item.subtitle}</p>
        </div>
      ))}

      <p className="price poppins-semibold mt-50">Kids and Student Discount</p>
      <p className="item-subtitle">
        Kids get 40% off all services, and students get 30% off.
      </p>

      <button className="mt-16" onClick={() => navigate(service.link)}>
        <p className="poppins-medium">{service.button}</p>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  );
}

export default ServiceCard;
