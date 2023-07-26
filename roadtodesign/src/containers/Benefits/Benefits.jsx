import styles from './Benefits.module.css'
import { BennefitsData } from '../../data/BenefitsData'

const Benefits = () => {

    return (
        <section className={styles.benefits} id='benefits'>
            <div className={styles.benefits__wrapper}>
                {BennefitsData.map(benefit => (
                    <div key={benefit.id} className={styles.benefit__block}>
                        <img src={benefit.image} onClick={() => {
                            if (benefit.id == 3) {
                                document.getElementById('egg').style.display = 'flex'
                            }
                        }} />
                        <span>{benefit.title}</span>
                        <p>{benefit.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Benefits