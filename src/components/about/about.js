import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../../images/bg_white_main.png"
import "./about.css";


var sectionStyle = {
  backgroundImage: `url(${Background})`
};



export default class About extends Component {
  componentDidMount() {
    document.title = "D-Lab Med Portal : About";
  }
  render() {
    return (
      <div className="App">
        <main id="page-wrap" style={sectionStyle}>
          <h1>About D-Lab Med Portal</h1>
          <div>

            <Container fluid className="MainWrapper">
              <Row style={{ height: "40px" }}>
                <Col sm={2}></Col>
                <Col>
                  <h4>D-Lab Med Portal allows you to upload a scanned image and display the processed result</h4>
                  <h4>Developed as a part of an assignment by G.B.Prabash Darshanapriya</h4>
                </Col>
                <Col sm={2}></Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    );
  }
}
