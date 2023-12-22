import styles from './index.module.css';
import data from './data';
import { useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion'
import { useNavigate, NavLink } from 'react-router-dom';
import Slideshow from '../../../assets/slideshow-fade';
import Socials from '../../../assets/icons/soclals';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = ({setColor, color, setBgColor, bgColor, wtColor,btColor}) => {
  const [selected, setSelected] = useState(0);
  const secta = useRef(null);
  const sectb = useRef(null);

  // Header Props
  useEffect(() => {
    setColor('#181818');
    setBgColor('rgba(250,250,250,.3)')
  }, [])

  useEffect(() => {
    setSelected(selected);
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected === data.length - 1 ? 0 : prevSelected + 1));
    }, 3500);
    
    return () => {
      clearInterval(interval); 
    };
  }, [selected]);

  const handleClick = (index) => {
    setSelected(index);
  };
  const handlePrevClick = ()=>{
    setSelected((prev) => (prev === 0 ? data.length  - 1 : prev - 1) ) ;
  }

  const handleNextClick = ()=>{
    setSelected((prev) => (prev ===  data.length-1  ? 0  : prev + 1) ) ;
  }

  const navigate = useNavigate();

  const handleImgClick = (to) =>{
    navigate(to);
  }

  const handleExplore = () => {
    sectb.current.scrollIntoView({
      behavior: "smooth"
    });
  }
  
  const handleContact = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
}
  // Animations
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: secta.current,
      start: "top-=80px top",
      end: "bottom bottom",
      onEnter: () => {
        setBgColor(btColor);
        setColor('whitesmoke');
      },
      onLeaveBack: () => {
        setBgColor('transparent');
        setColor('black');
      },
    });

    return () => {
      trigger.kill(); 
    };
  }, [secta, btColor, wtColor]); 

  return (
  <motion.div 
    initial={{zIndex: 2, opacity: 0 }}
    animate={{opacity:1, zIndex: 1 }}
    transition={{duration: .3}}
    className={styles.container}>
      
    <section
     className={styles.pageOne}>
      <div className={styles.filter}></div>
        <div className={styles.heroContainer }>
          <section className={styles.textSection}>
            <div
            className={styles.titleContainer}>
            <h1 >
              Portfolio <br /> Website
            </h1>
            </div>
            <div className={styles.descContainer}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              illum id unde aperiam perferendis eius corporis voluptas doloribus?</p>
            </div>
            <button 
              className={styles.btn}>
              Book an appointment
            </button>
          </section>
          <section className={styles.imgSection}>
            <div className={styles.imgContainer}>
            <img 
            className={styles.heroImage}
            src="" alt="" />
            </div>
            <div className={styles.idContainer}>
            <h1>Your Name</h1>
            <h4>Photographer and Film Maker</h4>
            </div>     
          </section>
       </div>
       </section>


{/* ================================= */}

    <section
    ref={secta}
      className={styles.pageTwo}>
        <div className={styles.titleContainer}>
          <h1>Featured Projects</h1>
        </div>
        <div className={styles.gallery}>
        { data.map((album, index) => (
          <div  key={index}
          className={styles.album}>
         <h2>
            {album.category}
          </h2>

          </div>

        ))
        }
          
        </div>
        
    </section>

    </motion.div>
  );
};

export default Home;

