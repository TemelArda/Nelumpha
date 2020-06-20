import React from "react";
import axios from "axios";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";



class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
    };
    this.getClients = this.getClients.bind(this);
  }
  componentDidMount() {
    this.getClients();
  }
  getClients = () => {
    this.setState({ loading: true });
    axios.get("/api/clients").then((res) => {
      let data = res.data;
      console.log(data);
      this.setState({ data: data }, () => {
        this.setState({ loading: false });
      });
    });
  };

  render() {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      mousewheel: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }
    return (
      <div className="clients">
        <h1 className="text-white text-center">Our Clients & Colabrations</h1>
        {this.state.loading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) :<Swiper {...params} >
            { this.state.data.map((item, index) => {
                   return(
                     <div>
                       <img className='slide-image ' src={item.imageURL} alt={item.compName} ></img>
                        <h4>{item.compName}</h4>
                     </div>
                   ) 
                   
                   ;
                 })}
             </Swiper>}
        
        {/* <Swiper {...params} stye>
          {this.state.loading ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            this.state.data.map((item, index) => {
              return(
                <div>
                  <img src={item.imageURL} alt={item.compName}></img>
                </div>
              ) 
              
              ;
            })
          )}
        </Swiper> */}
      </div>
    );
  }
}

export default Clients;
