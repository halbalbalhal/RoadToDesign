import styles from './Nav.module.css'
import BurgerMenu from '../BurgerMenu/Burger'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__wrapper}>
                <div className={styles.nav__links}>
                    <a href='#benefits'>Преимущества</a>
                    <a href='#reviews'>Отзывы</a>
                    <a href='#about'>О нас</a>
                    <a href='#order'>Заказать превью</a>
                </div>

                <div className={styles.burger__button} onClick={() => {
                    document.getElementById("bm").style.display = 'flex'
                }}>
                    <div className={styles.burger__line}></div>
                    <div className={styles.burger__line}></div>
                    <div className={styles.burger__line}></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav