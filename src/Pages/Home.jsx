import * as React from 'react';
import Menu from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../Components/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../Components/Cart';
import CartContextProvider from '../Components/CartContext';


const Home=()=> {
return(
    <CartContextProvider>
        <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path='/' element={<ItemListContainer />}></Route>
                    <Route path='/category/:nameCategory' element={<ItemListContainer />}></Route>
                    <Route path='/Item/:ItemId' element={<ItemDetailContainer />}></Route>
                    <Route path='/Cart' element={<Cart />}></Route>
                </Routes>
        </BrowserRouter>
    </CartContextProvider>
);
}

export default Home;

