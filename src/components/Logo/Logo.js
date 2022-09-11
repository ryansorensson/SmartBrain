import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25}}>
                <div style={{ height: '150px', width: '150px'}}>
                    <h1>Test</h1>
                </div>
             </Tilt>
        </div>
    );
}

export default Logo;