import React from 'react'

export const ShowFunction = ({funName,funParent,funReturn,unused , className}) => {
    return (
        <div className={className}>
            <div className='topLeft'>{funName}</div>
            <div className='topRight'  > {funReturn}</div>
            <div className='bottomLeft'   >{funParent}</div>
            <div className='bottomRight'  >{unused}</div>
        </div>
    )
}
