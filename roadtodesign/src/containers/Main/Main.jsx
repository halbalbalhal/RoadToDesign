import Nav from "../../components/Nav/Nav"
import Header from "../../components/Header/Header"
import styles from './Main.module.css'
import Target from '../../Assets/images/Main/arrow.svg'

const Main = () => {
    return (
        <section className={styles.mn}>
            <Nav />
            <Header />
        </section>
    )
}

export default Main