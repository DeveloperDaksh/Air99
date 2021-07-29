import React, { Component } from "react";
import { Link } from "react-router-dom";

//Import Images
import logo from "../../../assets/images/logo-light.png";

class EmailConfirmation extends Component {
  componentDidMount() {
    document.body.style.fontFamily = "Nunito, sans-serif";
    document.body.style.fontSize = "15px";
    document.body.style.fontWeight = "400";
    document.body.style.color = "#161c2d";
  }

  componentWillUnmount() {
    document.body.style.fontFamily = "";
    document.body.style.fontSize = "";
    document.body.style.fontWeight = "";
    document.body.style.color = "";
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: '50px' }}>
          <table
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              maxWidth: "600px",
              border: "none",
              margin: "0 auto",
              borderRadius: "6px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 0 3px rgba(60, 72, 88, 0.15)",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#2f55d4",
                  padding: "3px 0",
                  lineHeight: "68px",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                <th scope="col">
                  <img src={logo} height="24" alt="Landrick" />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  style={{
                    padding: " 48px 24px 0",
                    color: "#161c2d",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Hello, Harry
                      </td>
              </tr>
              <tr>
                <td
                  style={{ padding: "15px 24px 15px", color: " #8492a6" }}
                >
                  Thanks for creating an Landrick account. To continue,
                  please confirm your email address by clicking the button
                  below :
                      </td>
              </tr>
              <tr>
                <td style={{ padding: "15px 24px", color: "#8492a6" }}>
                  <Link
                    to="#"
                    style={{
                      padding: "8px 20px",
                      outline: "none",
                      textDecoration: "none",
                      fontSize: "16px",
                      letterSpacing: "0.5px",
                      transition: "all 0.3s",
                      fontWeight: "600",
                      borderRadius: "6px",
                    }}
                    className="btn-primary"
                  >
                    Confirm Email Address
                        </Link>
                </td>
              </tr>

              <tr>
                <td style={{ padding: "15px 24px 0", color: "#8492a6" }}>
                  This link will be active for 30 min from the time this
                  email was sent.
                      </td>
              </tr>

              <tr>
                <td
                  style={{ padding: "15px 24px 15px", color: "#8492a6" }}
                >
                  Landrick <br /> Support Team
                      </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "16px 8px",
                    color: "#8492a6",
                    backgroundColor: "#f8f9fc",
                    textAlign: "center",
                  }}
                >
                  © 2021 Landrick.
                      </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default EmailConfirmation;
