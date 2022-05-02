 import ItemCount from "./ItemCount";
import { ItemDetailDiv, DetailPhotoDiv, ItemDetailInfoDiv, DetailH2, DetailSubtittle, DetailStock, DetailBrand, DetailPrice, DetailPriceUSD} from "./ProductsStyle";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
 import ItemCheckout from "./ItemCheckout"
import { CartContext } from "./CartContext";


const ItemDetail=({items})=>{
    const [itemCount, setItemCount]= useState(0)

    const test= useContext(CartContext)

    const onAdd= (qty)=>{
        alert("agregaste "+ qty +" producto/s")
        setItemCount(qty)
        test.addToCart(items)
    }
    return(
        <ItemDetailDiv>
        <div className="container d-flex justify-content-center align-items-center">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                <DetailPhotoDiv src={items.DetailImage}/>
                <ItemDetailInfoDiv>
                    <DetailH2>{items.itemName}</DetailH2>
                    <DetailSubtittle>{items.subName}</DetailSubtittle>
                    <DetailBrand>Marca: {items.brand}</DetailBrand>
                    <DetailStock>Stock: {items.stock}</DetailStock>
                    <DetailPrice>$ {items.price}</DetailPrice>
                    <DetailPriceUSD>{items.priceUSD} USD</DetailPriceUSD>
                    <div className="container d-flex justify-content-center align-items-center m-4">
                    <Button variant="contained" color="success" size="large">Comprar</Button>
                    </div>
                    <div className="container-fluid d-flex justify-content-center align-items-center m-4">
                        {
                         itemCount===0
                         ? <ItemCount  stock={items.stock} initial={itemCount} onAdd={onAdd}/>
                         : <ItemCheckout/>
                        }
                    </div>
                </ItemDetailInfoDiv>
                </div>
        </div>        
            </ItemDetailDiv>
    );
}

export default ItemDetail