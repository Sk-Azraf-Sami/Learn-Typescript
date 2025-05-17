import { useReducer, type ChangeEvent, type ReactNode } from "react"

// reducer hook 


const initState = {
    count: 0,
    text: ''

 }; 

// erasableSyntaxOnly = false 
const enum REDUCER_ACTION_TYPE {
    "INCREMENT", 
    "DECREMENT", 
    "NEW_INPUT"
}


interface ReducerAction{
    type: REDUCER_ACTION_TYPE, 
    payload?: string
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch(action.type){
        case REDUCER_ACTION_TYPE.INCREMENT:
            return {...state, count: state.count + 1};
        
        case REDUCER_ACTION_TYPE.DECREMENT: 
            return {...state, count: state.count - 1}; 

        case REDUCER_ACTION_TYPE.NEW_INPUT: 
            return {...state, text: action.payload ?? ''}
        
        default:
            throw new Error()
    }
}

interface childType {
    children: (num: number) => ReactNode
}

const CounterThree = ({children}: childType) => {
    const [state, dispatch] = useReducer(reducer, initState); 
    const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT}); 
    const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT}); 
    
    const handleTextInput = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.NEW_INPUT, 
            payload: e.target.value, 
        })
    }

  return (
    <>
    <h1>{children(state.count)}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <br/>
    <br/>
    <input type="text" onChange={handleTextInput}/>
    <h2>{state.text}</h2>
    </>
  )
}

export default CounterThree