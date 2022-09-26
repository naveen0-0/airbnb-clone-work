import { Input } from '@chakra-ui/react'
import styles from '../styles/NavBar.module.css'
import { MdSearch } from 'react-icons/md'
import { RiFilter3Line } from 'react-icons/ri'
import Head from 'next/head'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Head>
        <title>Holiday Homes & Apartment Rentals - Airbnb - Airbnb</title>
      </Head>
      <MdSearch className={styles.search_icon} size={20}/>
      <Input
        fontSize="xl"
        variant="unstyled"
        className={styles.input}
        boxShadow="xl"
        rounded="full"
        placeholder='Where to?'
        paddingX="50px"
        paddingY="10px"
        borderColor="#eee"
        borderWidth={1}
      />
      <RiFilter3Line className={styles.filter_icon} size={20}/>
    </div>
  )
}
