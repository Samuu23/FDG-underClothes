import { useContext } from "react"
import { CartContext } from "./CartContext"
import ClearIcon from '@mui/icons-material/Clear';
import { CartContainer, InfoCartContainer, ItemCartContainer, ItemCartTittle, ItemCartAmount, ItemCartImage, ItemCartName,ItemCartType, ItemCartUnit,ItemCartPrice,ItemCartHeaderDiv, ItemCartMainDiv, InfoCartHeaderDiv, InfoCartTittle, InfoCartMainDiv, InfoCartItems, InfoCartTax, InfoCartTotalPrice, InfoCartTaxValue, InfoCartTotalPriceValue, InfoCartItemsPrice, InfoCartItemsValue} from "./ProductsStyle"
import { Button, IconButton } from "@mui/material";

const Cart = ()=>{
const test= useContext(CartContext)

    return(
        <div className="container d-flex justify-content-center align-items-center">                
                    <CartContainer>
                        <ItemCartContainer>
                        {
                            (test.cartList.length > 0)
                            ?   <ItemCartHeaderDiv>
                                    <div className=" d-flex justify-content-between align-items-center p-3">
                                        <ItemCartTittle>Carro De Compra</ItemCartTittle>
                                        <ItemCartAmount>
                                        <Button variant="contained" color="success" onClick={test.DeleteItems}>Eliminar Todos</Button>
                                        </ItemCartAmount>
                                    </div>
                                </ItemCartHeaderDiv>
                            : <h2 className="text-center">Tu Carrito Esta Vacio</h2>
                        }
                        {
                            test.cartList.length > 0 &&   
                                    test.cartList.map(item=>
                                        <ItemCartMainDiv>
                                    <div className="d-flex justify-content-between align-items-center p-3">
                                        <IconButton onClick={()=> test.DeleteItem(item.idItem)}><ClearIcon></ClearIcon></IconButton>
                                        <ItemCartImage src={item.imageItem}/>
                                        <div className="d-block">
                                        <ItemCartType>{item.categoryItem}</ItemCartType>    
                                        <ItemCartName>{item.nameItem} {item.snameItem}</ItemCartName>
                                        </div>
                                        <ItemCartUnit>{item.SelectedItem} unidad/es</ItemCartUnit>
                                        <div className="d-block">
                                        <ItemCartPrice>$ {item.priceItem} C/U</ItemCartPrice>
                                        <ItemCartPrice>{item.priceusdItem} USD</ItemCartPrice>
                                        </div>
                                    </div>
                                </ItemCartMainDiv>)
                        }
                </ItemCartContainer>
                    {
                        test.cartList.length > 0 &&
                        <InfoCartContainer>
                        <InfoCartHeaderDiv>
                        <div className="p-2 d-flex justify-content-start">
                        <InfoCartTittle>Orden De Compra</InfoCartTittle>
                        </div>
                    </InfoCartHeaderDiv>
                    <InfoCartMainDiv>
                        <div className="p-2 d-flex justify-content-end">
                        <InfoCartItems> {test.CalcTotalItems()} Item/s</InfoCartItems>
                        </div>
                        <div className="p-2 d-flex justify-content-between">
                        <InfoCartItemsPrice>Productos</InfoCartItemsPrice>
                            <InfoCartItemsValue>$ {test.CalcSubTotal()}</InfoCartItemsValue>
                        </div>
                        <div className="p-2 d-flex justify-content-between">
                            <InfoCartTax>Impuestos</InfoCartTax>
                            <InfoCartTaxValue>$ {test.CalcTax()}</InfoCartTaxValue>
                        </div>
                    </InfoCartMainDiv>
                    <div className="p-2 d-flex justify-content-between">
                            <InfoCartTotalPrice>TOTAL</InfoCartTotalPrice>
                            <InfoCartTotalPriceValue>$ {test.CalcTotal()}</InfoCartTotalPriceValue>
                            </div>
                    <div className="p-2 d-flex justify-content-end">
                    <InfoCartTotalPriceValue> {test.CalcTotalUSD()} USD</InfoCartTotalPriceValue>
                    </div>
                </InfoCartContainer>
                    }
                    </CartContainer>    
        </div>
    )
}

export default Cart