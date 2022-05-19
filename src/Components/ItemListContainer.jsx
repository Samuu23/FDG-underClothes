import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/FireBaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = ()=> {
    
    const [products, setProducts] = useState ([])

    const {nameCategory}=useParams();

    useEffect(()=>{
        const fetchFireStore= async ()=>{
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFireStore=querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }));
            const Filter= dataFireStore.filter(item => item.category === nameCategory)
           if(nameCategory===undefined){
               return dataFireStore
           }else{
               return Filter
           }

        }

        fetchFireStore()
        .then(result=> setProducts(result))
        .catch(err => console.log(err))     
    }, [nameCategory])
    return(
        <>
        <ItemList  items={products}/>
        </>
    );
}

export default ItemListContainer;