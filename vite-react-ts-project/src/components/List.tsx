import type { ReactNode } from "react"

interface ListProps<T>{
    items: T[], // array 
    render: (item: T) => ReactNode
}

// <T,>({items, render}: ListProps<T>)
// or <T extends {}>({items, render}: ListProps<T>)
const List = <T extends {}>({items, render}: ListProps<T>) => {
  return (
    <ul>
        {items.map((item,i)=>(
            <li key={i}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}

export default List