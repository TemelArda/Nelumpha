import React from 'react'
import { MDBContainer } from "mdbreact";

class About extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: ""
    }
    this.getClients = this.getClients.bind(this);
  }
  componentDidMount() {
    //this.getInsta();
    this.getClients()
  }
  getClients = async()=>{
    const response = await fetch("http://localhost:5000/api/clients");
    response.json()
    .then(data =>{
      URL = data[0].imageURL;
      console.log(data);
      this.setState({data:URL});
      console.log(this.state.data)
    });

  }
    render(){
          return(
            <MDBContainer className = 'mx-auto text-center pt-5' style = {{height: '100vh'}}>
              <h1>This is about page</h1>
              <img src= {this.state.data}></img>
            </MDBContainer>
          )
      }
  }


export default About