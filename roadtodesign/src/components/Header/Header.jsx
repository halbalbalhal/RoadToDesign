import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <h1>Road To Design</h1>
                <p>Атмосферная онлайн-игра про современную Россию с безграничными возможностями, множеством развлечений, свободным и открытым миром</p>
                <button onClick={() => {
                    window.location.href = 'https://amazing-online.com'
                }}>Заказать!</button>
            </div>
        </header>
    )
}

export default Header