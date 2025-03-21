import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {SliderProducts} from "../../data/products"



const Slider = () => {
  return (
    
    <div className="container">
        <Swiper
            slidesPerView = {3}
            spaceBetween={20}
            slidesPerGroup={1}
            loop={true}
            modules={[Navigation, Pagination]}
            // className= "my_swiper"
            navigation={true} 
        >
            {SliderProducts.map((product, i)=> (
            <SwiperSlide className="swiper_here" key={i}>
                <div className="slider_left">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                    <span>${product.price}</span>

                </div>

                <div className="slider_right">
                    <img src={product.img} alt="" />
                </div>
            </SwiperSlide>
            ))}

        </Swiper>
    </div>
  )
}

export default Slider
