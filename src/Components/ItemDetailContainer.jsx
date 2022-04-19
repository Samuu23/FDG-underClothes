import { useEffect, useState } from "react"
import { GetDataDetail } from "../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer= (DetailItems)=> {

const [ProdDetail, useProduDetail] = useState([]);

useEffect(()=>{
    async function DataDetail(){
        let dataProductsDetail= await GetDataDetail()
        useProduDetail(dataProductsDetail) 
    }
    DataDetail()
}, [])


return(
    <>
    <ItemDetail DetailItems={ProdDetail}/>
    </>
);

}


export default ItemDetailContainer;