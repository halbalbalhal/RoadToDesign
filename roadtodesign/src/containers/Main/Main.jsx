import Nav from "../../components/Nav/Nav"
import Header from "../../components/Header/Header"
import styles from './Main.module.css'

const Main = () => {
    return (
        <section className={styles.mn}>
            <Nav />
            <Header />
        </section>
    )
}

export default Main