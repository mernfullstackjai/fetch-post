import React, { useState } from 'react'

const CounterFunctionalComponent = () => {
    const [CountValue,setCountValue]=useState(0)
    const incrementfunction=()=>{
        setCountValue(CountValue+1)
    }
    const decrementfunction=()=>{
        setCountValue(CountValue-1)
        }
  return (
    <React.Fragment>
        <button onClick={decrementfunction}> -</button>
        {CountValue}
        <button onClick={incrementfunction}> +</button>

      </React.Fragment>
  )
}

export default CounterFunctionalComponent