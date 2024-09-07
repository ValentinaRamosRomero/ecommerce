import React, { useState } from 'react'
import { Sidebar } from '../Components/Sidebar'
import "../Styles/Listing.css";
import banner7 from "../Images/banner7.webp";
import { FiMenu } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { TbLayoutGridFilled } from "react-icons/tb";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ProductItem } from '../Components/ProductItem';

import Pagination from '@mui/material/Pagination';


export const Listing = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('four');
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <section className='product_Listing_Page'>
                <div className='container'>
                    <div className='productListing d-flex'>
                        <Sidebar />

                        <div className='content_right'>
                            <img src={banner7} className='w-100' style={{ borderRadius: '8px' }} />

                            <div className='showBy mt-3 mb-3 d-flex align-items-center'>
                                <div className='d-flex align-items-center btnWrapper'>
                                    <Button className={productView==='one' && 'act'} onClick={()=>setProductView('one')}><FiMenu /></Button>
                                    <Button className={productView==='two' && 'act'} onClick={()=>setProductView('two')}><TbLayoutGridFilled /></Button>
                                    <Button className={productView==='three' && 'act'} onClick={()=>setProductView('four')}><CgMenuGridR /></Button>
                                    <Button className={productView==='four' && 'act'} onClick={()=>setProductView('three')}><TfiLayoutGrid4Alt /></Button>
                                   
                                </div>
                                <div className='ml-auto showByFilter'>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        Show 9 <FaAngleDown />
                                    </Button>
                                    <Menu
                                        className='w-100 showPerPageDropdown'
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropdown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>9</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                    </Menu>
                                </div>

                            </div>

                            <div className='productListing'>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                            </div>
                            
                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                <Pagination count={10} color="primary" />
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
