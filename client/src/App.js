import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './style/App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import './style/bootstrap.min.css'
import Gallery from './pages/Gallery';
import SvgLogo from './components/SvgLogo';
import { MDBContainer} from "mdbreact";
import Footer from './components/Footer';
import Services from'./pages/Services';
import Contact from'./pages/Contact';


class App extends React.Component{
    render(){
        return(
          <MDBContainer fluid className="wrapper mx-auto p-0">
            <Router>
                <SvgLogo className = 'logo'/>
                <Navbar/>
            <Switch>
              <Route exact path = '/' component = {Home}></Route>
              <Route exact path = '/services' component = {Services}></Route>
              <Route path = '/about' component = {About}></Route>
              <Route path = '/gallery' component = {Gallery}></Route>
              <Route path = '/contact' component = {Contact}></Route>
            </Switch>
          </Router>
          <Footer/>
          </MDBContainer>
            
        )
    }
}

export default App;
