import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>Do it! Do it better!</h2>
    <img className={styles.image} src="https://i.postimg.cc/fyWJJ5Cd/pexels-pixabay-373076-1.jpg"></img>
  </header>
);

export default Hero;