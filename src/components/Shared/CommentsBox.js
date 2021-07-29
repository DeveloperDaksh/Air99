import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

class CommentsBox extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="shadow rounded border-0 mt-4">
          <CardBody>
            <h5 className="card-title mb-0">Comments :</h5>
            <ul className="media-list list-unstyled mb-0">
              {this.props.comments.map((comment, key) => (
                <li key={key} className="mt-4">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link className="pe-3" to="#">
                        <img
                          src={comment.image}
                          className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                          alt="img"
                        />
                      </Link>
                      <div className="commentor-detail">
                        <h6 className="mb-0">
                          <Link to="#" className="text-dark media-heading">
                            {comment.name}
                          </Link>
                        </h6>
                        <small className="text-muted">
                          {comment.date} at {comment.time}
                        </small>
                      </div>
                    </div>
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-reply"></i> Reply
                    </Link>
                  </div>
                  <div className="mt-3">
                    <p className="text-muted fst-italic p-3 bg-light rounded">
                      " {comment.desc} "
                    </p>
                  </div>
                  {comment.replies ? (
                    <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                      {comment.replies.map((reply, key) => (
                        <li key={key} className="mt-4">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link className="pe-3" to="#">
                                <img
                                  src={reply.image}
                                  className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                  alt="comment"
                                />
                              </Link>
                              <div className="commentor-detail">
                                <h6 className="mb-0">
                                  <Link
                                    to="#"
                                    className="text-dark media-heading"
                                  >
                                    {reply.name}
                                  </Link>
                                </h6>
                                <small className="text-muted">
                                  {reply.date} at {reply.time}
                                </small>
                              </div>
                            </div>
                            <Link to="#" className="text-muted">
                              <i className="mdi mdi-reply"></i> Reply
                            </Link>
                          </div>
                          <div className="mt-3">
                            <p className="text-muted fst-italic p-3 bg-light rounded">
                              " {reply.desc} "
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default CommentsBox;
