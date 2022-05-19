import { useContext } from "react"
import { CartContext } from "./CartContext"
import ClearIcon from '@mui/icons-material/Clear';
import { increment, serverTimestamp, updateDoc } from "firebase/firestore";
import db from "../utils/FireBaseConfig";
import { collection, setDoc, doc } from "firebase/firestore";

import { CartContainer, InfoCartContainer, ItemCartContainer, ItemCartTittle, ItemCartAmount, ItemCartImage, ItemCartName,ItemCartType, ItemCartUnit,ItemCartPrice,ItemCartHeaderDiv, ItemCartMainDiv, InfoCartHeaderDiv, InfoCartTittle, InfoCartMainDiv, InfoCartItems, InfoCartTax, InfoCartTotalPrice, InfoCartTaxValue, InfoCartTotalPriceValue, InfoCartItemsPrice, InfoCartItemsValue} from "./ProductsStyle"
import { Button, IconButton } from "@mui/material";

const Cart = ()=>{
const test= useContext(CartContext)
const CreateOrder=()=>{
    const ItemsFB= test.cartList.map(item=> ({
        id: item.idItem,
        tittle: item.nameItem,
        price: item.priceItem,
        SelectItems: item.SelectedItem
    }));

    test.cartList.forEach(async (item)=> {
        const itemRef= doc(db, "products", item.idItem)
        await updateDoc(itemRef, {
            stock: increment(-item.SelectedItem)
        })
    })


    let order={
    buyer: {
        name: "Samuel Arzelan",
        email: "samuelarzelan18@gmail.com",
        phone: "123456789",
        adress: "Salta 123"
    },
    date: serverTimestamp(),
    items: ItemsFB,
    total: test.CalcTotal(),
    }

    const CreateOrderFB= async()=> {
        const newOrderRef= doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef
    }

    CreateOrderFB()
    .then(result => alert('Tu orden a sido creada con exito. ID de la orden: '+result.id+'.'))
    .catch(err=> console.log(err))    

    test.DeleteItems()
    console.log(order)
}

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
                    <div className="p-2 d-flex justify-content-center">
                    <Button variant="outlined" color="success" onClick={CreateOrder} sx={{ color: "#fafafa" }}>Realizar Orden</Button>
                    </div>
                    </InfoCartContainer>
                    }
                    </CartContainer>    
        </div>
    )
}

export default Cart