import styles from './App.module.css'
import Main from '../Main/Main'
import Reviews from '../Reviews/Reviews'
import Benefits from '../Benefits/Benefits'
import About from '../About/About'
import Order from '../Order/Order'
import BurgerMenu from '../../components/BurgerMenu/Burger'

function App() {
  return (
    <>
      <BurgerMenu />
      <Main />
      <Benefits />
      <Reviews />
      <About />
      <Order />
    </>
  )
}

export default App
