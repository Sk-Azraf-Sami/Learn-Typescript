import { useCallback, useEffect, useState, 
    type MouseEvent, type KeyboardEvent, 
    useMemo, useRef } from "react"


interface User{
    id: number, 
    username: string
}

// fibonacci 
// for expensive calculation 
// useMemo hook will be used 
type fibFunc = (n:number) => number; 
const fib: fibFunc = (n)=>{
    if(n<2) return n; 
    return fib(n-1) + fib(n-2); 
}

const myNum: number = 37; 

const HooksExample = () => {
    const [count, setCount] = useState(0); 
    const [users, setUsers] = useState<User[] | null>(null); 


    // using useEffect 
    useEffect(()=>{
        // as using strict mode in 'main.tsx', it will be called twice 
        console.log('mounting')
        console.log('Users', users); 

        return ()=>console.log('unmounting'); 

    },[users])

    // using callback hook for counting
    // only rerender 
     const plusCount = useCallback(()=>setCount(prev => prev+1), []); 
    // const plusCount = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void=>setCount(prev => prev+1), []); 

    // useMemo hook 
    const result = useMemo(()=>fib(myNum), [myNum]); 

    // useRef 
    const inputRef = useRef<HTMLInputElement>(null); 
    console.log(inputRef?.current);
    console.log(inputRef?.current?.value); 

  return (
    <>
    <h1>Hook Count Result: {count}</h1>
    <button onClick={plusCount}>+</button>
    <h2>Fibonacci Result: {result}</h2>
    <input ref={inputRef} type="text"/>
    </>
  )
}

export default HooksExample