import React from 'react'


import ShowVariable from './ShowVariable'

const Global = () => {
    return (
        <div className='gobalBody'>
            {/* <ShowVariable className="varCSS" varName="Integer" varScope="main" varSize="8 byte"></ShowVariable> */}
            <ShowVariable className="varCSS" varName="Kaushik" varType="integer" varValue="112"  ></ShowVariable>
        </div>
    )
}

export default Global
