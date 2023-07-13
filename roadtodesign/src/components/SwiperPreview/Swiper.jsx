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
import Gox from '../../Assets/images/Swiper/gox.jpg'
import Stream from '../../Assets/images/Swiper/stream.jpg'
import Traders from '../../Assets/images/Swiper/traders.jpg'
import Ballas from '../../Assets/images/Swiper/BALLAS.jpg'
import Destroyment from '../../Assets/images/Swiper/destroyment.jpg'

const Swp = () => {
    return (
        <>
        <Swiper style={{  "--swiper-pagination-color": "orange",
                          "--swiper-navigation-color": "orange",
                        }}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            >
            <SwiperSlide id='first-slide'><img src={Dagon} /></SwiperSlide>
            <SwiperSlide><img src={Sphere} /></SwiperSlide>
            <SwiperSlide><img src={Solo} /></SwiperSlide>
            <SwiperSlide><img src={Gox} /></SwiperSlide>
            <SwiperSlide><img src={Stream} /></SwiperSlide>
            <SwiperSlide><img src={Traders} /></SwiperSlide>
            <SwiperSlide><img src={Ballas} /></SwiperSlide>
            <SwiperSlide><img src={Destroyment} /></SwiperSlide>
        </Swiper>
      </>
    )
}

export default Swp