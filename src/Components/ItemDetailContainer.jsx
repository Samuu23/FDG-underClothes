import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/FireBaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer= ()=> {

const [prodDetail, setProdDetail] = useState ({})

const {ItemId}=useParams();
    
    useEffect(()=>{
        const fetchFireStore= async ()=>{
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFireStore=querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
            }));
            const dataFind= dataFireStore.find(item => item.id===parseInt(ItemId))
            return dataFind
        }



    fetchFireStore()
    .then(result=> setProdDetail(result))
    .catch(err => console.log(err))     
}, [ItemId])

return(
    <>
    <ItemDetail items={prodDetail}/>
    </>
);

}


export default ItemDetailContainer;