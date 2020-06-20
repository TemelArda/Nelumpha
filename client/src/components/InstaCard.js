import React from 'react'
import { MDBCol, MDBIcon } from "mdbreact";
import "../style/InstaCard.scss"



class InstaCard extends React.Component{
    
    render(){
        console.log(this.props);
        return(
            <MDBCol  lg ='2'md ='4' className='instaCard'>
                <div className ='overlay'>
                    <a href = {this.props.link} SameSite='None' target="_blank" >Go To Post</a>
                    <h1><MDBIcon fab icon="instagram" size='lg'/></h1>
                </div>
                <img src={this.props.url} alt='Instagram Image' className='insta-media img-fluid'></img>
            </MDBCol>
        )
    }
}

export default InstaCard