import styles from './TsSwp.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import { ReviewsData } from '../../data/ReviewData'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

import 'swiper/css/controller'


const TsSwp = () => {
    return (
        <section className={styles.rev__swiper}>
            <span>Отзывы наших клиентов</span>
            <Swiper
                cssMode={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className={styles.swp}
                style={{  "--swiper-pagination-color": "orange",
                        "--swiper-navigation-color": "orange",
                            }}
                id="reviewswiper"
            >
                {ReviewsData.map(benefit => (
                    <SwiperSlide  className={styles.swp__block}>
                        <div key={benefit.id}>
                            <div className={styles.swp__image}>
                                <img src={benefit.image} />
                            </div>
                            <span>{benefit.name}</span>
                            <p>{benefit.text}</p>
                            <button onClick={() => {
                                window.location.href = benefit.link
                            }}>Перейти на канал</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default TsSwp