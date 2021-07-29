import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

//Star Rating
import StarRatings from "react-star-ratings";

class ReviewSlider4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.clients.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.clients.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    return (
      <React.Fragment>
        <Carousel
          activeIndex={this.state.activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {this.props.clients.map((client, key) => (
            <CarouselItem
              key={key + 1}
              onExiting={this.onExiting()}
              onExited={this.onExited()}
            >
              <div key={key} className="customer-testi text-center">
                <p className="text-light para-dark h6 fst-italic mb-2">
                  " {client.desc} "
                </p>
                <StarRatings
                  rating={client.rating}
                  starRatedColor="#F17425"
                  numberOfStars={5}
                  name="rating"
                  starDimension="15px"
                  className="list-unstyled mb-0 mt-3"
                  starSpacing="1px"
                />
                <h6 className="text-light title-dark mt-1">
                  {client.name}
                  <small className="text-muted ms-1">{client.post}</small>
                </h6>
                <img
                  src={client.image}
                  style={{ height: 65, width: 65 }}
                  className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
          <CarouselControl direction="prev" onClickHandler={this.previous}>
            <span className="carousel-control-prev-icon"></span>
            <span className="sr-only">Previous</span>
          </CarouselControl>
          <CarouselControl direction="next" onClickHandler={this.next}>
            <span className="carousel-control-next-icon"></span>
            <span className="sr-only">Next</span>
          </CarouselControl>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default ReviewSlider4;
