// This file was created for just a joke and doesn't have any harmful content or malware
//If you have any questions, you can apply to owner of the wibsite -> dbolo7118@gmail.com

import styles from './Egg.module.css'

import Rofl from '../../Assets/images/Egg/rofls.jpg'

const Egg = () => {
    return (
        <section className={styles.egg} id='egg'>
            <div className={styles.egg__wrapper}>
                <img src={Rofl} className={styles.egg__image} />
                <span>Паша, 300м от вас, возьму в рот, куплю пива</span>
                <button onClick={() => {
                    document.getElementById('egg').style.display = 'none'
                }}>Закрыть</button>
            </div>
        </section>
    )
}

export default Egg