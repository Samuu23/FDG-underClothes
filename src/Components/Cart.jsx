import { useContext } from "react"
import { CartContext } from "./CartContext"
import { CartContainer, InfoCartContainer, ItemCartContainer, ItemCartTittle, ItemCartAmount, ItemCartImage, ItemCartName,ItemCartType, ItemCartUnit,ItemCartPrice,ItemCartHeaderDiv, ItemCartMainDiv, InfoCartHeaderDiv, InfoCartTittle, InfoCartMainDiv, InfoCartItems, InfoCartTax, InfoCartTotalPrice, InfoCartTaxValue, InfoCartTotalPriceValue, InfoCartItemsPrice, InfoCartItemsValue} from "./ProductsStyle"

const Cart = ()=>{
const test= useContext(CartContext)

console.log(test)
    return(
        <div className="container d-flex justify-content-center align-items-center">
            {
                test.cartList.length > 0 && (
                    <CartContainer>
                        <ItemCartContainer>
                        <ItemCartHeaderDiv>
                            <div className=" d-flex justify-content-between align-items-center p-3">
                            <ItemCartTittle>Shopping Cart</ItemCartTittle>
                        <ItemCartAmount>Items</ItemCartAmount>
                            </div>
                        </ItemCartHeaderDiv>
                        {
                            test.cartList.map(item=>
                                <ItemCartMainDiv>
                            <div className="d-flex justify-content-between align-items-center p-3">
                                <ItemCartImage src={item.DetailImage}/>
                                <div className="d-block">
                                <ItemCartType>Calzado</ItemCartType>    
                                <ItemCartName>{item.itemName} {item.subName}</ItemCartName>
                                </div>
                                <ItemCartUnit>3 unidad/es</ItemCartUnit>
                                <div className="d-block">
                                <ItemCartPrice>${item.price}</ItemCartPrice>
                                <ItemCartPrice>{item.priceUSD} USD</ItemCartPrice>
                                </div>
                            </div>
                        </ItemCartMainDiv>)
                        }
                        
                </ItemCartContainer>
                <InfoCartContainer>
                    <InfoCartHeaderDiv>
                        <div className="p-2 d-flex justify-content-start">
                        <InfoCartTittle>Orden De Compra</InfoCartTittle>
                        </div>
                    </InfoCartHeaderDiv>
                    <InfoCartMainDiv>
                        <div className="p-2 d-flex justify-content-end">
                        <InfoCartItems>3 Item/s</InfoCartItems>
                        </div>
                        <div className="p-2 d-flex justify-content-between">
                        <InfoCartItemsPrice>Productos</InfoCartItemsPrice>
                            <InfoCartItemsValue>$3000</InfoCartItemsValue>
                        </div>
                        <div className="p-2 d-flex justify-content-between">
                            <InfoCartTax>Impuestos</InfoCartTax>
                            <InfoCartTaxValue>$300</InfoCartTaxValue>
                        </div>
                    </InfoCartMainDiv>
                    <div className="p-2 d-flex justify-content-between">
                            <InfoCartTotalPrice>TOTAL</InfoCartTotalPrice>
                            <InfoCartTotalPriceValue>$5000</InfoCartTotalPriceValue>
                        </div>
                </InfoCartContainer>
                    </CartContainer>
                )
            }
        </div>
    )
}

export default Cart