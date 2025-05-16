import {type ReactElement, type ReactNode } from "react"

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const CounterTwo = ({setCount, children}: CounterProps): ReactElement => {
  return (
     <>
     <h1>{children}</h1>
     <button onClick={()=>setCount(prev=>prev+1)}>+</button>
     <button onClick={()=>setCount(prev=>prev-1)}>-</button>
     </>
  )
}

export default CounterTwo