import { type ReactNode } from "react"
import { useCounter, useCounterText } from "../context/CounterContext"

interface childType {
    children: (num: number) => ReactNode
}

const CounterContextFour = ({children}: childType) => {
    const {count, increment, decrement} = useCounter(); 
    const {text, handleTextInput} = useCounterText(); 

  return (
     <>
    <h1>{children(count)}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <br/>
    <br/>
    <input type="text" onChange={handleTextInput}/>
    <h2>{text}</h2>
    </>
  )
}

export default CounterContextFour