import React from 'react';
import styles from '../App/App.module.css';

const Footer = ({ count }) => (
  <footer className={styles.footer}>
    осталось дел: { count }
  </footer>
);

export default Footer;