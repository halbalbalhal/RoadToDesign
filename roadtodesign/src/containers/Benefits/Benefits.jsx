import styles from './Benefits.module.css'
import { BennefitsData } from '../../data/BenefitsData'

const Benefits = () => {
    return (
        <section className={styles.benefits} id='benefits'>
            <div className={styles.benefits__wrapper}>
                {BennefitsData.map(benefit => (
                    <div key={benefit.id} className={styles.benefit__block}>
                        <span>{benefit.title}</span>
                        <p>{benefit.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Benefits