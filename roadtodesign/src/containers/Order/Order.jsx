import styles from './Order.module.css'
import Telegram from '../../Assets/images/Order/telegram.svg'
import VK from '../../Assets/images/Order/vk.svg'
import Discord from '../../Assets/images/Order/discord.svg'

const Order = () => {
    return(
        <section className={styles.ord} id='order'>
            <div className={styles.ord__wrapper}>
                <div className={styles.ord__order}>
                    <span>Заказать превью</span>
                    {/* <p>Заказать превью у нас крайне просто и не требует много времени, просто перейдите в одну из доступных соц.сетей!</p> */}
                    <div className={styles.ord__social}>
                        <img src={Telegram} onClick={() => {
                            window.location.href = 'https://t.me/dorogadisajna'
                        }} />
                        <img src={VK} onClick={() => {
                            window.location.href = 'https://vk.com/id697497428'
                        }} />
                        <img src={Discord} onClick = {() => {
                            window.location.href = 'https://discordapp.com/users/914214282609176576/'
                        }} />
                    </div>                   
                </div>

                <div className={styles.ord__navigation}>
                        <span>Навигация</span>
                        <ul>
                            <li onClick={() => {
                                window.location.href = 'https://vk.com/public218042944'
                            }}>Группа ВК</li>
                            <li onClick = {() => {
                                window.location.href = 'https://t.me/dorogadizajna'
                            }}> Telegram-канал</li>
                            <li onClick = {() => {
                                window.location.href = 'https://github.com/halbalbalhal/RoadToDesign'
                            }}>GitHub репозиторий сайта</li>
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default Order