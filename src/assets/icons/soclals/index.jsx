import React, { useState } from 'react'; // Import useState
import styles from './index.module.css';
import { ReactComponent as FacebookIcon } from '../svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '../svg/instagram.svg';
import { ReactComponent as GithubIcon } from '../svg/github.svg';
import { ReactComponent as LinkedinIcon } from '../svg/linkedin.svg';

const Socials = ({ 
      displayNames, 
      displayHandles, 
      displayIcons, 
      linkProps,
      iConProps,
      containerProps,
                      }) => {

  const socialMediaLinks = [

    { name: 'Github', 
      fill: '#E4405F', 
      icon: <GithubIcon />, 
      url: 'https://www.github.com/roniekun',
      userhandle: '' 
    },

    { name: 'Facebook',
      fill: '#1877F2', 
      icon: <FacebookIcon />, 
      url: 'https://www.facebook.com/ronieuxjpg', 
      userhandle: '' 
    },

    { name: 'Instagram', 
      fill: '#E4405F',
      icon: <InstagramIcon />, 
      url: 'https://www.instagram.com/ronieuxjpg', 
      userhandle: ''
     },

    { name: 'LinkedIn', 
      fill: '#E4405F', 
      icon: <LinkedinIcon />,
      url: 'https://www.linkedin.com/in/roniebenitez', 
      userhandle: '' },
  ];

  return (
        <div className={styles.socialLinksContainer} 
        style={{...containerProps}}>
          {socialMediaLinks.map((link) => (
            <div         
              key={link.name}
              className={styles.iconContainer}>  
                <a
                  href={link.url}
                  key={link.name}
                  target="_blank"
                  style={{...linkProps }}
                  className={styles.socialLink}
                  rel="noopener noreferrer">
                   {displayNames &&link.name}
                   {displayIcons && link.icon}
                   {displayHandles && link.userhandle}
                </a>
            </div>
          ))}
        </div>

  );
};

export default Socials;
