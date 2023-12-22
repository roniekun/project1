import React from 'react'
import styles from './index.module.css'
import { NavLink } from 'react-router-dom'
import Navlinks from '../navigation/navlinks'
import { Turn as Hamburger, Turn } from 'hamburger-react' //https://hamburger-react.netlify.app/
import Socials from '../../assets/icons/soclals'

const Header = ({isMediumScreen, isToggleMenu, setToggleMenu,
                              color,setColor,bgColor, setBgColor}) => {
  const handleClick = () => {
    setToggleMenu(!isToggleMenu);
  }
  const handleScrollToTop = () => {
    setToggleMenu(false)
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <header
     className={styles.container} 
      style={{color: color, backgroundColor: bgColor}} >
        
        <div  className={styles.rightSection}>
      <div className={styles.logoContainer}>
        <NavLink
            to='/'
            onClick={handleScrollToTop}
            style={{color:color,}}
             className={styles.logo}>
                        <h1>&copy;Identity</h1>
        </NavLink>
        </div>
      {!isMediumScreen &&
      <div className={styles.navlinkContainer}>
        <Navlinks
                        setToggleMenu={setToggleMenu}
                         containerProps={{gap: '1rem'}}
                          linkProps={{
                                                textTransform: 'capitalize',
                                                fontFamily: 'Clash Display',
                                                fontSize: '1.2rem',
                                                fontWeight: '500',
                                                color:color,
                                              }}
                                                />
         </div>
       }
       </div>
       {!isMediumScreen &&
      <div className={styles.socialContainer}>
        <Socials
        displayIcons={true}
        containerProps={{
        gap: '1rem', }}
       
        linkProps={{
         fill: color,
         transitionDuration:  '.3',
         }}/>
      </div>
         }

     { isMediumScreen &&  
     <div
          style={{
            padding: '0',
            zIndex: '999',
          }}
          onClick={handleClick}>
          <Hamburger
          toggled={isToggleMenu}
            size={14}
            />
       </div> }
        </header>
  )
}

export default Header