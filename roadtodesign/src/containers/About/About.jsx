import styles from './About.module.css'
import Swp from '../../components/SwiperPreview/Swiper'

const About = () => {
    return (
        <section className={styles.about} id='about'>
            <span>О нас</span>
            <p>Мы делаем превью по таким тематикам, как: Dota 2, CS:GO, GTA RP и список постоянно расширяется</p>
            <div className={styles.about__wrapper}>
                <Swp />
            </div>
        </section>
    )
} 

export default About