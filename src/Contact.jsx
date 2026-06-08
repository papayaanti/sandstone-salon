import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "./contact.css";
import "./components/ServiceCard.css";
import { useNavigate } from "react-router-dom";



import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Contact() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section>
        <div class="contact-card">
          <h2 class="card-title">Contact Us</h2>
          <p className="poppins-light-italic mb-50">
            We will take up to 3 weeks to reply.
          </p>

          <form class="contact-form">
            <div class="form-group">
              <label for="firstName">
                <strong>First Name</strong>{" "}
                <span class="poppins-light-italic">(Required)</span>
              </label>
              <input type="text" id="firstName" name="firstName" required />
            </div>

            <div class="form-group">
              <label for="lastName">
                <strong>Last Name</strong>{" "}
                <span class="poppins-light-italic">(Required)</span>
              </label>
              <input type="text" id="lastName" name="lastName" required />
            </div>

            <div class="form-group">
              <label for="request">
                <strong>Request</strong>{" "}
                <span class="poppins-light-italic">(Required)</span>
              </label>
              <textarea
                id="request"
                name="request"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="center">
              <button
                class="mt-50"
                type="submit"
                onClick={() => {
                  alert("Your inquiry has been sent!");
                  navigate("/contact", { replace: true });
                }}
              >
                <p>Send inquiry</p>
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
