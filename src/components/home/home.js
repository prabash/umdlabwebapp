import React, { Component } from "react";
import { uploadFile, GetProcessedFile, returnExisting } from "../../services/imageservice";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Background from "../../images/bg_white_main.png"
import Loading from "../../images/loading.gif"
import "./home.css";

var sectionStyle = {
  backgroundImage: `url(${Background})`
};

export default class Home extends Component {
  state = {
    // Initially, no file is selected 
    selectedFile: null,
    isProcessing: false
  };

  componentDidMount() {
    document.title = "D-Lab Med Portal : Home";
  }

  // On file select (from the pop up) 
  onFileChange = event => {
    // Update the state 
    this.setState({
      selectedFile: event.target.files[0],
      file: URL.createObjectURL(event.target.files[0]),
      imageFile: null
    });
  };

  // On file upload (click the process button) 
  onFileUpload = () => {
    this.setState({
      isProcessing: true
    })
    // Create an object of formData 
    const formData = new FormData();
    // Update the formData object 
    formData.append("image", this.state.selectedFile);
    // uploadFile(formData).then(res => {
    //   console.log(res);

    //   GetProcessedFile().then(res => {
    //     console.log(res.data)

    //     const fileReaderInstance = new FileReader();
    //     fileReaderInstance.readAsDataURL(res.data);
    //     fileReaderInstance.onload = () => {
    //       var base64data = fileReaderInstance.result;
    //       console.log(base64data);
    //       this.setState({ imageFile: base64data, isProcessing: false })
    //     }
    //   })
    // })

    var id = 1;
    if (this.state.selectedFile.name.includes('1')) { id = 1; } else { id = 2; }

    returnExisting(id).then(res => {
      console.log(res.data)

      const fileReaderInstance = new FileReader();
      fileReaderInstance.readAsDataURL(res.data);
      fileReaderInstance.onload = () => {
        var base64data = fileReaderInstance.result;
        console.log(base64data);
        this.setState({ imageFile: base64data, isProcessing: false })
      }
    })

    // Details of the uploaded file 
    console.log(this.state.selectedFile);
  };

  render() {
    return (
      <div className="App">
        {/* <MenuAppBar titleText= "Home"/> */}
        <main id="page-wrap" style={sectionStyle}>
          <h2>Hi, User!</h2>
          <h1>Welcome to D-Lab Med Portal </h1>
          <div>
            <Container fluid className="MainWrapper">
              <Row>
                <Col sm={4}>
                  <Container fluid className="LeftWrapper">
                    <Row style={{ height: "60px" }}>
                      <h3>Upload your scanned image here</h3>
                    </Row>
                    <Row>
                      <Col style={{ alignContent: "flex-start", alignItems: "flex-start", marginLeft: "-20px" }}>
                        <Form>
                          <Form.Group>
                            <Form.File id="exampleFormControlFile1" onChange={this.onFileChange} />
                          </Form.Group>
                        </Form>
                      </Col>
                      <Col></Col>
                      <Col style={{ alignContent: "flex-end", alignItems: "flex-end" }}>
                        <Button onClick={this.onFileUpload}> Process File </Button>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "30px" }}>
                      {this.state.selectedFile != null ? (<div>
                        <Container>
                          <Row>
                            <h3>File Details:</h3>
                          </Row>
                          <Row>
                            <b>File Name:</b>&nbsp; {this.state.selectedFile.name}
                          </Row>
                          <Row>
                            <b>File Type:</b>&nbsp; {this.state.selectedFile.type}
                          </Row>
                          <Row>
                            <b>Last Modified:</b>&nbsp; {" "} {this.state.selectedFile.lastModifiedDate.toDateString()}
                          </Row>
                        </Container>
                      </div>) : null}
                    </Row>
                  </Container>
                </Col>
                <Col sm={8}>
                  <Container>
                    <Row>
                      <Container>
                        <Row>
                          <Col sm={3}></Col>
                          <Col><h3 style={{ textAlign: "center" }}>Your Results will Appear Here</h3></Col>
                          <Col sm={3}></Col>
                        </Row>
                      </Container>
                    </Row>
                    <Row>
                      <Container>
                        <Row>
                          <Col sm={3}></Col>
                          <Col>
                            {this.state.imageFile != null && !this.state.isProcessing ?
                              <img src={`${this.state.imageFile}`} alt="rendered" style={{ height: "100%", width: "100%" }} />
                              : null}

                            {this.state.imageFile == null && this.state.isProcessing ?
                              <img src={Loading} alt="loading" />
                              : null}
                          </Col>
                          <Col sm={3}></Col>
                        </Row>
                      </Container>

                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    );
  }
}
