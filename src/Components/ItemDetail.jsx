import ItemCount from "./ItemCount";
import { ItemDetailDiv, DetailPhotoDiv, ItemDetailInfoDiv, DetailH2, DetailSubtittle, DetailStock, DetailBrand, DetailPrice, DetailPriceUSD} from "./ProductsStyle";
import { Button } from "@mui/material";


const ItemDetail=({DetailItems})=>{

    return(
        <ItemDetailDiv key={DetailItems.id}>
        <div className="container d-flex justify-content-center align-items-center">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                <DetailPhotoDiv src={DetailItems.DetailImage}/>
                <ItemDetailInfoDiv>
                    <DetailH2>{DetailItems.itemName}</DetailH2>
                    <DetailSubtittle>{DetailItems.subName}</DetailSubtittle>
                    <DetailBrand>Marca: {DetailItems.brand}</DetailBrand>
                    <DetailStock>Stock: {DetailItems.stock}</DetailStock>
                    <DetailPrice>$ {DetailItems.price}</DetailPrice>
                    <DetailPriceUSD>{DetailItems.priceUSD} USD</DetailPriceUSD>
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