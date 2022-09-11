import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
       {/* <Logo />*/}
          <Rank />
         <ImageLinkForm />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;

