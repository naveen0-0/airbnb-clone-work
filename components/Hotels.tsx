import styles from '../styles/Hotels.module.css'
import { Hotel, hotels } from '../utils/uitls'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

export default function Hotels() {
  return (
    <div className={styles.hotels}>
      {hotels.map((hotel:Hotel) => <Hotel hotel={hotel} key={hotel.id}/>)}
    </div>
  )
}



function Hotel({ hotel }:{ hotel:Hotel }) {
  return (
    <div className={styles.hotel} onClick={() => console.log(hotel)}>

      <div className={styles.hotel_image_container}>
        {/* <Image src={hotel.imgsrc} alt={hotel.title} layout='fill' objectFit='cover' className={styles.hotel_image}/> */}
        <img src={hotel.imgsrc} alt={hotel.title} className={styles.hotel_image}/>
      </div>

      <div className={styles.hotel_info}>

        <div className={styles.title_rating}>
          <div className={styles.title}>{hotel.title}</div>
          <div className={styles.rating}><AiFillStar size={16}/>{hotel.rating}</div>
        </div>

        <div>{hotel.distance} kilometers</div>
        <div>{hotel.date}</div>
        <div className={styles.price}><span className={styles.pricetxt}>&#8377;{hotel.price}</span> night</div>
      </div>

    </div>
  )
}
