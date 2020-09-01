import React from 'react';
import styles from './Constacts.module.css';

const Contacts = () => {
  const age = Math.floor((new Date() - new Date(1989, 9, 11)) / 1000 / 60 / 60 / 24 / 365);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Contacts</h1>
      <header>
        <div className={styles.avatar}></div>
        <div className={styles.about}>
          <span className={styles.about__name_title}>name:</span>
          <span className={styles.about__name}>Kolesnikov Dmitriy</span>
          <span className={styles.about__name_title}>имя:</span>
          <span className={styles.about__name}>Колесников Дмитрий</span>
          <span className={styles.about__age_title}>age / возраст:</span>
          <span className={styles.about__age}>{age}</span>
          <span className={styles.about__city_title}>city / город:</span>
          <span className={styles.about__city}>Moscow / Москва</span>
        </div>
      </header>
      <div className={styles.links}>
        <div className={styles.links__item}>
          <a href="https://vk.com/tytytyw">
            <img src="/img/vk.png" alt="VK"></img>
          </a>
        </div>
        <div className={styles.links__item}>
          <a href="https://instagram.com/tytytyw">
            <img src="/img/inst.png" alt="VK"></img>
          </a>
        </div>
        <div className={styles.links__item}>
          <a href="https://github.com/tytytyw">
            <img src="/img/gh.png" alt="VK"></img>
          </a>
        </div>
        <div className={styles.links__item}>
          <a href="https://t.me/tytytyw">
            <img src="/img/t.png" alt="VK"></img>
          </a>
        </div>
        <div className={styles.links__item}>
          <a href="https://www.linkedin.com/in/tytytyw/">
            <img src="/img/in.png" alt="VK"></img>
          </a>
        </div>
        <div className={styles.links__item}>
          <a href="mailto:nonameFOX@yandex.ru">
            <img src="/img/mail.png" alt="VK"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
