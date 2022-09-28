import Image from 'next/image'
import styles from '../styles/Category.module.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { RiFilter3Line } from 'react-icons/ri'
import { categories } from '../utils/uitls'
import { useRef, useState } from 'react'
import Category from './Category'

export default function Categories() {
  const scrollWidth = 1753;
  const scrollAmount =400
  const [x, setX] = useState<any>(0);
  let slider = useRef<HTMLDivElement>(null)

   const goLeft = () => {
    if (x - scrollAmount >= 0) {
      slider.current?.scrollTo(x - scrollAmount, 0);
    } else {
      slider.current?.scrollTo(0, 0);
    }
  }

  const goRight = () => {
    if (x + scrollAmount <= scrollWidth) {
      slider.current?.scrollTo(x + scrollAmount, 0);
    } else {
      slider.current?.scrollTo(scrollWidth, 0);
    }
  }

  const onSlide = () => {
    setX(slider.current?.scrollLeft)
  }

  return (
    <div className={styles.categories_container}>

      <div className={styles.left} onClick={goLeft}><MdKeyboardArrowLeft size={26}/></div>

      <div className={styles.categories} ref={slider} onScroll={onSlide}>
        {categories.map((category) => <Category title={category.title} src={category.imgsrc} key={category.id}/>)}
      </div>

      <div className={styles.right} onClick={goRight}><MdKeyboardArrowRight size={26}/></div>

      <div className={styles.filters}><RiFilter3Line size={24}/>Filters</div>
    </div>
  )
}



