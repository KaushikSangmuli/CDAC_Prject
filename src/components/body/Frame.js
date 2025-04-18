import React from 'react'

const Frame = ({ className, topLeft, topRight, bottomLeft, bottomRight, children }) => {
    return (
        <div className={className}>
            {/* Top Section - Function Name & Return Type */}
            <div className="topRow">
                <div className="topLeft"><span>Name : {topLeft}</span></div>
                <div className="topRight">returns {topRight}</div>
            </div>

            {/* Middle Section - Nested Variables */}
            {children && <div className="middleRow">{children}</div>}

            {/* Bottom Section - Parent Information */}
            <div className="bottomRow">
                <div className="bottomLeft">{bottomLeft}</div>
                <div className="bottomRight">{bottomRight}</div>
            </div>
        </div>
    );
};

export default Frame
