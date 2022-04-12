import * as React from 'react';
import Menu from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <>
    <Menu />
    <ItemListContainer />
    </>
  );
}
export default App;