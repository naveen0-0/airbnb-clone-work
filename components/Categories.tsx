import { categories } from '../utils/uitls'
import Image from 'next/image'
import styles from '../styles/Category.module.css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiFilter3Line } from 'react-icons/ri'

export default function Categories() {
  return (
    <div className={styles.categories_container}>
      <div className={styles.categories}>
        {categories.map((category) => <Category title={category.title} src={category.imgsrc} key={category.id}/>)}
      </div>
      <div className={styles.right}><MdKeyboardArrowRight size={26}/></div>
      <div className={styles.filters}><RiFilter3Line size={24}/>Filters</div>
    </div>
  )
}


type Category = { title:string,src:string }

function Category({ title, src }:Category) {
  return (
    <div className={styles.category}>
      <div className={styles.category_image_container}>
        <Image src={src} alt={title} width="25px" height="25px" className={styles.category_image}/>
      </div>
      <div className={styles.category_text}>{title}</div>
    </div>
  )
}
