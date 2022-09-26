import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Categories from '../components/Categories'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar/>
      <Categories/>
    </div>
  )
}

export default Home
