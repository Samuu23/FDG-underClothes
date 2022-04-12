import { useEffect, useState } from "react";
import { getData } from "../utils/products";
import ItemList from "./ItemList";

const ItemListContainer = ()=> {
    
    const [products, setProducts] = useState ([])

    useEffect(()=>{
        async function productsData(){
            let dataProducts = await getData();
            setProducts(dataProducts)
        }
        productsData();
    }, [])
    
    return(
        <>
        <ItemList  items={products}/>
        </>
    );
}

export default ItemListContainer;