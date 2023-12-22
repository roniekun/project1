import React, { useEffect } from 'react'
import styles from './index.module.css'
import Navlinks from '../navigation/navlinks';
import Socials from '../../assets/icons/soclals';

const Footer = ({
color, bgColor, setColor,
setToggleMenu
}) => {

  const date = new Date();
    // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG

    const email = 'roniebenitez01@gmail.com';
    const subject = 'Project Request';
  
    const handleEmailClick = () => {
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
      window.location.href = mailtoUrl;
    };

  return (
    <footer
    style={{background: 'whitesmoke'}}
     className={styles.container}>
        <div className={styles.sitemap}>
        <h4>Sitemap</h4>
        <Navlinks
        setToggleMenu={setToggleMenu}
         linkProps={{fontSize: '1.2rem',
                                                color: 'gray',
                                                fontWeight:'500',
                                                textTransform: 'capitalize',
      }}
      containerProps={{ gap: '14px'
      }}
      />
       </div>
      <div className={styles.itemContainer}>
      <div className={styles.socialContainer}>
          <h4>Let&apos;s Connect </h4>
        <Socials
        containerProps={{gap:'14px', flexWrap: 'wrap'}}
          linkProps={{ color: 'gray',
                                textTransform: 'capitalize',
                                fontWeight: '500',
                                fontSize: '1.2rem'}}
          displayNames={true}/>
      </div>
      <div className={styles.emailContainer}>
      <h4>Email Me</h4>
      <p onClick={handleEmailClick} 
      style={{
        color: 'gray',
        fontWeight: '500',
      }}>
        roniebenitez01@gmail.com</p>
         </div>
      </div>
      <h5 className={styles.date}>
        Copyright &copy; {date.getFullYear()}</h5>
    </footer>
  )
}

export default Footer