import { useState, useRef, useEffect } from 'react';
import data from './data';
import styles from './index.module.css';
import {ReactComponent as Active} from '../svg/active.svg';
import {ReactComponent as Inactive} from '../svg/inactive.svg';
import { motion, AnimatePresence } from 'framer-motion'

const FAQItems = ({linkProps, containerProps}) => {

  const [isActive, setActive] = useState(data.map(() => false));

  // const answerRefs = data.map(() => useRef(null));

    const answers = data.map(() => useRef(null));
    // const questions = data.map(() => useRef(null));
    const questions =  useRef(data.map(() => null));

const handleClick = (index) => {
  setActive((prevActive) => {
    const updatedArray = [...prevActive];
    updatedArray[index] = !updatedArray[index]; 
    return updatedArray;
  });
  };

  return (
    <div className={styles.container}>
        {data.map((faqItem, index) => (
          <motion.div
            className={styles.items}
            key={index}
            onClick={() => handleClick(index)}
            >

            <motion.div
            ref={questions[index]}
            transition={{duration: .5}}
             key={index} className={styles.questionContainer}>
            <p className={styles.question}> 
            <span>{index + 1}.   </span> { faqItem.question}</p>
           { isActive[index]  ?   <Inactive/> : <Active/>}
            </motion.div>
    
        <AnimatePresence>
              <motion.div 
              ref={answers[index]}
              initial={{ opacity: 0}}
              transition={{duration: .3}}
              animate={{ opacity: 1,  height: isActive[index]  ? '100%' : '0px'}}
              exit={{ opacity:0 , height: '0px'}}
              className={styles.answerContainer}>
                <motion.p 
                 className={styles.answer}> 
                {faqItem.answer}
                </motion.p>
              </motion.div>
        </AnimatePresence>
          </motion.div>
        ))}
    </div>
  );
};

export default FAQItems;