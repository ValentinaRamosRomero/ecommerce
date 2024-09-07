import React, { useState } from 'react';
import "../Styles/Cart.css";
import Rating from '@mui/material/Rating';
import { IoIosClose } from "react-icons/io";

import { QuantityBox } from '../Components/QuantityBox';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { IoCartSharp } from "react-icons/io5";

export const Cart = () => {

    return (
        <>
            <section className='section cartPage'>
                <div className='container'>
                    <h2 className='hd mb-1'>Tu carrito</h2>
                    <p>Hay <b>3</b> productos en tu carro</p>
                    <div className='row'>
                        <div className='col-md-9 pr-5'>

                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th width="35%">Producto</th>
                                            <th width="15%">Precio Unitario</th>
                                            <th width="25%">Cantidad</th>
                                            <th width="15%">Subtotal</th>
                                            <th width="10%">Eliminar</th>
                                        </tr>
                                    </thead>


                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className='d-flex align-items-center cartItemimgWrapper'>
                                                    <div className='imgWrapper'>
                                                        <img src="https://exitocol.vtexassets.com/arquivos/ids/24447331/Uvas-Pasas-FRESCAMPO-200-gr-3226883_a.jpg?v=638609456037030000"
                                                            className='w-100' />
                                                    </div>

                                                    <div className='info px-3'>
                                                        <h6>
                                                            Uvas Pasas FRESCAMPO (200 gr)
                                                        </h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%">3.190</td>
                                        <td width="25%">
                                            <QuantityBox />
                                        </td>
                                        <td width="15%">3.190</td>
                                        <td width="10%"><span className='remove'><IoIosClose /></span></td>
                                    </tr>

                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className='d-flex align-items-center cartItemimgWrapper'>
                                                    <div className='imgWrapper'>
                                                        <img src="https://exitocol.vtexassets.com/arquivos/ids/24447331/Uvas-Pasas-FRESCAMPO-200-gr-3226883_a.jpg?v=638609456037030000"
                                                            className='w-100' />
                                                    </div>

                                                    <div className='info px-3'>
                                                        <h6>
                                                            Uvas Pasas FRESCAMPO (200 gr)
                                                        </h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%">3.190</td>
                                        <td width="25%">
                                            <QuantityBox />
                                        </td>
                                        <td width="15%">3.190</td>
                                        <td width="10%"><span className='remove'><IoIosClose /></span></td>
                                    </tr>

                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className='d-flex align-items-center cartItemimgWrapper'>
                                                    <div className='imgWrapper'>
                                                        <img src="https://exitocol.vtexassets.com/arquivos/ids/24447331/Uvas-Pasas-FRESCAMPO-200-gr-3226883_a.jpg?v=638609456037030000"
                                                            className='w-100' />
                                                    </div>

                                                    <div className='info px-3'>
                                                        <h6>
                                                            Uvas Pasas FRESCAMPO (200 gr)
                                                        </h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%">3.190</td>
                                        <td width="25%">
                                            <QuantityBox />
                                        </td>
                                        <td width="15%">3.190</td>
                                        <td width="10%"><span className='remove'><IoIosClose /></span></td>
                                    </tr>
                                </table>


                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className="card shadow p-3 cartDetails">
                                <h4>Total Carrito</h4>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Subtotal</span>
                                    <span className='ml-auto'>$3200</span>
                                </div>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Shipping</span>
                                    <span className='ml-auto'><b>Free</b></span>
                                </div>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Enviado a</span>
                                    <span className='ml-auto'><b>Colombia</b></span>
                                </div>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Total</span>
                                    <span className='ml-auto'>$3200</span>
                                </div>

                                <Button className='btn-blue btn-lg btn-big btn-round'>
                                    <IoCartSharp />Agregar al carrito</Button>


                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

