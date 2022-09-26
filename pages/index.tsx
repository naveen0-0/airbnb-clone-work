import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar/>
    </div>
  )
}

export default Home
