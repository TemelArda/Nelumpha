import React from "react";
import ReactDom from "react-dom";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = (url) => {
    window.location.href = url;
    console.log(url);
  };

  render() {
    return (
      <div className="hero">
        <div className="content">
          <div className="titles">
            <h1 className="title px-3">Nelumpha Design</h1>
            <h2 className="title2">Landscape and Design</h2>
          </div>
          <div className="call-to-action">
            <h3 className="mb-3">
              "Let us redifene your imagination with beatiful living spaces"
            </h3>
            <h4> See What is Poosible...</h4>
            <div class="btn" onClick={() => this.handleClick("/services")}>
              <div className="init">
                <a href="/">Services</a>
              </div>
              <div className="inner">
                <a href="/services">Services</a>
              </div>
            </div>
            <div class="btn" onClick={() => this.handleClick("/contact")}>
              <div className="init">
                <a href="/">Contact Us</a>
              </div>
              <div className="inner">
                <a href="/">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="socials">
          <ul className="d-flex justify-content-center p-0">
            <li id="icons" >
              <a
                href="https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/lotus-peyzaj-pfvwus-pf~1200372208?/"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-houzz fa-2x" />
              </a>
            </li>
            <li id="icons" >
              <a
                href="https://www.facebook.com/lotuspeyzaj/"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-2x" />
              </a>
            </li>
            <li id="icons" >
              <a
                href="https://www.instagram.com/lotuspeyzaj/"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x" />
              </a>
            </li>
            <li id="icons" >
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
      </div>
    );
  }
}
export default Hero;
