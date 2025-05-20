import { useContext } from "react";
import { type UseProductContextType } from "../context/ProductsProvider";
import ProductsContext from "../context/ProductsProvider";

const useProducts = (): UseProductContextType => {
    return useContext(ProductsContext) 
}

export default useProducts; 