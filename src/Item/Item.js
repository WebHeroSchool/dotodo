import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';


const Item = ({ value, index, isDone, onClickDone }) => (
  <span
  onClick={() => onClickDone(index)}
  className={
    classnames({
      [styles.content]: true,
      [styles.done]: isDone
    })
  }>
    { value }
  </span>
);

Item.propTypes = {
  index: PropTypes.number,
  isDone: PropTypes.bool,
  value: PropTypes.string,
  onClickDone: PropTypes.func
};

export default Item;
