import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import '../style/Contact.scss'


const mapStyles = {
  width: "100%",
  height: "100%",
  margin: "auto",
};

class Contact extends React.Component {
  componentDidMount() {
    console.log(process.env);
  }
  render() {
    return (
      <div className="main" style={{ height: "fit-content" }}>
        <MDBRow className="w-100 h-100 p-0 m-0">
          <MDBCol md="6" className = 'd-flex justify-content-center- align-items-center'style={{ height: "75vh" }}>
            <h1>This is Contact page</h1>
          </MDBCol>
          <MDBCol md="6" className='p-0' style={{ height: "45vh" }}>
            <MDBCol className='p-0'>
              <Map
                google={this.props.google}
                zoom={18}
              
                initialCenter={{ lat: 40.955619, lng: 29.089973 }}
              >
                <Marker position={{ lat: 40.955471, lng: 29.090491 }} />
              </Map>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_KEY,
})(Contact);
