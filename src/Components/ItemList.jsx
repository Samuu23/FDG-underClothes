import Item from "./Item";
import { ProductsContainer } from "./ProductsStyle";


const ItemList=({items})=> {
 return(
     <>
        <ProductsContainer>
                {
                    items.map((product)=> (
                        <Item key={product.id} {...product} />
                    ))
                }
        </ProductsContainer>
     </>
 );
}

export default ItemList