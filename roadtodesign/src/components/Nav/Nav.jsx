import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__wrapper}>
                <div className={styles.nav__links}>
                    <a href='#benefits'>Преимущества</a>
                    <a href='#reviews'>Отзывы</a>
                    <a href='#about'>О нас</a>
                    <a href='https://amazing-online.com'>Заказать превью</a>
                </div>

                <div className={styles.burger__button}>
                    <div className={styles.burger__line}></div>
                    <div className={styles.burger__line}></div>
                    <div className={styles.burger__line}></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav