import styles from './Burger.module.css'

const BurgerMenu = () => {
    return (
        <section className={styles.burger__menu} id="bm">

            <div className={styles.burger__black}>
                <ul>
                    <li>Преимущества</li>
                    <li>Отзывы</li>
                    <li>О нас</li>
                    <li>Заказать превью</li>
                </ul>
                <button onClick={() => {
                    document.getElementById("bm").style.display = 'none'
                }}>Abeba</button>
            </div>

            <div className={styles.burger__white}>

            </div>
        </section>
    )
}

export default BurgerMenu