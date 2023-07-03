import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__wrapper}>
                <div className={styles.nav__links}>
                    <a href='https://amazing-online.com'>Преимущества</a>
                    <a href='https://amazing-online.com'>Отзывы</a>
                    <a href='https://amazing-online.com'>О нас</a>
                    <a href='https://amazing-online.com'>Заказать превью</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav