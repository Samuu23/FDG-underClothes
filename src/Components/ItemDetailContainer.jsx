import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getData } from "../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer= ()=> {

const [prodDetail, setProdDetail] = useState ({})

const {ItemId}=useParams();
    
    useEffect(()=>{
    if(ItemId===undefined){
        console.log("error")
    }else{
        async function DataDetail(){
            let dataProductsDetail= await getData();
            let dataDetailFind= dataProductsDetail.find(item => item.id === parseInt(ItemId));
            setProdDetail(dataDetailFind);
        }
        DataDetail()
    }
}, [ItemId])

return(
    <>
    <ItemDetail items={prodDetail}/>
    </>
);

}


export default ItemDetailContainer;