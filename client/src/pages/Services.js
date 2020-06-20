import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBIcon } from "mdbreact";
import "../style/Services.scss";
const Design = [
  "Site Analysis",
  "Assestment",
  "Survey",
  "Conceptual Design & Guidance",
  "Masterplanning",
  "Implementation Projects",
  "Irrigation Projects",
  "Landscape Lightining Projects",
  "Construction Details",
  "Cost Studies & Budget Planning",
  "Specification Writinge",
];
const Consultancy = [
  "General Landscape Consultation",
  "Design Briefs",
  "Feasibility Studies",
  "Identifying Projects Requirements",
  "Identifying Assemble Specialist Teams",
  "Managing & Coordinating Projects/Teams",
  "Providig Creative & Innovative Solutions",
  "Construction Observation",
];
const Construction = [
  " Site Development",
  "Masonary",
  "Planting",
  "Irrigation",
  "Lightining",
  "Construction of Living Areas (Outdoor Kitchen, Pergola, etc…)",
  "Swimming Pools",
  "Water Features",
  "Installation Services",
  "Decorative Structures",
];
const Maintenance = [
  "Lawn Mowing & Aerating",
  "Seasonal Lawn Feeding & Top Dressing",
  "Pest / Disease Control",
  "Pruning",
  "Shrub & Tree Replacement",
  "Fertilizer Application",
  "Weed Control",
  "Seasonal Floral Displays",
  "Adjusting Sprinkler Heads",
  "Programming Controllers",
];

function ServiceCard(props) {
  return (
    <MDBCol lg='2' md='5' className='serviceCard d-flex justify-content-center flex-column p-0 '>
      <div className = 'head'>
        <h1 className="text-white text-center">{props.title} <br/> <MDBIcon icon="angle-double-down" /></h1>
      </div>
      
      <div className='content mt-4'>
      <h4 className='text-center text-white'>{props.title}</h4>
      <hr/>
      {
          props.data.map((item, index) =>{
              return(
                    <p>{item}</p>
              )
          })
      }
      </div>
    </MDBCol>
  );
}

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [Design, Consultancy, Construction, Maintenance],
    };
  }
  componentDidMount() {
    console.log(this.state);
  }
  pickTitle(index) {
    switch (index) {
      case 0:
        return "Design";
      case 1:
        return "Consultancy";
      case 2:
        return "Construction";
      case 3:
        return "Maintenance";
      default:
        return "None";
    }
  }
  render() {
    return (
      <MDBContainer fluid className="service mx-auto p-0 h-100 py-5">
        <MDBRow className="p-0 m-0 d-flex justify-content-center">
          <div class="jumbotron">
            <h1 class="display-1">Our Services</h1>
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
            <p>
              Your trusted landscape advisor since 1995! Whether you have a
              single property, or multiple sites located in several states, we
              can be your trusted landscape investment adviser, and
              professionally manage all of your environmental needs.
            </p>
          </div>
        </MDBRow>
        <MDBRow className='insta-container d-flex justify-content-center'>
          {this.state.services.map((item, index) => {
            return <ServiceCard title={this.pickTitle(index)} data={item} />;
          })}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Services;
