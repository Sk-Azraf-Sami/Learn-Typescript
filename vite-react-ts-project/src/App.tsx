import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import CounterTwo from "./components/CounterTwo";
import List from "./components/List";
import HooksExample from "./components/HooksExample";

function App() { 
  const [count, setCount] = useState(0); 

  return (
    <>
      <Heading title={"Hello"}/>
      <Section title="My Bangladesh">This is content</Section>
      <Counter/>
      <CounterTwo setCount={setCount}>Count for "CountTwo" is {count}</CounterTwo>
      <List items={["coffee", "cake", "chicken"]} render={(item: string) => <span>{item}</span>}/>
      <HooksExample/>
    </>
  )
}

export default App
