import React, { useState } from 'react'
import "../Styles/ProductModal.css";
import { Button } from '@mui/material';
import { FaMinus, FaPlus } from 'react-icons/fa6';

export const QuantityBox = () => {
    const [inputVal, setinputVal] = useState(1);

    const minus = () => {
        if (inputVal > 0) {
            setinputVal(inputVal - 1);
        }
    }

    const plus = () => {
        setinputVal(inputVal + 1);
    }
    return (
        <>
            <div className='quantityDrop d-flex align-items-center'>
                <Button onClick={minus}><FaMinus /></Button>
                <input type="text" value={inputVal} />
                <Button onClick={plus}><FaPlus /></Button>
            </div>
        </>
    )
}

