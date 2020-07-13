import React from 'react';
import styles from './Footer.module.css';
import ButtonInput from '../Button/Button.js';

const Footer = ({ count }) => (
  <footer className={styles.footer}>
      <div className={styles.filter}>
      <ButtonInput btnType='button' ButtonText='активные' />
      <ButtonInput btnType='button' ButtonText='выполненные' />
      <ButtonInput btnType='button' ButtonText='все' />
    </div>
    <ButtonInput btnType='button' ButtonText='удалить выбранное' />
    <p className={styles.count}>
      осталось дел: 
        <span> { count }</span>
    </p>
  </footer>
);

export default Footer;
