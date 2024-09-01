import { Button } from '@mui/material';
import React from 'react';
import { IoSearch } from "react-icons/io5";

export const SearchBox = () => {
    return (
        <>
            <div className='headerSearch ml-3 mr-3'>
                <input type='text' placeholder='Buscar Productos' />
                <Button><IoSearch /></Button>
            </div>
        </>
    )
}
