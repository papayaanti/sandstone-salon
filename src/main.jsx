import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//FOR NAVIGATION LINKS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import About from "./About.jsx";
import Haircuts from "./Haircuts.jsx";
import Colour from "./Colour.jsx";
import Treatments from "./Treatments.jsx";
import Contact from "./Contact.jsx";
import Book from "./Book.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/haircuts" element={<Haircuts />} />
        <Route path="/colour" element={<Colour />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
