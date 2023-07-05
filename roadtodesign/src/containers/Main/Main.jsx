import Nav from "../../components/Nav/Nav"
import Header from "../../components/Header/Header"
import styles from './Main.module.css'
import Target from '../../Assets/images/Main/arrow.svg'

const Main = () => {
    return (
        <section className={styles.mn}>
            <Nav />
            <Header />
           <a href="#benefits"><img src={Target} className={styles.image} /></a>
        </section>
    )
}

export default Main