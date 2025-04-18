import React from 'react'
import ArrowBtn from './ArrowBtn'
import "../body/inputBody.css"
import CodeCompiler from './CodeCompiler'

const InputBody = ({ onNext, onPrevious, highlightedLine }) => {
    return (
        <div className='inputBody'>
            
            <div className='userInputText'>
                
                    <CodeCompiler   highlightedLine={highlightedLine}  ></CodeCompiler>
                  
              

            </div>
            <div className='userInputBtn'>
                        <ArrowBtn icons="fa-solid fa-circle-up" onClick={onPrevious}   ></ArrowBtn>
                        <ArrowBtn icons="fa-solid fa-circle-down" onClick={onNext}  ></ArrowBtn>
            </div>

        </div>
    )
}

export default InputBody
