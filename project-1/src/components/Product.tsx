import type { ReactElement } from "react"
import type { ReducerAction, ReducerActionType } from "../context/CartProvider"
import type { ProductType } from "../context/ProductsProvider"

type PropsType = {
    product: ProductType, 
    dispatch: React.ActionDispatch<[action: ReducerAction]>,
    REDUCER_ACTIONS: ReducerActionType, 
    inCart: boolean
}

const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType): ReactElement => {
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img); 

    const onAddToCart = () => dispatch({type: REDUCER_ACTIONS.ADD, payload: {...product, qty: 1}})

    const itemInCart = inCart ? '-> Item in Cart' : null; 

    const content = (
        <article>
            <h3>{product.name}</h3>
            <img src={img} alt={product.name}/>
            <p>
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.price)}
                {itemInCart}
                <button onClick={onAddToCart}>Add to Cart</button>
            </p>
        </article>
    )

  return content
}

export default Product