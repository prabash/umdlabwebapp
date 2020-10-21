import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { helloWorldTest, uploadFile, ReturnFile } from "./services/imageservice";
import { saveAs } from 'file-saver';

class App extends Component {

  state = {
    // Initially, no file is selected 
    selectedFile: null
  };

  componentDidMount() {
    helloWorldTest('Prabash').then(res => {
      console.log(res.data)
    })

    
  }

  // On file select (from the pop up) 
  onFileChange = event => {
    // Update the state 
    ReturnFile().then(res => {
      console.log(res.data)
      //const file = new Blob([res.data], {type:'image/jpeg'})
      var FileSaver = require('file-saver');
      this.setState({imageFile : res.data})
      //FileSaver.saveAs(res.data);

      const fileReaderInstance = new FileReader();
      fileReaderInstance.readAsDataURL(res.data); 
      fileReaderInstance.onload = () => {
        var base64data = fileReaderInstance.result;                
        //console.log(base64data);
        this.setState({imageFile : base64data})
      }
    })

    this.setState({
      selectedFile: event.target.files[0],
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  // On file upload (click the upload button) 
  onFileUpload = () => {

    // Create an object of formData 
    const formData = new FormData();

    // Update the formData object 
    formData.append(
      "image", this.state.selectedFile
    );

    uploadFile(formData).then(res => {
      console.log(res);
    })

    ReturnFile().then(res => {

    })

    // Details of the uploaded file 
    console.log(this.state.selectedFile);

    // Request made to the backend api 
    // Send formData object 
    // axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after 
  // file upload is complete 
  fileData = () => {
    if (this.state.imageFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
          <div>
            <img src={`${this.state.imageFile}`} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {

    return (
      <div>
        <h1>UM D-LAB WEB PORTAL </h1>
        <h3> File Upload using React! </h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}> Upload! </button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default App;
