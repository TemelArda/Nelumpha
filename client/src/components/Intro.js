import React from "react";
import "../style/intro.scss";
import LeafSVG from "../components/SvgLogo";
import { MDBContainer, MDBRow, MDBCol, MDBIcon} from "mdbreact";



class Intro extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    
    }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  

  handleScroll = () => {
    let scroll = window.pageYOffset;
    let elements = document.querySelectorAll(".bg-text");
    let offset = elements[0].offsetTop + window.innerHeight - 250;
    let i = document.querySelector(".intro");
    if (scroll > offset && scroll < i.offsetHeight * 2) {
      let x;
      for (x of elements) {
        x.style.transform =
          "translate3d(0px," + (scroll - offset) * x.dataset.rate + "px, 0px)";
        x.style.opacity = "1" - ((scroll - offset) / 500) * 0.5;
      }
    }
  };

  render() {
    return (
      <div className="intro">
        <div className="back-ground">
          <ul className="scroll-list">
            <li className="bg-text" data-rate="-0.5">
              <p>Ne</p>
            </li>
            <li className="bg-text" data-rate="0.5">
              <p>lum</p>
            </li>
            <li className="bg-text" data-rate="1.2">
              <p>pha.</p>
            </li>
          </ul>
          <div className='leaf leaf1'>
            <LeafSVG/>
          </div>
          <div className='leaf leaf2'>
            <LeafSVG/>
          </div>
          <div className='leaf leaf3'>
            <LeafSVG/>
          </div>
          <div className='leaf leaf4'>
            <LeafSVG/>
          </div>
          <div className='leaf leaf5'>
            <LeafSVG/>
          </div>
          <div className='leaf leaf6'>
            <LeafSVG/>
          </div>
          
        </div>
        <MDBContainer fluid className='content'>
          <MDBRow className='content-row d-flex justify-content-center align-items-center'>
            <MDBCol md='5' lg='4' className='content-col'>
              <h1>About Us</h1>
              <hr/>
              <p>
              Lotus Peyzaj Planlama is established in 1995 with the aim of providing an original and imaginative design consultancy, offering clients a high quality professional and personal service in all aspects of landscape design, management and implementation.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className='content-row  d-flex justify-content-center align-items-center'>
            <MDBCol md='4' lg='4' className='content-col'>
            <div className='icon-container d-flex justify-content-center '><MDBIcon icon="tree" size='2x'/></div>
            <h1 className='text-center'>Our Vision</h1>
            <hr/>
             <p>
             Our vision is to keep your environment as beautiful as nature intended it to be. We work with you to help make your landscape vision a reality. Respectful of architectural style and responsive to ecological context, our gardens are engaging, richly detailed backdrops for our clients’ lives and are expressions of how they live.
             </p>
            </MDBCol>
            <MDBCol md='4' lg='4' className='content-col'>
            <div className='icon-container d-flex justify-content-center '><MDBIcon icon="pen-nib" size='2x'/></div>
              <h1 className='text-center'>OUR MISSION</h1>
              <hr/>
              <p>
              We believe that at the heart of every successful landscape project is the dynamic collaboration between client and designer. The excitement and enthusiasm for a project, the synthesis of ideas, and the commitment to superlative quality, inspire the creation of an expressive, wonderfully crafted outdoor environment.
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Intro;
