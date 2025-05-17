import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import CounterTwo from "./components/CounterTwo";
import List from "./components/List";
import HooksExample from "./components/HooksExample";
import CounterThree from "./components/CounterThree";

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
      <CounterThree children={(num: number) => <>Current Count: {num}</>}/>
      {/*<CounterThree>{(num: number) => <>Current Count: {num}</>}</CounterThree>*/}
    </>
  )
}

export default App
