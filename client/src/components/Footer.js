import React from "react";
import { MDBCol, MDBIcon, MDBRow } from "mdbreact";

class Footer extends React.Component {
  render() {
    return (
      <footer className="py-5 m-0 w-100">
        <h2 className="text-center">Nelumpha</h2>
        <hr></hr>
        <MDBRow>
          <MDBCol>
            <h2 className="text-center">Contact Us</h2>
            <MDBRow className="mt-4">
              <MDBCol sm="4" className="icon-container">
                <MDBIcon className="icon" icon="map-marker-alt" size="2x" />
              </MDBCol>
              <MDBCol className="ml-4">
                <h5>
                  LOTUS PEYZAJ PLANLAMA LTD. ŞTİ. BAĞDAT CAD. TASLICESME SK.
                  SUADIYE APT. NO:8/8, 34744, SUADIYE/ISTANBUL
                </h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-4">
              <MDBCol sm="4" className="icon-container">
                <MDBIcon className="icon" icon="phone" size="2x" />
              </MDBCol>
              <MDBCol className="ml-4">
                <h4>+90 216 410 33 22</h4>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-4">
              <MDBCol sm="4" className="icon-container">
                <MDBIcon className="icon" icon="envelope" size="2x" />
              </MDBCol>
              <MDBCol className="ml-4">
                <a>info@lotuspeyzaj.com.tr</a>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol className="d-flex justify-content-center align-items-center flex-column">
            <h2 className="mb-4">Bussiness Hours</h2>
            <ul>
              <li>
                <h4>
                  <MDBIcon icon="clock" /> Mon. Fri 9am - 6pm
                </h4>
              </li>
              <li>
                <h4>
                  <MDBIcon icon="clock" /> Saturday 9am - 12am
                </h4>
              </li>
              <li>
                <h4>
                  <MDBIcon icon="clock" /> Sunday closed
                </h4>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex justify-content-center mt-4">
          <div className="socials">
            <ul className="d-flex justify-content-center">
              <li id="icons">
                <a
                  href="https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/lotus-peyzaj-pfvwus-pf~1200372208?/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-houzz fa-2x" />
                </a>
              </li>
              <li id="icons">
                <a
                  href="https://www.facebook.com/lotuspeyzaj/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-2x" />
                </a>
              </li>
              <li id="icons">
                <a
                  href="https://www.instagram.com/lotuspeyzaj/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-2x" />
                </a>
              </li>
              <li id="icons">
                <a
                  href="https://www.pinterest.com/lotuspeyzaj/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-pinterest-p fa-2x"></i>
                </a>
              </li>
              <li id="icons">
                <a
                  href="mailto: abc@example.com"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-envelope fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </MDBRow>
        <MDBRow className="d-flex justify-content-center mt-4">
          <p className="text-center">
            {" "}
            &copy; Copyright 2020. <br /> All Rights Reserved, Nelumpha Desing
            Inc.{" "}
          </p>
        </MDBRow>
      </footer>
    );
  }
}

export default Footer;
