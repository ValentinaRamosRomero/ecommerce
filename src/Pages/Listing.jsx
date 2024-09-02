import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import "../Styles/Listing.css";
import banner7 from "../Images/banner7.webp";
import { FiMenu } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { PiDotsSixBold } from "react-icons/pi";
import { TbLayoutGridFilled } from "react-icons/tb";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { Button } from '@mui/material';

export const Listing = () => {
  return (
    <>
        <section className='product_Listing_Page'>
            <div className='container'>
                <div className='productListing d-flex'>
                    <Sidebar/>

                    <div className='content_right'>
                        <img src={banner7} className='w-100' style={{borderRadius:'8px'}}/>
                        
                        <div className='showBy mt-3 mb-3 d-flex align-items-center'>
                            <div className='d-flex align-items-center btnWrapper'></div>
                                <Button><FiMenu/></Button>
                                <Button><TbLayoutGridFilled/></Button>
                                <Button><TfiLayoutGrid4Alt/></Button>
                                <Button><CgMenuGridR/></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
