import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Footer = ({ count, selectedDelete }) => (

  <footer className={styles.footer}>
      <div className={styles.filter}>

      <Button
        variant="contained"
        color="primary"
      >
        активные
      </Button>

      <Button
        variant="contained"
        color="primary"
      >
        выполненные
      </Button>

      <Button
        variant="contained"
        color="primary"
      >
        все
      </Button>
    </div>

    <Button
      variant="contained"
      color="primary"
      onClick={() => selectedDelete()}
    >
      Удалить выполненные
    </Button>

    <p className={styles.count}>
      осталось дел:
      <span>
        {' ' + count }
      </span>
    </p>
  </footer>
);



Footer.propTypes = {
  count: PropTypes.number,
  selectedDelete: PropTypes.func
};

export default Footer;
