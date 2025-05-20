import useCart from "../hooks/useCart"
import Nav from "./Nav"

type PropsType = {
  viewCart: boolean, 
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({viewCart, setViewCart}: PropsType) => {
  
  const {totalItems, totalPrice} = useCart(); 

  const content = (
    <header> 
      <div>
        <h1>RoBenShop</h1>
        <div>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice }</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart}/>
    </header>
  )

  return content; 
}

export default Header