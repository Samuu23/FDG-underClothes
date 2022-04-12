import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from "@mui/material/Button";
import { ProductCard, NikeLogo, Image, Info, TittlePS, SubTittlePS, PricePS, PriceUSDPS, PSHover } from "./ProductsStyle";

const Item=({ id, itemName, subName, price, priceUSD, imageProduct }) => {
    return(
         <ProductCard key={id}>
             <div className="d-flex justify-content-between">
             <NikeLogo src="./img/NikeLogo.png"/>
             <IconButton aria-label="remove"><AddShoppingCartIcon fontSize="large" sx={{ color: "#00c853" }}/></IconButton>
             </div>
             <div className="container d-flex justify-content-center align-items-center">
             <Image src={imageProduct}/>
             </div>
             <div>
             <Info>
                 <TittlePS>{itemName}</TittlePS>
                <SubTittlePS>{subName}</SubTittlePS>
                 <PricePS>$ {price}</PricePS>
                 <PriceUSDPS>{priceUSD} USD</PriceUSDPS>
             </Info>
             </div>
             <div>
                 <PSHover>
                     <Button variant="contained" color="success">Detalles</Button>
                 </PSHover>
             </div>
         </ProductCard>
    );
}

export default Item;