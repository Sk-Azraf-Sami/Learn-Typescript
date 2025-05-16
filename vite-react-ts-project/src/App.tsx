import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import CounterTwo from "./components/CounterTwo";

function App() { 
  const [count, setCount] = useState(0); 

  return (
    <>
      <Heading title={"Hello"}/>
      <Section title="My Bangladesh">This is content</Section>
      <Counter/>
      <CounterTwo setCount={setCount}>Count for "CountTwo" is {count}</CounterTwo>
    </>
  )
}

export default App
