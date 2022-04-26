import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ItemCheckout = ()=> {
    return(
        <>
        <Link to="/Cart"><Button variant="contained" color="success" size="large">Checkout</Button></Link>
        </>
    )
}

export default ItemCheckout;