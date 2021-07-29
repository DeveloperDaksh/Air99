// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";

class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Docs", link: "#" },
        { id: 3, name: "Documentation" },
      ],
    };
  }
  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        <PageBreadcrumb
          title="Documentation"
          pathItems={this.state.pathItems}
        />
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section">
          <Container>
            <Row>
              <Col>
                <h1>Introduction</h1>
                <p className="text-muted h5 font-weight-normal">
                  Get Start With{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  in React Js. Launch your campaign and benefit from our
                  expertise on designing and managing conversion centered
                  bootstrap5 React js page.
                </p>

                <h3 className="mt-4 pt-2">Quick start</h3>

                <p className="text-muted">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.{" "}
                  <Link
                    to="//reactjs.org/docs/create-a-new-react-app.html"
                    target="_blank"
                    className="text-primary h6"
                  >
                    Head to the CRA installation page.
                  </Link>
                </p>

                <h4 className="mt-4 pt-2">CSS/SCSS</h4>
                <p className="text-muted">
                  Import all CSS and SCSS files in App.js file just like below.{" "}
                </p>

                {/* <p className="text-muted">Copy-paste the style <code className="text-danger fw-bold">&lt;link&gt;</code> into your <code className="text-danger fw-bold">&lt;head&gt;</code> before all other stylesheets to load Bootstrap CSS.</p> */}

                <code className="text-success rounded p-2 bg-dark fw-bold">
                  import './Apps.scss';
                </code>
                <br />
                <br />
                <code className="text-success rounded p-2 bg-dark fw-bold">
                  import './css/materialdesignicons.min.css';
                </code>
                <br />
                <br />
                <code className="text-success rounded p-2 bg-dark fw-bold">
                  import './css/color/default.css';
                </code>

                <h4 className="mt-4 pt-2">Installtion</h4>
                <p className="text-muted">
                  The zip file contains all js files integrated with Landrick,
                  however you need to perform following steps to get
                  node_modules etc. Make sure you have installed node and its
                  version is greater then equal to 12. We preferred to use node version 14.15.3. You can simply switch your current
                  node version using nvm (Node version manager).{" "}
                </p>
                <h6 className="mt-3">
                  <code className="text-success rounded p-2 bg-dark fw-bold">
                    npm install
                  </code>
                </h6>
                <p className="text-muted">
                  To run project locally you need to run below command.
                </p>
                <h6 className="mt-3">
                  <code className="text-success rounded p-2 bg-dark fw-bold">
                    npm start
                  </code>
                </h6>

                <h4 className="mt-4 pt-2">Reactstrap</h4>
                <p className="text-muted">
                  Reactstrap provides prebuilt Bootstrap 5 components that allow
                  a great deal of flexibility and prebuilt validation. This
                  allows us to quickly build beautiful forms that are guaranteed
                  to impress and provide an intuitive user experience.Import
                  required reactstrap components within <b>src/App.js</b> file
                  or your custom component files.
                </p>

                <h4 className="mt-4 pt-2">Starter Template</h4>
                <p className="text-muted">
                  Next is the index.html page, located in the public folder. If
                  you do link up any external stylesheets, or need to add
                  bootstrap, or another feature. This is where you would add it.
                  You can see where I’ve added bootstrap in the project here.
                  You can also change the title here, which as you can see, I
                  have failed to do. Other than that, you won’t usually need to
                  touch this file very much. You will also notice the div with
                  the id of “root”. This is where all of the content will be
                  output. You don’t need to change that, but just know that it’s
                  there.
                </p>

                <pre className="code mb-0 mt-4 fw-bold p-4 bg-light rounded shadow text-muted">
                  <span className="text-primary">&lt;!doctype html&gt;</span>{" "}
                  <br />
                  <span className="text-warning">
                    &lt;html lang="en"&gt;
                  </span>{" "}
                  <br />
                  <span className="text-danger"> &lt;head&gt;</span> <br />
                  <br />
                  <span className="text-danger">
                    {" "}
                    &lt;meta charset="utf-8" /&gt;
                  </span>{" "}
                  <br />
                  <span className="text-danger"> &lt;title&gt;</span>
                  <span className="text-primary">
                    {" "}
                    Landrick - Saas & Software Landing Page Template{" "}
                  </span>
                  <span className="text-danger">&lt;/title&gt;</span> <br />
                  <span className="text-danger">
                    {" "}
                    &lt;meta name="viewport" content="width=device-width,
                    initial-scale=1.0" /&gt;
                  </span>{" "}
                  <br />
                  <span className="text-danger">
                    {" "}
                    &lt;meta name="description" content="Site description" /&gt;
                  </span>{" "}
                  <br />
                  <span className="text-danger">
                    {" "}
                    &lt;meta name="keywords" content="Your tags" /&gt;
                  </span>{" "}
                  <br /> <br />
                  <span className="text-muted">
                    {" "}
                    &lt;!-- favicon icon --&gt;
                  </span>{" "}
                  <br />
                  <span className="text-info">
                    {" "}
                    &lt;link rel="shortcut icon" href="images/favicon.ico"&gt;
                  </span>{" "}
                  <br />
                  <br />
                  <span className="text-danger"> &lt;/head&gt;</span> <br />
                  <span className="text-danger"> &lt;body&gt;</span> <br />
                  <br />
                  <span className="text-danger">
                    {" "}
                    &lt;div id="root"&gt; &lt;/div&gt;
                  </span>{" "}
                  <br /> <br />
                  <span className="text-danger"> &lt;/body&gt;</span> <br />
                  <span className="text-warning">&lt;/html&gt;</span> <br />
                </pre>

                <h4 className="mt-4 pt-2">App.js</h4>
                <p className="text-muted">
                  Since we have a separate components file for each component,
                  we can work on them separately, or divide responsibilities
                  between different members of a team, if it is a group, rather
                  than an individual project. Let’s briefly take a look at our
                  App.js file
                </p>

                <pre className="code mb-0 mt-4 fw-bold p-4 bg-light rounded shadow text-muted">
                  <span className="text-danger">
                    import React, &#123; Component &#125; from 'react';
                  </span>{" "}
                  <br />
                  <span className="text-danger">
                    import &#123; Route, Switch, BrowserRouter as Router,
                    withRouter &#125; from 'react-router-dom';
                  </span>{" "}
                  <br />
                  <span className="text-danger">
                    import './Apps.scss';
                  </span>{" "}
                  <br />
                  <span className="text-danger">
                    import routes from './routes';
                  </span>{" "}
                  <br />
                  <br />
                  <span className="text-danger">
                    const Root = React.lazy(() =&gt;
                    import('./pages/Home/indexRoot'));
                  </span>{" "}
                  <br />
                  <span className="text-danger">
                    const PageComingSoon = React.lazy(() =&gt;
                    import('./pages/PageComingSoon'));
                  </span>{" "}
                  <br />
                  <br />
                  <span className="text-danger">
                    class App extends Component &#123;
                  </span>{" "}
                  <br />
                  <span className="text-danger"> render() &#123; </span> <br />
                  <span className="text-danger"> return ( </span> <br />
                  <span className="text-danger"> &#60;Router&#62;</span> <br />
                  <span className="text-danger">
                    {" "}
                    &#60;Route path="/page-comingsoon" component= &#123;
                    PageComingSoon &#125; /&#62;
                  </span>{" "}
                  <br />
                  <span className="text-danger"> &#60;/Router&#62;</span> <br />
                  <span className="text-danger"> );</span> <br />
                  <span className="text-danger"> &#125;</span> <br />
                  <span className="text-danger"> &#125;</span> <br />
                  <span className="text-danger">
                    export default withRouter(App);
                  </span>{" "}
                  <br />
                </pre>

                <h5 className="h6 mt-4">
                  <i className="mdi mdi-chevron-right"></i> Light Version :{" "}
                </h5>
                <div className="mt-4 p-4 bg-light rounded shadow">
                  <p className="mb-0 text-muted">
                    In order to have Light mode enabled, add{" "}
                    <code className="fw-bold">style.scss</code>
                  </p>
                </div>

                <h5 className="h6 mt-4">
                  <i className="mdi mdi-chevron-right"></i> RTL Version :{" "}
                </h5>
                <div className="mt-4 p-4 bg-light rounded shadow">
                  <p className="mb-0 text-muted">
                    In order to have RTL mode enabled, replace the reference of{" "}
                    <code className="fw-bold">style.scss</code> to{" "}
                    <code className="fw-bold">style-rtl.scss</code>
                  </p>
                </div>

                <h5 className="h6 mt-4">
                  <i className="mdi mdi-chevron-right"></i> Dark Version :{" "}
                </h5>
                <div className="mt-4 p-4 bg-light rounded shadow">
                  <p className="mb-0 text-muted">
                    In order to have Dark mode enabled, replace the reference of{" "}
                    <code className="fw-bold">style.scss</code> to{" "}
                    <code className="fw-bold">
                      style-dark-rtl.scss
                    </code>
                  </p>
                </div>

                <h5 className="h6 mt-4">
                  <i className="mdi mdi-chevron-right"></i> Dark RTL Version :{" "}
                </h5>
                <div className="mt-4 p-4 bg-light rounded shadow">
                  <p className="mb-0 text-muted">
                    In order to have Dark RTL mode enabled, replace the
                    reference of{" "}
                    <code className="fw-bold">style.scss</code> to{" "}
                    <code className="fw-bold">
                      style-dark-rtl.scss
                    </code>
                  </p>
                </div>

                <h5 className="h6 mt-4">
                  <i className="mdi mdi-chevron-right"></i> Change Theme Color :{" "}
                </h5>
                <div className="mt-4 p-4 bg-light rounded shadow">
                  <p className="mb-0 text-muted">
                    In order to change theme color, replace the default color
                    css of <code className="fw-bold">default.css</code>{" "}
                    to <code className="fw-bold">green.scss</code>(or
                    any other which you want from existing color css) in app.js
                    file
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Documentation;
