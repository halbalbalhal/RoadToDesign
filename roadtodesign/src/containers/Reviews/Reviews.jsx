import styles from './Reviews.module.css'
import { ReviewsData } from '../../data/ReviewData'

const Reviews = () => {
    return (
        <section className={styles.reviews} id='reviews'>
            <div className={styles.rev__wrapper}>
                {ReviewsData.map(review => (
                    <div key={review.id} className={styles.rev__block}>
                        <img src={review.image} />
                        <span>{review.name}</span>
                        <p>{review.text}</p>
                        <button onClick={() => {
                            window.location.href = review.link
                        }}>Перейти на канал</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews