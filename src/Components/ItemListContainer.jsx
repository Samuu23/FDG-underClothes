import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/products";
import ItemList from "./ItemList";

const ItemListContainer = ()=> {
    
    const [products, setProducts] = useState ([])

    const {nameCategory}=useParams();

    useEffect(()=>{
        if(nameCategory===undefined){
            async function productsData(){
                let dataProducts= await getData();
                setProducts(dataProducts)
            }
            productsData()
        }else{
            async function productsDataFil(){
                let dataProductsFil = await getData();
                let dataFilter= dataProductsFil.filter(item => item.category === nameCategory)
                setProducts(dataFilter);
            }
            productsDataFil();
        }       
    }, [nameCategory])
    return(
        <>
        <ItemList  items={products}/>
        </>
    );
}

export default ItemListContainer;