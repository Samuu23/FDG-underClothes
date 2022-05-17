import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from "@mui/material/Button";
import { ProductCard, BranchLogo, Image, Info, TittlePS, SubTittlePS, PricePS, PriceUSDPS, PSHover } from "./ProductsStyle";
import { Link } from "react-router-dom";

const Item=({ id, itemName, subName, price, priceUSD, imageProduct, brandImg }) => {
    return(
         <ProductCard key={id}>
             <div className="d-flex justify-content-between">
             <BranchLogo src={brandImg}/>
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
                     <Link to={`/Item/${id}`} style={{textDecoration: "none"}}><Button variant="contained" color="success">Detalles</Button></Link>
                 </PSHover>
             </div>
         </ProductCard>
    );
}

export default Item;