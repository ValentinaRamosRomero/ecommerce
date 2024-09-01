import React from 'react';
import "../Styles/ProductItem.css";
import lechera from "../Images/lechera.jpg";
import { Button } from '@mui/material';
import { TfiFullscreen } from "react-icons/tfi";
import Rating from '@mui/material/Rating';
import { FaRegHeart } from "react-icons/fa";


export const ProductItem = () => {
    return (
        <>
            <div className='item productItem'>
                <div className='imgWrapper'>
                    <img src={lechera} />
                    <span className='badge badge-primary'>28%</span>
                    <div className='actions'>
                        <Button><TfiFullscreen /></Button>
                        <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                    </div>
                </div>
                <div className='info'>
                    <h4>Leche Condensada LA LECHERA</h4>
                    <span className='text-success d-block'>En stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                </div>

                <div className='d-flex'>
                    <span className='oldPrice'>$13.950</span>
                    <span className='netPrice text-danger ml-3'>$13.000</span>
                </div>

            </div>

         
        </>
    )
}
