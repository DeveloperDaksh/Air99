import React, { Component } from "react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

class AccordianCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col1: true,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
    this.t_col5 = this.t_col5.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
      col5: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
      col5: false,
    });
  }
  t_col5() {
    this.setState({
      col5: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col1}
            className={
              this.state.col1
                ? "faq position-relative text-primary"
                : "faq position-relative text-dark"
            }
          >
            <CardHeader
              className="border-0 bg-light p-3"
              id="headingOne"
            >
              <h6 className="title mb-0">
                {" "}
                {this.props.question1}
                <i
                  className={
                    this.state.col1
                      ? "mdi mdi-chevron-up float-end"
                      : "mdi mdi-chevron-down float-end"
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col1}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer1}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col2}
            className={
              this.state.col2
                ? "faq position-relative text-primary"
                : "faq position-relative text-dark"
            }
          >
            <CardHeader
              className="border-0 bg-light p-3"
              id="headingTwo"
            >
              <h6 className="title mb-0">
                {this.props.question2}
                <i
                  className={
                    this.state.col2
                      ? "mdi mdi-chevron-up float-end"
                      : "mdi mdi-chevron-down float-end"
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col2}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer2}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col3}
            className={
              this.state.col3
                ? "faq position-relative text-primary"
                : "faq position-relative text-dark"
            }
          >
            <CardHeader
              className="border-0 bg-light p-3"
              id="headingfive"
            >
              <h6 className="title mb-0">
                {this.props.question3}
                <i
                  className={
                    this.state.col3
                      ? "mdi mdi-chevron-up float-end"
                      : "mdi mdi-chevron-down float-end"
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col3}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer3}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col4}
            className={
              this.state.col4
                ? "faq position-relative text-primary"
                : "faq position-relative text-dark"
            }
          >
            <CardHeader
              className="border-0 bg-light p-3"
              id="headingfive"
            >
              <h6 className="title mb-0">
                {this.props.question4}
                <i
                  className={
                    this.state.col4
                      ? "mdi mdi-chevron-up float-end"
                      : "mdi mdi-chevron-down float-end"
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col4}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer4}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-0 shadow">
          <Link
            to="#"
            onClick={this.t_col5}
            className={
              this.state.col5
                ? "faq position-relative text-primary"
                : "faq position-relative text-dark"
            }
          >
            <CardHeader
              className="border-0 bg-light p-3"
              id="headingfive"
            >
              <h6 className="title mb-0">
                {" "}
                {this.props.question5}
                <i
                  className={
                    this.state.col5
                      ? "mdi mdi-chevron-up float-end"
                      : "mdi mdi-chevron-down float-end"
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col5}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer5}</p>
            </CardBody>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }
}

export default AccordianCommon;
