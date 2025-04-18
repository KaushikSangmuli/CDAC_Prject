import React from 'react'

// import FunctionsData from "../../Data/functions.json"

// import Frame from './Frame'

import FunctionWithVar from "../../Data/functionshavingvar.json"
import Frame from './Frame'

import "../body/test.css"
import ShowVariable from './ShowVariable'

const Stack = () => {
    return(
        <div className='stackBody'>
        {FunctionWithVar.map((fun, index) => (
            <Frame
                key={index}
                className="funCSS"
                topLeft={fun.name}
                topRight={fun.return}
                bottomLeft={fun.parent}
            >
                {/* If function has variables, they go inside the middle section */}
                {fun.body && fun.body.length > 0 && (
                    <div className="functionChildren">
                        {fun.body.map((variable, varIndex) => (
                            <ShowVariable
                                    key={varIndex}
                                    className="varCSS"
                                    varName={variable.name}
                                    varType={variable.type}
                                    varValue={variable.size}
                            ></ShowVariable>
                        ))}
                    </div>
                )}
            </Frame>
        ))}
    </div>
    )
}

export default Stack
