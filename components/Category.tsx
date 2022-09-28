import styles from '../styles/Category.module.css'
import Image from 'next/image'

type Category = { title:string,src:string }
export default function Category({ title, src }:Category) {
  return (
    <div className={styles.category}>
      <div className={styles.category_image_container}>
        <Image src={src} alt={title} width="25px" height="25px" className={styles.category_image}/>
      </div>
      <div className={styles.category_text}>{title}</div>
    </div>
  )
}