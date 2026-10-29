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
                        <h3>👋 Welcome to the Memory Visualizer Demo</h3>
<p>
    This is the original C version of the project, running a pre-loaded sample program.
    Use the up/down arrows to step through it line by line and watch the call stack,
    variables, and memory change.
    <br /><br />
    A rebuilt Java version with a live execution engine is in progress.{" "}
    <a href="https://github.com/KaushikSangmuli/java-visualizer" target="_blank" rel="noopener noreferrer">
        View the Java version on GitHub
    </a>
</p>
<button onClick={() => setShowPopup(false)}>Start the Demo</button>
                    </div>
                </div>
            )}


            <InputBody  onNext={handleNext} onPrevious={handlePrevious}  highlightedLine={validKeys[currentIndex]} ></InputBody>
            <OutputBody currentData={jsonData[validKeys[currentIndex]]}  ></OutputBody>
       </div>
    )
}

export default MainBody
