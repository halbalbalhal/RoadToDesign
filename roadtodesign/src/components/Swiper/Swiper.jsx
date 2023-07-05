import { Swiper, SwiperSlide } from 'swiper/react'
import './Swiper.css'


import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

import 'swiper/css/controller'

import Dagon from '../../Assets/images/Swiper/Dagon.jpg'
import Sphere from '../../Assets/images/Swiper/goldensphere.jpg'
import Solo from '../../Assets/images/Swiper/solo.jpg'

const Swp = () => {
    return (
        <>
        <Swiper style={{  "--swiper-pagination-color": "orange",
                          "--swiper-navigation-color": "orange"
                        }}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            >
            <SwiperSlide><img src={Dagon} /></SwiperSlide>
            <SwiperSlide><img src={Sphere} /></SwiperSlide>
            <SwiperSlide><img src={Solo} /></SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    )
}

export default Swp