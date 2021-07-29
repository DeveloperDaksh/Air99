import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import book from "../../assets/images/book/book.png";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 d-table w-100 bg-light">
          <Container>
            <Row className="mt-5 mt-sm-0 align-items-center">
              <Col lg={6} md={6}>
                <div className="title-heading me-lg-4">
                  <h4 className="display-4 fw-bold mb-3">
                    {" "}
                    The Most Comprehensive Book!{" "}
                  </h4>
                  <p className="text-muted para-desc mb-0">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-soft-primary m-1">
                      Buy Now @ $16
                    </Link>
                    <Link
                      to="#"
                      onClick={this.openModal}
                      className="btn btn-icon btn-pills btn-soft-primary m-1 lightbox"
                    >
                      <FeatherIcon
                        icon="video"
                        className="icons"
                      />
                    </Link>
                    <span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="bg-white p-5 rounded-md">
                  <img src={book} className="img-fluid mx-auto d-block" alt="Landrick" />
                </div>
              </Col>
            </Row>
            <ModalVideo
              channel="vimeo"
              isOpen={this.state.isOpen}
              videoId="99025203"
              onClose={() => this.setState({ isOpen: false })}
            />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
