import React from "react";
import { MDBContainer, MDBRow, MDBIcon } from "mdbreact";
import InstaCard from "../components/InstaCard";
import Hero from "../components/Hero.js";
import Intro from "../components/Intro";
import Gallery from "../components/Gallery";
import Client from '../components/clients'

let urls = [];
let sCodes = [];
let captions = [];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: { urls: [], sCodes: [] },
    };
    this.getInsta = this.getInsta.bind(this);
  }
  componentDidMount() {
    //this.getInsta();
    this.getInsta();
  }

  getInsta = async () => {
    this.setState((prevState) => ({
      loading: !prevState.loading,
    }));
    const response = await fetch(
      "https://www.instagram.com/lotuspeyzaj/?__a=1"
    );
    const json = await response.json();

    const insta = await json.graphql.user.edge_owner_to_timeline_media.edges;
    
    let i = 0;
    for (i = 0; i < 4; i++) {
      urls[i] = await insta[i].node.display_url;
      sCodes[i] = (await "https://www.instagram.com/p/") + insta[i].node.shortcode + "/";
    }
    await this.setState({ data: { urls, sCodes, captions }, loading: false })};
  render() {
    return (
      <MDBContainer fluid className="main p-0">
        <Hero />
        <Intro/>
        <Client/>
        <div className="my-4">
          <h1 className="gallery-title text-center">Selected works</h1>
          <hr className="gallery-line" />
          <p className='gallery-text'>Our team of designers and architects has worked on over 900 landscape design projects since 1995.<br/>
           Here are the some of latest and greatest selected works <br/> <a href='/gallery'>See the full Gallery </a> <MDBIcon icon="angle-double-right" /></p>
          
        </div>
        <Gallery numImages={8} />
        
        <div className="text-center mt-5">
          <h1 className='social-title'>Latest in our social media</h1>
          <hr className='social-hr'/>
          <div className="insta-container d-flex align-items-center justify-content-center mx-auto">
            {this.state.loading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : <MDBRow className='insta-container w-100 p-0 d-flex justify-content-center'>
              {this.state.data.sCodes.map((item, index) => {
                return (
                    <InstaCard 
                    link = {this.state.data.sCodes[index]}
                    url = {this.state.data.urls[index]}
                    />
                );
              })}
           </MDBRow> }
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default Home;
