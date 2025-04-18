import React from 'react'

import "../body/outputBody.css"

import Global from './Global'
import Stack3 from './Stack3'

import Heap from './Heap'
const OutputBody = ( { currentData } ) => {
    return (
        <div className='outputBody'>
                <div className='upperBody'>
                    
                  <Stack3  data={currentData}  ></Stack3>
                   <Heap></Heap>
                </div>
                <div className='lowerBody'>
                    
                    <Global></Global>
                    

                </div>



        </div>
    )
}

export default OutputBody
