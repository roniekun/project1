import React, {useRef, useEffect} from 'react';
// import links from './data';
import links from '../../../assets/data/data'
import { useNavigate, useLocation } from "react-router-dom";
import styles from './index.module.css';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const Navlinks = ({
                    linkProps,
                      containerProps,
                      setToggleMenu,
                        isToggleMenu, 
                        hoverProps, 
                        motionProps
    }) => {
      
  const navigate = useNavigate();
  const location = useLocation();
  const nlinks = links.map(()=> useRef(null))  

  useEffect(() => {
      if(nlinks && isToggleMenu){
      nlinks.forEach((nlink, index)=>{
        gsap.fromTo(nlink.current,{
          x: 50,
          opacity: 0,
        },
       { x: 0,
        opacity: 1,
        delay: index * .1,
        duration: .5,
       }
        )
      })
  }
  }, [nlinks, isToggleMenu])
  

  const handleClick = (link) => {

    if (link ) {
      window.scrollTo({ top: 0 });
      navigate(link);
      setToggleMenu(false);
    }
  };

  return (
    <motion.div
     className={styles.container} 
     style={containerProps}>
      {links.map((link, index) => (
        <motion.li
          ref={nlinks[index]}
          key={index}
          whileHover={hoverProps}
          className={styles.link}
          style={{...linkProps}}
          onTap={() => handleClick(link.to)}
        >
          {link.text}
        </motion.li>
      ))}
    </motion.div>
  );
};

export default Navlinks;