import * as React from 'react';
import Menu from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <>
    <Menu />
    {/* <ItemListContainer /> */}
    <ItemDetailContainer/>
    </>
  );
}
export default App;