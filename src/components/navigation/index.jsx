import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import Socials from '../../assets/icons/soclals';
import links from '../../assets/data/data'
import { useNavigate, useLocation } from "react-router-dom";
import gsap from 'gsap';
import { motion } from 'framer-motion';

const Navigation = ({isToggleMenu, setToggleMenu, isMediumScreen,
   isSmallScreen , setColor, color, setBgColor, bgColor,props}) => {

  const container = useRef(null);
  const content = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const nlinks = links.map(()=> useRef(null))
  const linkspans = links.map(()=> useRef(null))   

  useEffect(() => {
      if(nlinks && isToggleMenu){
      nlinks.forEach((nlink, index)=>{
        gsap.fromTo(nlink.current,{
          y: 100,
          opacity: 0,
        },
       { y: 0,
        opacity: 1,
        delay: index * .1,
        duration: .5,
       }
        )
      })
  }
  }, [nlinks, isToggleMenu])

// Animation for span
  useEffect(() => {
    if(linkspans && isToggleMenu){
    linkspans.forEach((span, index)=>{
      gsap.fromTo(span.current,{
        width: '0%',
      },
     { width:'100%',
      delay: index * .1,
      duration: .7,
     }
      )
    })
}
}, [linkspans, isToggleMenu])

  const handleClick = (link) => {

    if (link ) {
      window.scrollTo({ top: 0 });
      navigate(link);
      setToggleMenu(false);
    }
  };

  // exit button handler
 const handleExit =() => {
  setToggleMenu(false)
  }

  const menu = {

    open: {
        opacity: 1,
        transition: { duration: 0.3, type: "tween", ease: [0.76, 0, 0.24, 1]},
        height: "100%",
    },

    closed: {
        transition: { duration: 0.3, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]},
        opacity: 0,
        height: 0
    }
}

const item = {
  open: {
      opacity :1,
      transition: {
        delay: .3
      }
  },

  closed: {
      opacity: 0,
      }
}

  return (
    <motion.nav
    variants={menu}
    animate={isToggleMenu ? "open" : "closed"}
     initial="closed"
     exit= "closed"
    ref={container}
    className={styles.container} >
    
      <motion.div className={styles.content}
                ref={content}
                variants={item}
                animate={isToggleMenu ? "open" : "closed"}
                initial="closed"
                exit= "closed"
                >  
            <button 
              className={styles.btn}
              onClick={handleExit}>
                Close Menu
            </button>
            
          <div className={styles.linksContainer}>
             <h5 className={styles.title}>Navigations</h5>
                {links.map((link, index) => (
                <motion.li
                  ref={nlinks[index]}
                  key={index}
                  style={{fontSize: window.innerHeight <=500 ? '1.5rem' : '2rem',
                              lineHeight:window.innerHeight <=500 ? '2.5rem' : '3rem',
                            }}
                  className={styles.link}
                  onTap={() => handleClick(link.to)}
                >
                  {link.text}
                  <span 
                  ref={linkspans[index]} 
                  className={styles.linkSpan}>
                  </span>
                </motion.li>
              ))}
        </div>
      <div className={styles.socialContainer}>
        <h5 className={styles.title}>Socials</h5>
      <Socials
      displayNames={true}
      containerProps={{width: '100%',
                                      gap: '1rem',
                                       flexWrap: 'wrap',
                                      height: 'fit-content'}}
      linkProps={{fontSize:  '1rem', 
                            width: 'fit-content',
                            height: 'fit-content',
                            textTransform: 'uppercase',
                            color: 'whitesmoke' }} />
      </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation