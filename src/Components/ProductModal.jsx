import { Button, Dialog } from '@mui/material'
import React from 'react'
import { IoClose } from 'react-icons/io5'


export const ProductModal = () => {
    return (
        <>
            <Dialog open={true}>
                <Button className='close_'><IoClose /></Button>
            </Dialog>
        </>
    )
}
