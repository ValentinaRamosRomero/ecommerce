import React from 'react';
import "../Styles/Footer.css";
import { LuMilk, LuShirt } from "react-icons/lu";
import { TbShirt } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDiscount } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
//Video 12 Min 12
export const Footer = () => {
  return (
    <>
    <footer>
        <div className='container'>
            <div className='topInfo row'>
                <div className='col d-flex align-items-center'>
                    <span><LuShirt/></span>
                    <span className='ml-2'>Cada día productos frescos</span>
                </div>
                <div className='col d-flex align-items-center'>
                    <span><TbTruckDelivery/></span>
                    <span className='ml-2'>Envíos gratis por compras mayores a $100.000</span>
                </div>
                <div className='col d-flex align-items-center'>
                    <span><MdOutlineDiscount/></span>
                    <span className='ml-2'>Megadescuentos diarios</span>
                </div>
                <div className='col d-flex align-items-center'>
                    <span><AiOutlineDollarCircle /></span>
                    <span className='ml-2'>El mejor precio del mercado</span>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
