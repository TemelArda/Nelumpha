import React from 'react'
import Gallery from '../components/Gallery';
import {MDBContainer} from "mdbreact";
function ImageGallery(){
    return(
        <MDBContainer fluid className="mx-auto p-0 h-100 py-5">
            <Gallery numImages = {36} />
        </MDBContainer>
    )
}

export default ImageGallery;