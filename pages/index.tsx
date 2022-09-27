import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Categories from '../components/Categories'
import Hotels from '../components/Hotels'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <NavBar/>
        <Categories/>
      </div>
      <Hotels/>
    </div>
  )
}

export default Home
