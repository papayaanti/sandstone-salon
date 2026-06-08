import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "./contact.css";
import "./components/ServiceCard.css";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Book() {
  const [count, setCount] = useState(0);

  //for datetime limitations (will always start with today's date)
  const now = new Date();
  const localISOTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

  return (
    <>
      <Header />
      <section>
        <div className="contact-card">
          <h2 className="card-title">Book</h2>
          <p className="poppins-light-italic mb-50">
            We will take up to 1 week to reply.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label for="firstName">
                <strong>First Name</strong>{" "}
                <span className="poppins-light-italic">(Required)</span>
              </label>
              <input type="text" id="firstName" name="firstName" required />
            </div>

            <div className="form-group">
              <label for="lastName">
                <strong>Last Name</strong>{" "}
                <span className="poppins-light-italic">(Required)</span>
              </label>
              <input type="text" id="lastName" name="lastName" required />
            </div>

            <div className="form-group">
              <label for="email">
                <strong>Email</strong>{" "}
                <span className="poppins-light-italic">(Required)</span>
              </label>
              <input type="text" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label for="phone">
                <strong>Phone Number</strong>{" "}
                <span className="poppins-light-italic">
                  (Required, formatted 123-456-789)
                </span>
              </label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label for="service">
                <strong>Service</strong>{" "}
                <span className="poppins-light-italic">(Required)</span>
              </label>
              <h4 className="poppins-semibold">Haircuts:</h4>
              <div className="checkbox-grid">
                <div>
                  <input type="checkbox" id="shortCut" name="shortCut" />
                  <label for="shortCut">Short Haircut</label>
                </div>
                <div>
                  <input type="checkbox" id="shortCut" name="shortCut" />
                  <label for="shortCut">Long Haircut</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="shortCut-curly"
                    name="shortCut-curly"
                  />
                  <label for="shortCut-curly">Short Curly Cut</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="longCut-curly"
                    name="longCut-curly"
                  />
                  <label for="longCut-curly">Long Curly Cut</label>
                </div>
                <div>
                  <input type="checkbox" id="trim" name="trim" />
                  <label for="trim">Trim</label>
                </div>
              </div>

              <h4 className="poppins-semibold">Colour:</h4>
              <div className="checkbox-grid">
                <div>
                  <input
                    type="checkbox"
                    id="partialLight"
                    name="partialLight"
                  />
                  <label for="partialLight">Partial Highlights</label>
                </div>
                <div>
                  <input type="checkbox" id="fullLight" name="fullLight" />
                  <label for="fullLight">Full Highlights</label>
                </div>
                <div>
                  <input type="checkbox" id="balayage" name="balayage" />
                  <label for="balayage">Balayage</label>
                </div>
                <div>
                  <input type="checkbox" id="solid" name="solid" />
                  <label for="solid">Solid Colour</label>
                </div>
                <div>
                  <input type="checkbox" id="tone" name="tone" />
                  <label for="tone">Tone</label>
                </div>
                <div>
                  <input type="checkbox" id="roots" name="roots" />
                  <label for="roots">Root Touch Up</label>
                </div>
              </div>

              <h4 className="poppins-semibold">Treatments:</h4>
              <div className="checkbox-grid">
                <div>
                  <input type="checkbox" id="keratin" name="keratin" />
                  <label for="keratin">Keratin Treatment</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="straightPerm"
                    name="straightPerm"
                  />
                  <label for="straightPerm">Straight Perm</label>
                </div>
                <div>
                  <input type="checkbox" id="bangPerm" name="bangPerm" />
                  <label for="bangPerm">Bang Perm</label>
                </div>
                <div>
                  <input type="checkbox" id="curlPerm" name="curlPerm" />
                  <label for="curlPerm">Curly Perm</label>
                </div>
                <div>
                  <input type="checkbox" id="cPerm" name="cPerm" />
                  <label for="cPerm">C Curl Perm</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="bookingTime">
                <strong>Booking Date</strong>{" "}
                <span className="poppins-light-italic">(Required)</span>
              </label>
              <input
                type="datetime-local"
                id="bookingTime"
                name="bookingTime"
                min={localISOTime}
                max="2027-01-01T00:00"
                required
              />
            </div>

            <div className="form-group">
              <label for="service">
                <strong>Desired Discounts</strong>{" "}
                <span className="poppins-light-italic">
                  (Will be verified at appointment)
                </span>
              </label>
              <div className="checkbox-grid">
                <div>
                  <input type="checkbox" id="studentDisc" name="studentDisc" />
                  <label for="studentDisc">30% Student Discount</label>
                </div>
                <div>
                  <input type="checkbox" id="childDisc" name="childDisc" />
                  <label for="childDisc">40% Kid's Discount</label>
                </div>
              </div>
            </div>

            <p className="poppins-light-italic mb-50">
              *A booking of $25 is required to secure your spot. Bookings are
              non-refundable.
            </p>

            <div className="form-group">
              <label for="creditCard">
                <strong>Credit Card Number</strong>{" "}
                <span className="poppins-light-italic">(Required)</span>
              </label>
              <input type="number" id="creditCard" name="creditCard" required />
            </div>

            <div className="form-group">
              <div className="checkbox-grid">
                <div className="credit-row">
                  <label for="cvv">
                    <strong>CVV</strong>{" "}
                    <span className="poppins-light-italic">(Required)</span>
                  </label>
                  <input type="number" id="cvv" name="cvv" required />
                </div>
                <div className="credit-row">
                  <label for="creditExpiry">
                    <strong>Expiry Date</strong>{" "}
                    <span className="poppins-light-italic">(Required)</span>
                  </label>
                  <input
                    type="datetime-local"
                    id="creditExpiry"
                    name="creditExpiry"
                    min={localISOTime}
                    max="2027-01-01T00:00"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="center">
              <button
                className="mt-50"
                type="submit"
                onClick={() => {
                  alert("Your inquiry has been sent!");
                  window.location.reload();
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

export default Book;
