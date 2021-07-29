import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

//Import images
import seo6 from "../../assets/images/seo/6.png";
import seo4 from "../../assets/images/seo/4.png";
import seo7 from "../../assets/images/seo/7.png";
import seo5 from "../../assets/images/seo/5.png";
import seo3 from "../../assets/images/seo/3.png";
import seo1 from "../../assets/images/seo/1.png";
import seo2 from "../../assets/images/seo/2.png";

let brakePoints = [350, 350];

export default class ImageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 1,
      images: [
        
        {
          id: 2,
          img: seo6,
        },
        {
          id: 3,
          img: seo4,
        },
        {
          id: 4,
          img: seo7,
        },
        {
          id: 5,
          img: seo5,
        },
        {
          id: 6,
          img: seo3,
        },
        {
          id: 7,
          img: seo1,
        },
        {
          id: 8,
          img: seo2,
        },
      ],
    };
  }

  getColumns(w) {
    return (
      this.props.brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, this.props.brakePoints.length) + 1
    );
  }

  onResize() {
    const columns = this.getColumns(this.refs.Masonry.offsetWidth);
    if (columns !== this.state.columns) {
      this.setState({ columns: columns });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col lg={11}>
              <div className="features-absolute">
                <Row className="projects-wrapper">
                  <Masonry brakePoints={brakePoints}>
                    {this.state.images.map((imges, key) => (
                      <img
                        key={key}
                        src={imges.img}
                        className="img-fluid shadow seo-hero-widget rounded-md"
                        alt=""
                      />
                    ))}
                  </Masonry>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
class Masonry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { columns: 1 };
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  getColumns(w) {
    return (
      this.props.brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, this.props.brakePoints.length) + 1
    );
  }

  onResize() {
    const columns = this.getColumns(this.refs.Masonry.offsetWidth);
    if (columns !== this.state.columns) {
      this.setState({ columns: columns });
    }
  }

  mapChildren() {
    let col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    return this.props.children.reduce((p, c, i) => {
      p[i % numC].push(c);
      return p;
    }, col);
  }

  render() {
    return (
      <div className="masonry" ref="Masonry">
        {this.mapChildren().map((col, ci) => {
          return (
            <div className="column" key={ci}>
              {col.map((child, i) => {
                return <div key={i} className="p-2">{child}</div>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
