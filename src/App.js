import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai, { FACE_DETECT_MODEL } from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: 'e9af5dd36fd84d73a8c935cab1316767'
});

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
      box: {},
    }
  }

calcualteFaceLocation = (data) => {
  const clarifyFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  console.log(clarifyFace);
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  console.log("width: " + width, "height: " + height);
  console.log("left col: " + clarifyFace.left_col * width);
  return {
    leftCol: clarifyFace.left_col * width,
    topRow: clarifyFace.top_row * height,
    rightCol: width - (clarifyFace.right_col * width),
    bottomRow: height - (clarifyFace.bottom_row * height)
  }  
}

displayFaceBox = (box) => {
  console.log("box", box);
  this.setState({box: box});
}

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onSubmit = () => {
  this.setState({imgURL: this.state.input});
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, 
       this.state.input)
    .then(response => this.displayFaceBox(this.calcualteFaceLocation(response)))
    .catch(err => console.log(err));
}

render() {
  return (
    <div className="App">
      <Navigation />
      {/* <Logo />*/}
        <Rank />
        <ImageLinkForm
        onInputChange = {this.onInputChange}
        onSubmit = {this.onSubmit}
        />
      <FaceRecognition box = {this.state.box} imgURL = {this.state.imgURL}/>
    </div>
  );
}
}

export default App;