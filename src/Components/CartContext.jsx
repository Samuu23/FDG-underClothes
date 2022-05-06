import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider= ({children})=>{

    const [cartList, setCartList] = useState([]);


    const addToCart= (items, qty)=>{
        let found= cartList.find(item => item.idItem === items.id)

        if(found=== undefined){
            setCartList([
                ...cartList,
                {
                    idItem: items.id,
                    nameItem: items.itemName,
                    snameItem: items.subName,
                    brandItem: items.brand,
                    categoryItem: items.category,
                    priceItem: items.price,
                    priceusdItem: items.priceUSD,
                    imageItem: items.DetailImage,
                    SelectedItem: qty,
    
                }
            ])
        }else{ 
            found.SelectedItem += qty
        }
    }

        const CalcTotalItem=(idItem)=>{
            let index= cartList.map(items=> items.idItem).indexOf(idItem);
            return cartList[index].priceItem * cartList[index].SelectedItem
        }

        const CalcTotalItemUSD=(idItem)=>{
            let index= cartList.map(items=> items.idItem).indexOf(idItem);
            return cartList[index].priceusdItem * cartList[index].SelectedItem
        }

        const CalcSubTotal= ()=>{
            let CalcSubTotal= cartList.map(items=> CalcTotalItem(items.idItem));

            return CalcSubTotal.reduce((previousValue, currentValue)=> previousValue+currentValue)
        }

        const CalcSubTotalUSD= ()=>{
            let CalcSubTotalUSD= cartList.map(items=> CalcTotalItemUSD(items.idItem));

            return CalcSubTotalUSD.reduce((previousValue, currentValue)=> previousValue+currentValue)
        }

        const CalcTotal=()=>{
            let CalcTotal= CalcSubTotal()+CalcTax();
            return CalcTotal;
        }

        const CalcTax=()=>{
            return CalcSubTotal() * 0.21;
        }

        const CalcTotalUSD=()=>{
            return CalcSubTotalUSD();
        }

        const CalcTotalItems=()=>{
            let calcTotalItems= cartList.map(items=> items.SelectedItem)

            return calcTotalItems.reduce(((previousValue, currentValue)=> previousValue + currentValue),0)
        }
    return(
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            CalcTotalItem, 
            CalcTotalItemUSD, 
            CalcSubTotal,
            CalcSubTotalUSD,
            CalcTotal,
            CalcTotalUSD,
            CalcTotalItems,
            CalcTax,
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;