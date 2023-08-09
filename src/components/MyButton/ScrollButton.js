import React, { useEffect, useState } from 'react';
import up from '../../image/icons/up.png'
import styles from './ScrollButton.module.css'; 




const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <>
    <button
      className={`${styles.scrollBtn} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <img src={up} alt='up'/>
    </button>
    </>
   
  );
};

export default ScrollButton;