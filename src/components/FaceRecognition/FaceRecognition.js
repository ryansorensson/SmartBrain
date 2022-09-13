import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imgURL, box}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id ="inputImage" alt ="" src = {imgURL} width ='500px' height ='auto'></img>
            </div>
            <div className="bounding-box" style ={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    );
}

export default FaceRecognition;