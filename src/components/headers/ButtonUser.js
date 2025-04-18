import React from 'react'

const ButtonUser = ({btnClass , btnName , clickFun}) => {
    return (
        <div>
            <button className={btnClass} onClick={clickFun} > {btnName}</button>


        </div>
    )
}

export default ButtonUser
