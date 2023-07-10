import styles from './Header.module.css'
import Target from '../../Assets/images/Main/arrow.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <h1>Road To Design</h1>
                <p>Road To Design занимается созданием превью для различных видеоигр</p>
                <button onClick={() => {
                    window.location.href = 'https://amazing-online.com'
                }}>Заказать!</button>
            </div>
            <img src={Target} className={styles.image} onClick={() => {
                window.location.href = '#benefits'
            }} />
        </header>
    )
}

export default Header