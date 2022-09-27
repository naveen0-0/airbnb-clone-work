import { Input } from '@chakra-ui/react'
import styles from '../styles/NavBar.module.css'
import { MdSearch } from 'react-icons/md'
import { RiFilter3Line } from 'react-icons/ri'
import Head from 'next/head'
import { BsGlobe } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Head>
        <title>Holiday Homes & Apartment Rentals - Airbnb - Airbnb</title>
      </Head>

      <div className={styles.small_screen_navbar}>
        <MdSearch className={styles.search_icon} size={20}/>
        <input 
          className={styles.input}
          type="text"
          placeholder='Where to?'
        />
        <RiFilter3Line className={styles.filter_icon} size={20}/>
      </div>

      <div className={styles.larger_screen_navbar}>
        <div className={styles.logo_container}>
          <img 
            src="/assets/images/logo.png" 
            alt="Logo" 
            className={styles.logo}
          />
          <div className={styles.logotext}>airbnb</div>
        </div>
        
        <div className={styles.center_navbar_container}>
          <div className={styles.center_navbar}>
            <div className={styles.center_navbar_item1}>Anywhere</div>
            <div className={styles.center_navbar_item2}>Any week</div>
            <div className={styles.center_navbar_item3}>
              <div className={styles.add_guests}>Add Guests</div>
              <div className={styles.search_icon_2}><MdSearch size={20} color="#fff"/></div>
            </div>
          </div>
        </div>

        <div className={styles.teritiary_nav_component_container}>
          <div className={styles.teritiary_nav_component}>
            <div className={styles.become_a_host}>Become a host</div>
            <div className={styles.globe}><BsGlobe/></div>
            <div className={styles.teritiary_inner_nav_component}>
              <FiMenu size={20} className={styles.menu}/>
              <FaUserCircle size={24}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
