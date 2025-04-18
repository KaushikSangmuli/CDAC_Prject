import React, { useState } from 'react';
import jsonData from '../../Data/finaldata.json';
import Frame from './Frame';
import ShowVariable from './ShowVariable';
import '../body/test.css';

const Stack = ({data}) => {
    // Extract only valid keys (those that have function data)


    return (
        <div className='stackBody'>
            {/* Render the current functions */}
            {data.map((func, index) => (
                <Frame key={index} className='funCSS' topLeft={func.name} topRight={func.return}>
                    {func.body && func.body.length > 0 ? (
                        <div className='functionChildren'>
                            {func.body.map((variable, idx) => (
                                <ShowVariable
                                    key={idx}
                                    className='varCSS'
                                    varName={variable.name}
                                    varType={variable.type}
                                    varValue={variable.value}
                                />
                            ))}
                        </div>
                    ) : (
                        <p></p>
                    )}
                </Frame>
            ))}
      
           
        </div>
    );
};

export default Stack;
