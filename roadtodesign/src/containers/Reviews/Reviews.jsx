import styles from './Reviews.module.css'
import { ReviewsData } from '../../data/ReviewData'

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <div className={styles.rev__wrapper}>
                {ReviewsData.map(review => (
                    <div key={review.id} className={styles.rev__block}>
                        <span>{review.name}</span>
                        <p>{review.text}</p>
                        <a href={review.link}>Перейти</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews