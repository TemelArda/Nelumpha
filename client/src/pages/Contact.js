import React from "react";
import { MDBIcon, MDBCol, MDBRow } from "mdbreact";
import Fade from "react-reveal/Fade";
import axios from "axios";
import "../style/Services.scss";
import "../style/forms.scss";
import MapContainer from "../components/MapContainer";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      mail: "",
      message: "",
      err: false,
      success: false,
    };
    this.submitForm = this.submitForm.bind(this);
    this.onchange = this.onchange.bind(this);
  }
  onchange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };
  submitForm = () => {
    let error = false;

    axios
      .post("/api/inqueries", {
        name: this.state.first_name + " " + this.state.last_name,
        email: this.state.mail,
        message: this.state.message,
      })
      .then((response) => {
        console.log(response);
        this.setState({ success: true });
        setTimeout(() => {
          this.setState({ success: false });
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ err: true });
        setTimeout(() => {
          this.setState({ err: false });
        }, 3000);
      });
  };
  render() {
    return (
      <MDBCol md="7" lg="6" xl="4" className="form">
        <div className="form-header mb-3">
          <h2 className="text-center">Send Your inqueries</h2>
        </div>
        <Fade collapse when={this.state.success}>
          <div className="confirmation-alt text-center">
            <h3 className="success-messsage">
              Message has been submitted <MDBIcon far icon="check-circle" />
            </h3>
          </div>
        </Fade>
        <Fade collapse when={this.state.err}>
          <div className="confirmation text-center">
            <h3 className="error-messsage">
              An Error Occured <MDBIcon icon="times-circle" />
            </h3>
            <h5 className="error-messsage">Make sure all fields are filled</h5>
          </div>
        </Fade>
        <hr />
        <div className="form-body">
          <form>
            <div className="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <MDBIcon icon="user-edit" size="2x" />
                </span>
              </div>
              <input
                type="text"
                class="form-control mr-3 px-2"
                placeholder="First Name"
                maxlength="15"
                size="15"
                name="first_name"
                onChange={this.onchange}
              />
              <input
                type="text"
                class="form-control px-2"
                maxlength="15"
                size="15"
                placeholder="Last Name"
                name="last_name"
                onChange={this.onchange}
              />
            </div>
            <div className="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <MDBIcon icon="envelope" size="2x" />
                </span>
              </div>
              <input
                className="mr-3"
                type="text"
                class="form-control px-2"
                placeholder="E-mail"
                name="mail"
                onChange={this.onchange}
              />
            </div>

            <div className="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <MDBIcon icon="comments" size="2x" />
                </span>
              </div>
              <textarea
                class="form-control px-2"
                placeholder="Your Message"
                name="message"
                maxlength="250"
                size="150"
                onChange={this.onchange}
              ></textarea>
            </div>
            <div className="input-group mb-3 d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={this.submitForm}
              >
                Send <MDBIcon far icon="paper-plane" className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </MDBCol>
    );
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: " ",
    };
    this.getMap = this.getMap.bind(this);
  }
  componentDidMount() {
    this.getMap();
  }
  getMap = () => {
    this.setState({ loading: true });
    axios.get("/api/maps").then((res) => {
      let data = res.data;
      this.setState({ data: data }, () => {
        this.setState({ loading: false });
      });
    });
  };
  render() {
    return (
      <div className="main" style={{ height: "fit-content" }}>
        <MDBRow className="w-100 p-0 m-0">
          <MDBRow className="d-flex w-100 p-0 mx-0 mt-5 justify-content-center">
            <h1 className="display-3 text-center"> Contact Us</h1>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex w-100 p-0 mx-0 my-5 justify-content-center">
            <Form />
            <MDBCol md="7" lg="6" xl="4" className="form"></MDBCol>
          </MDBRow>

          <MDBRow className="d-flex w-100 p-0 m-0 justify-content-center">
            <div className="socials">
              <ul className="d-flex justify-content-center p-0">
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
        </MDBRow>
        <MDBRow className="maps-cotent p-0 m-0">
          <MDBCol className=" p-0 m-0">
            {this.state.loading ? (
              <div
                className="spinner-border d-flex justify-content-center"
                role="status"
              >
                <span className="sr-only"></span>
              </div>
            ) : (
              <MapContainer apiKey={this.state.data} />
            )}
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Contact;
