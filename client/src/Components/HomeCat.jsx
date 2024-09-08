import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import ManzanaBolsa from "../Images/ManzanaBolsa.jpeg";
//Video 10
export const HomeCat = () => {
    return (
        <>
            <section className='homeCat'>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className='item'>
                            <img src={ManzanaBolsa}/>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className='container'>

                </div>
            </section>
        </>

    )
}
