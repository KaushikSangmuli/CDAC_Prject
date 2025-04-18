import React from 'react'

const ArrowBtn = ({icons, onClick}) => {
    return (
        <div >
            <button  className={icons} id='btn' onClick={onClick} > </button>
        </div>
    )
}

export default ArrowBtn
