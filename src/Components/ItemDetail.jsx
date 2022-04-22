import ItemCount from "./ItemCount";
import { ItemDetailDiv, DetailPhotoDiv, ItemDetailInfoDiv, DetailH2, DetailSubtittle, DetailStock, DetailBrand, DetailPrice, DetailPriceUSD} from "./ProductsStyle";
import { Button } from "@mui/material";


const ItemDetail=({items})=>{

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
                    <ItemCount/>
                    </div>
                </ItemDetailInfoDiv>
                </div>
        </div>        
            </ItemDetailDiv>
    );
}

export default ItemDetail