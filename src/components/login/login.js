import React, { Component } from "react";
import Background from "../../images/bg_white.png"
import "./login.css";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

var sectionStyle = {
    backgroundImage: `url(${Background})`,
};


export default class Login extends Component {
    componentDidMount() {
        document.title = "DynoSchedule : Login";
    }
    render() {
        return (
            <div className="App">
                <main id="page-wrap" style={sectionStyle}>
                    <h1 style={{marginTop: "40px"}}>Login to D-Lab Med Portal </h1>


                    <div>
                        <Container fluid className="LoginWrapper">
                            <Row>
                                <Col></Col>
                                <Col>
                                    <Container>
                                        <Row style={{ height: "100px"}}></Row>
                                        <Row>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    placeholder="Username"
                                                    aria-label="Username"
                                                />
                                            </InputGroup>
                                        </Row>
                                        <Row>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    placeholder="Password"
                                                    aria-label="Password"
                                                />
                                            </InputGroup>
                                        </Row>
                                        <Row>
                                            <NavLink to="/home" style={{ width: "100%"}}>
                                                <Button variant="primary" size="lg" block>
                                                    Log In
                                                </Button>

                                            </NavLink>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </div>


                </main>
            </div>
        );
    }
}
