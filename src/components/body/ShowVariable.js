import React from 'react'

const ShowVariable = ({className , varName , varType , varValue }) => {
    return (
        <div className={className}>
           <div className='varTop'>
                <span>{varName} </span>
                <span>{varType}</span>

           </div>
            <div className='varValue'>
                    <span>{varValue}</span>
            </div>
        </div>
    )
}

export default ShowVariable
