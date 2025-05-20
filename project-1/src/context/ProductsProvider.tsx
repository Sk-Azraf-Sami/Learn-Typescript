import {createContext, useEffect, useState, type ReactElement } from "react";

export type ProductType = {
    sku: string, 
    name: string, 
    price: number 
}


const initState: ProductType[] = []; 
// initial state 
// array of all products 
// const initState: ProductType[] = [
//         {
//             "sku": "item0001",
//             "name": "Widget",
//             "price": 9.99
//         },
//         {
//             "sku": "item0002",
//             "name": "Premium Widget",
//             "price": 19.99
//         },
//         {
//             "sku": "item0003",
//             "name": "Deluxe Widget",
//             "price": 29.99
//         }
// ];

// create a object 
export type UseProductContextType = {products: ProductType[]}; 

const initContextState: UseProductContextType = {products: []}; 

const ProductsContext = createContext<UseProductContextType>(initContextState); 

type ChildrenType = {children?: ReactElement | ReactElement[]}; 

export const ProductsProvider = ({children}: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState);
    
    useEffect(() => {
        const fetchProducts = async (): Promise<void> => {
            
            //! To start JSON server 
            // npx json-server -w data/products.json -p 3500
            const response = await fetch('http://localhost:3500/products') ;
            if (response.ok) {
                const productsList: ProductType[] = await response.json();
                setProducts(productsList);
            } else {
                // handle error as needed
                setProducts([]);
            }
        };
        fetchProducts();
    }, []);
    
    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}


export default ProductsContext; 