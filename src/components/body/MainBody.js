import React, { useState } from 'react'
import "../body/body.css"
import OutputBody from './OutputBody'
import InputBody from './InputBody'
import jsonData from "../../Data/finaldata.json"

/////////////////////////////////////////////////////

const validKeys = Object.keys(jsonData).filter(key => Object.keys(jsonData[key]).length > 0);

/////////////////////////////////////////////////////

const MainBody = () => {


    //this 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentInd, setCurrentInd] = useState(0);
    const [showPopup, setShowPopup] = useState(true);

    const handleNext = () => {
        if (currentIndex < validKeys.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }

        if (currentIndex < validKeys.length - 1) {
            setCurrentInd(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }

        if (currentIndex > 0) {
            setCurrentInd(prev => prev - 1);
        }
    };
//that



    return (
       <div className='mainBody'>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>🚧 Maintenance Notice</h3>
                        <p>
                            This website is currently under maintenance, so the full version is temporarily unavailable. 
                            <br />
                            You are currently viewing a beta version.
                        </p>
                        <button onClick={() => setShowPopup(false)}>Continue to Beta</button>
                    </div>
                </div>
            )}


            <InputBody  onNext={handleNext} onPrevious={handlePrevious}  highlightedLine={validKeys[currentIndex]} ></InputBody>
            <OutputBody currentData={jsonData[validKeys[currentIndex]]}  ></OutputBody>
       </div>
    )
}

export default MainBody
