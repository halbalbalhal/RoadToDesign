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
                <button id='button' onClick={() => {
                    document.getElementById("bm").style.display = 'none'
                }}>Close</button>
            </div>
        </section>
    )
}

export default BurgerMenu