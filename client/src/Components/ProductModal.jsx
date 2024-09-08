import { Button, Dialog, Rating } from '@mui/material'
import React, { useContext, useRef, useState } from 'react';
import "../Styles/ProductModal.css";
import { IoCartSharp, IoClose } from 'react-icons/io5'
import Slider from 'react-slick';
import LecheritaBack from "../Images/LecheritaBack.webp";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MyContext } from '../App';
import { QuantityBox } from './QuantityBox';


export const ProductModal = (props) => {

    const [slideIndex, setslideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    

    return (
        <>
            <Dialog open={true} className='productModal' onClose={()=>context.setisOpenProductModal(false)}>
                <Button className='close_' onClick={() => context.setisOpenProductModal(false)}><IoClose /></Button>
                <h4 className='mb-1 font-weight-bold'>Lecherita</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Marca: </span>
                        <span className='ml-2'><b>Nestle</b> </span>
                        <Rating name="read-only" value={5} size='small' precision={0.5} readOnly />
                    </div>
                </div>

                <hr />

                <br />
                <br />
                <br />

                <div className='row mt-2 productDetailModal'>
                    <div className='col-md-5'>
                        <div className='productZoom position-relative'>
                            <div className='badge badge-primary'>23%</div>
                            <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={LecheritaBack} />
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice mr-2'>$4.000</span>
                            <span className='netPrice text-danger'>$3.610</span>
                        </div>
                        <span className='badge bg-success'>EN STOCK</span>
                        <p className='mt-3'>Leche condensada LA LECHERA Lata (90 gr)</p>

                        <div className='d-flex align-items-center'>
                            <QuantityBox/>
                            <Button className='btn-blue btn-lg btn-big btn-round'>
                            <IoCartSharp/>Agregar al carrito</Button>

                        </div>

                        <div className='d-flex align-items-center mt-3 actions'>
                            <Button className='btn-round btn-sml' variant='outlined'>
                                <CiHeart />
                                Agregar a la lista
                            </Button>
                        </div>
                    </div>


                </div>

            </Dialog>
        </>
    )
}
