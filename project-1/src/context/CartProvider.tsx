import { useMemo, useReducer, createContext, type ReactElement } from "react";

export type CartItemType = {
    sku: string, 
    name: string, 
    price: number, 
    qty: number 
}

type cartStateType = {cart: CartItemType[]}; 

const initCartState: cartStateType = {cart: []}; 

const REDUCER_ACTION_TYPE = {
    ADD: "ADD", 
    REMOVE: "REMOVE", 
    QUANTITY: "QUANTITY", 
    SUBMIT: "SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE; 

export type ReducerAction = {
    type: string, 
    payload? : CartItemType
}


const reducer = (state: cartStateType, action: ReducerAction): cartStateType => {
    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD: {
            if(!action.payload){
                throw new Error('action.payload is missing in ADD action!');
            }
            const {sku, name, price} = action.payload;
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku); 
            const itemExists: CartItemType | undefined = state.cart.find(item=>item.sku == sku);
            const qty: number = itemExists ? itemExists.qty + 1 : 1;  
            return {...state, cart: [...filteredCart, {sku, name, price, qty}]}; 
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if(!action.payload){
                throw new Error('action.payload is missing in REMOVE action!');
            }
            const {sku} = action.payload; 
            const filteredItems: CartItemType[] = state.cart.filter(item => item.sku !== sku); 
            return {...state, cart: [...filteredItems]}; 
            //! return {...state, cart: filteredItems};  
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if(!action.payload){
                throw new Error('action.payload is missing in QUANTITY action!');
            }

            const {sku, qty} = action.payload; 
            const itemsExist: CartItemType | undefined = state.cart.find(item => item.sku !== sku); 
            if(!itemsExist){
                throw new Error('Items must exist in order to update quantity');
            }

            const updatedItem: CartItemType = {...itemsExist, qty}; 

            const filteredItems: CartItemType[] = state.cart.filter(item => item.sku !== sku); 

            return {...state, cart: [...filteredItems, updatedItem]}; 
            
             
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return {...state, cart: []}; 
        }
        default: 
        throw new Error('Unidentified reducer action type!'); 
    }
}

const useCartContext = (initCartState: cartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);  
    
    // REDUCER_ACTIONS will not be re-rendered 
    const REDUCER_ACTIONS = useMemo((): ReducerActionType => {
        return REDUCER_ACTION_TYPE; 
    }, [])

    // number of total items 
    const totalItems: number = state.cart.reduce((prevValue, cartItem)=>{
        return prevValue + cartItem.qty; 
    }, 0)
    
    // currency format 
    const totalPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(
        state.cart.reduce((prevVal, cartItem) => {
            return prevVal + (cartItem.qty * cartItem.price);
        },0)
    );  

    // exclude last 4 digits 
    const cart = state.cart.sort((a,b) => {
        const itemA = Number(a.sku.slice(-4))
        const itemB = Number(b.sku.slice(-4))
        return itemA - itemB; 
    })

    //using dispatch because it keeps referential equality 
    return {dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart}
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
    dispatch: () => {}, 
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE, 
    totalItems: 0, 
    totalPrice: '', 
    cart: [] 
}

export const CartContext = createContext<UseCartContextType>(initCartContextState); 

type ChildrenType = {children?: ReactElement | ReactElement[]} 


// {children} : ChildrenType
// assign type for whole props object  
export const CartProvider = ({children} : ChildrenType): ReactElement =>{
    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext; 