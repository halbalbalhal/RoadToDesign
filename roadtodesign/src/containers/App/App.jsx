import styles from './App.module.css'
import Main from '../Main/Main'
import Reviews from '../Reviews/Reviews'
import Benefits from '../Benefits/Benefits'
import About from '../About/About'
import Order from '../Order/Order'
import BurgerMenu from '../../components/BurgerMenu/Burger'
import ReviewSwiper from '../ReviewSwiper/ReviewSwiper'
import Egg from '../EasterEgg/Egg'
import { analytics } from '../../firebase/firebaseConfig'

function App() {

  if (analytics) {
    console.log("Google Analitycs is working succesfully")
  }
  return (
    <>
      <Egg />
      <BurgerMenu />
      <Main />
      <Benefits />
      <Reviews />
      <ReviewSwiper />
      <About />
      <Order />
    </>
  )
}

export default App
