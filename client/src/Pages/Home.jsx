import React from 'react'
import { HomeBanner } from '../Components/HomeBanner';
import "../Styles/Home.css";
import banner1 from "../Images/banner1.png";
import banner2 from "../Images/banner2.jpeg";
import { Button } from '@mui/material';
import { IoArrowForwardSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import banner3 from "../Images/banner3.webp";
import banner4 from "../Images/banner4.webp";
import cupon from "../Images/cupon.png";
import { ProductItem } from '../Components/ProductItem';
import { HomeCat } from '../Components/HomeCat';
import { CiMail } from "react-icons/ci";


export const Home = () => {

  /* var productSliderOptions = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 1
   };*/

  return (
    <>
      <HomeBanner />


      <section className='homeProducts'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='sticky'>
                <div className='banner'>
                  <img src={banner1} className='cursor w-100' />
                </div>
                <div className='banner mt-4'>
                  <img src={banner2} className='cursor w-100' />
                </div>
              </div>


            </div>

            <div className='col-md-9 productRow'>
              <div className='d-flex align-items-center'>
                <div className='info w-75'>
                  <h3 className='mb-0 hd'>MÁS VENDIDOS</h3>
                  <p className='text-light text-sml mb-0'>
                    No te pierdas las ofertas hasta final de mes
                  </p>
                </div>

                <Button className='viewAllBtn ml-auto'>
                  Ver todos <IoArrowForwardSharp />
                </Button>

              </div>

              <div className='product_row w-100 mt-4'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className='mySwiper'
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>


              <div className='d-flex align-items-center'>
                <div className='info w-75'>
                  <h3 className='mb-0 hd'>NUEVOS PRODUCTOS</h3>
                  <p className='text-light text-sml mb-0'>
                    Nuevos productos con stock actualizado
                  </p>
                </div>

                <Button className='viewAllBtn ml-auto'>
                  Ver todos <IoArrowForwardSharp />
                </Button>

              </div>

              <div className='product_row productRow2 w-100 mt-4 d-flex'>
                <ProductItem />
                <ProductItem />
                <ProductItem />

              </div>

              <div className='d-flex mt-5 bannerSec'>
                <div className='banner'>
                  <img src={banner3} className='cursor w-100' />
                </div>
                <div className='banner'>
                  <img src={banner4} className='cursor w-100' />
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='newsLetterSection mt-3 mb-3 d-flex align-items-center'>
        <div className='container'>
            <div className='row'>
                  <div className='col-md-6'>
                    <p className='text-white mb-1'>20% descuento en tu primera compra</p>
                    <h3 className='text-white'>Unete a nuestros canales y obtén</h3>
                    <p className='text-light'>Unete a nuestra suscripción vía email y obtén <br/> actualizaciones, promociones y cupones</p>
                  
                    <form>
                      <CiMail/>
                      <input type="text" placeholder='Email'/>
                      <Button>Subscribe</Button>
                    </form>

                  
                  </div>
                  <div className='col-md-6'>
                    <img src={cupon}/>
                  </div>
            </div>
        </div>
      </section>
    </>
  )
}
