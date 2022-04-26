import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useEffect } from 'react';

const ItemCount= ({stock=0, initial=1, onAdd})=>{
    const [rate, setRate] = useState(0);  // HOOK

    useEffect(()=> {
        setRate(initial)
    }, [initial])

    
    const sumCarrito= ()=>{
        if(rate <stock){
            setRate(rate+1);
        }
    }

    const resCarrito=()=>{
        if(rate >initial+1){
            setRate(rate-1);
        }
    }

    return(
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <IconButton aria-label="add" onClick={sumCarrito}><AddCircleIcon fontSize="large" sx={{ color: "#00c853" }}></AddCircleIcon></IconButton>
            <p className='numberRate'>{rate}</p>
            <IconButton aria-label="remove" onClick={resCarrito}><RemoveCircleIcon fontSize="large" sx={{ color: "#00c853" }}/></IconButton>
            <IconButton aria-label="addShoppingCart" onClick={()=> onAdd(rate)} ><AddShoppingCartIcon fontSize="large" sx={{ color: "#00c853" }}/></IconButton>
            </ButtonGroup>

        </div>
    );
}

export default ItemCount;