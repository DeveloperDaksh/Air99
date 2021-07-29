import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class PageSearchSidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="border-0 sidebar sticky-bar rounded shadow">
          <CardBody>

            <div className="widget">
              <Form
                role="search"
                method="get"
                id="searchform"
                className="searchform"
              >
                <div className="input-group mb-3 border rounded">
                  <Input type="text" id="s" name="s" className="form-control border-0" placeholder="Search Keywords..." />
                  <button type="submit" className="input-group-text bg-transparent border-0" id="searchsubmit"><i className="uil uil-search"></i></button>
                </div>
              </Form>
            </div>

            <div className="widget mb-4 pb-2">
              <h5 className="widget-title">Categories</h5>
              <ul className="list-unstyled mt-4 mb-0 blog-categories">
                <li>
                  <Link to="#">Finance</Link>{" "}
                  <span className="float-end">13</span>
                </li>
                <li>
                  <Link to="#">Business</Link>{" "}
                  <span className="float-end">09</span>
                </li>
                <li>
                  <Link to="#">Blog</Link>{" "}
                  <span className="float-end">18</span>
                </li>
                <li>
                  <Link to="#">Corporate</Link>{" "}
                  <span className="float-end">20</span>
                </li>
                <li>
                  <Link to="#">Investment</Link>{" "}
                  <span className="float-end">22</span>
                </li>
              </ul>
            </div>

            <div className="widget mb-4 pb-2">
              <h5 className="widget-title">Recent Post</h5>
              <div className="mt-4">
                <div className="clearfix post-recent">
                  <div className="post-recent-thumb float-start">
                    {" "}
                    <Link to="#">
                      {" "}
                      <img
                        alt="img"
                        src={this.props.blog07}
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <div className="post-recent-content float-start">
                    <Link to="#">Consultant Business</Link>
                    <span className="text-muted mt-2">15th June, 2019</span>
                  </div>
                </div>
                <div className="clearfix post-recent">
                  <div className="post-recent-thumb float-start">
                    {" "}
                    <Link to="#">
                      {" "}
                      <img
                        alt="img"
                        src={this.props.blog08}
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <div className="post-recent-content float-start">
                    <Link to="#">Look On The Glorious Balance</Link>{" "}
                    <span className="text-muted mt-2">15th June, 2019</span>
                  </div>
                </div>
                <div className="clearfix post-recent">
                  <div className="post-recent-thumb float-start">
                    {" "}
                    <Link to="#">
                      {" "}
                      <img
                        alt="img"
                        src={this.props.blog01}
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <div className="post-recent-content float-start">
                    <Link to="#">Research Financial.</Link>{" "}
                    <span className="text-muted mt-2">15th June, 2019</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget mb-4 pb-2">
              <h5 className="widget-title">Tags Cloud</h5>
              <div className="tagcloud mt-4">
                <Link to="#" className="rounded">
                  Business
                </Link>
                <Link to="#" className="rounded ms-1">
                  Finance
                </Link>
                <Link to="#" className="rounded ms-1">
                  Marketing
                </Link>
                <Link to="#" className="rounded">
                  Fashion
                </Link>
                <Link to="#" className="rounded ms-1">
                  Bride
                </Link>
                <Link to="#" className="rounded ms-1">
                  Lifestyle
                </Link>
                <Link to="#" className="rounded">
                  Travel
                </Link>
                <Link to="#" className="rounded ms-1">
                  Beauty
                </Link>
                <Link to="#" className="rounded ms-1">
                  Video
                </Link>
                <Link to="#" className="rounded ms-1">
                  Audio
                </Link>
              </div>
            </div>

            <div className="widget">
              <h5 className="widget-title">Follow us</h5>
              <ul className="list-unstyled social-icon mb-0 mt-4">
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="github"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="youtube"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="gitlab"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default PageSearchSidebar;
