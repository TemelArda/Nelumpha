import React from "react";
import { MDBIcon } from "mdbreact";
import "../style/Nav.scss";
import SvgLogo from "../components/SvgLogo";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onHover = this.onHover.bind(this);
  }

  onHover = () => {
    this.setState((prevState) => ({
      collapse: !prevState.collapse,
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div
        className={this.state.collapse ? "nav nav-active" : "nav"}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onHover}
      >
        <div className="nav-list">
          <div className="nav-tag">
            <MDBIcon className={this.state.collapse ? "tag-icon icon-active" : "tag-icon"} icon="angle-double-right" />
          </div>
          <ul>
            <li className="nav-link">
              <a href="/">
                <MDBIcon className="nav-icon" icon="home" />
                <span className={this.state.collapse ? "nav-text active" : "nav-text"}>Home</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/services">
                <MDBIcon className="nav-icon" icon="concierge-bell" />{" "}
                <span className={this.state.collapse ? "nav-text active" : "nav-text"}>Services</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/about">
                <MDBIcon className="nav-icon" fab icon="pagelines" />
                <span className={this.state.collapse ? "nav-text active" : "nav-text"}>About Us</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/gallery">
                <MDBIcon className="nav-icon" icon="image" />
                <span className={this.state.collapse ? "nav-text active" : "nav-text"}>Gallery</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/contact">
                <MDBIcon className="nav-icon" icon="phone" />
                <span className={this.state.collapse ? "nav-text active" : "nav-text"}>Contact Us</span>
              </a>
            </li>
          </ul>
          <div className="nav-brand">
            <h4
              className={
                this.state.collapse ? "active brand-text" : "brand-text"
              }
            >
              Nelumpha
              <br /> Design
            </h4>{" "}
            <SvgLogo
              className={this.state.collapse ? "active-brand brand" : "brand"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
