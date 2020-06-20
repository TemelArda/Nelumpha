import React from "react";
import { MDBCol, MDBRow, MDBIcon } from "mdbreact";
import Fade from "react-reveal/Fade";
import "../style/gallery.scss";
const URL = "http://localhost:5000/images/gallery/";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImg: "",
      isModal: false,
      imgData: [],
    };
    this.getImageData = this.getImageData.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getImageData();
  }

  getImageData = () => {
    let urls = [];
    for (let i = 1; i < this.props.numImages + 1; i++) {
      urls.push(URL + "gallery-image" + i + ".jpg");
    }
    this.setState({ imgData: urls }, () => {});
  };
  showModal = (i) => {
    this.setState({ isModal: true }, () => {
      this.setState({ modalImg: URL + "gallery-image" + i + ".jpg" });
    });
  };
  closeModal = () => {
    this.setState({ isModal: false });
  };
  render() {
    return (
      <div className="gallery-container">
        <MDBRow>
          {this.state.imgData.map((item, index) => {
            return (
              <MDBCol md="4" lg='3' key={index} className="gallery-media">
                <Fade top delay={((index % 4)  * 100) + ((index/4) * 300)}>
                  <img src={item} alt="gallery-image"></img>
                </Fade>

                <div
                  className="overlay"
                  onClick={() => this.showModal(index + 1)}
                >
                  <MDBIcon className="icon" icon="search" />
                </div>
              </MDBCol>
            );
          })}
          {this.state.isModal ? (
            <div className="myModal" onClick={this.closeModal}>
              <span className="close">&times;</span>
              <img class="modal-content" id="img01" src={this.state.modalImg} />
            </div>
          ) : (
            ""
          )}
        </MDBRow>
      </div>
    );
  }
}

export default Gallery;
