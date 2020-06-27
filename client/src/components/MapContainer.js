import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import axios from "axios";


const map_style =  {
  height: '40vh',
  position: 'relatives',
  overFlowX:'hidden',
  top: '2.5vh',
  bottom: '2.5vh',
  margin: 'auto'
}

class MapContainer extends React.Component {
  render() {
    return (
        <Map
          google={this.props.google}
          style={map_style}
          zoom={18}
          initialCenter={{ lat: 40.955619, lng: 29.089973 }}
        >
          <Marker position={{ lat: 40.955471, lng: 29.090491 }} />
        </Map>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: props.apiKey,
}))(MapContainer);
