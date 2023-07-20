import styles from './Burger.module.css'
import Cross from '../../Assets/images/Main/cross.svg'

const BurgerMenu = () => {  
    
    const BurgerClose = () => {
        document.getElementById("bm").style.display = 'none'
    }
    
    return (
        <section className={styles.burger__menu} id="bm">
            <div className={styles.burger__black}>
                <img src={Cross} alt="didn't find" className={styles.burger__cross} onClick={BurgerClose} />
                <ul>
                    <li onClick={() => {
                        window.location.href = '#benefits'
                        document.getElementById("bm").style.display = 'none'
                    }}>Преимущества</li>
                    <li onClick={() => {
                        window.location.href = '#reviews'
                        document.getElementById("bm").style.display = 'none'
                    }}>Отзывы</li>
                    <li onClick={() => {
                        window.location.href = '#about'
                        document.getElementById("bm").style.display = 'none'                        
                    }}>О нас</li>
                    <li onClick={() => {
                        window.location.href = '#order'
                        document.getElementById("bm").style.display = 'none'
                    }}>Заказать превью</li>
                </ul>
            </div>
        </section>
    )
}

export default BurgerMenu