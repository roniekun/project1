import { useEffect } from 'react'
import FAQItems from '../../../assets/frequently-asked-questions'
import styles from './index.module.css'
import {motion} from 'framer-motion'

const FAQ = ({setColor,color,setBgColor,bgColor,btColor,wtColor}) => {
  
  useEffect(() => {
    setColor('white');
    setBgColor(btColor);
  }, [])

  return (
    <motion.div
    initial={{ opacity: 0, zIndex: 2 }}
    animate={{opacity:1, zIndex: 1 }}
    transition={{duration: .3}}
    exit={{opacity: 0, y: -25,  scale: .98}}
    className={styles.container}>
      <h2>Frequently Asked Questions</h2> 
      <p>*for demo purpose*</p>
      <FAQItems/>
    </motion.div>
  )
}

export default FAQ