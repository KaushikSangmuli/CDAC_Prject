import React from 'react'

// import FunctionsData from "../../Data/functions.json"

// import Frame from './Frame'
import jsonData from "../../Data/finaldata.json"
import FunctionWithVar from "../../Data/functionshavingvar.json"
import Frame from './Frame'

import "../body/test.css"
import ShowVariable from './ShowVariable'

const Stack = () => {
    return(
        <div className='stackBody'>
      {Object.keys(jsonData).map((key) => {
        if (!Array.isArray(jsonData[key])) return null; // Skip non-array values
        
        return (
          < >
           
            {jsonData[key].map((func, index) => (
              <Frame key={index} className="funCSS" topLeft={func.name} topRight={func.return}>
                {func.body && func.body.length > 0 ? (
                <div className='functionChildren'>
                  {func.body.map((variable, idx) => (
                    <ShowVariable key={idx}
                     className="varCSS" 
                     varName={variable.name}
                      varType={variable.type} 
                      varValue={variable.value} />
                  ))}
                </div>
                ) : (
                  <p></p>
                )}
              </Frame>
            ))}
          </>
        );
      })}
    </div>

    )
}

export default Stack
