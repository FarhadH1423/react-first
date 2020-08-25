import React from 'react'
import Digit from './Digit/Digit'

const CountDown=(props) =>{
    return(
        <div className="d-flex">
            <Digit color="palegreen" value="10"/>
            <Digit color="skyblue" value="12"/>
            <Digit color="salmon" value="58"/>
        </div>
    )
}

export default CountDown