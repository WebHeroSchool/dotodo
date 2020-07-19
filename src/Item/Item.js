import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

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

Item.defaultProps = {
  isDone: false
};

export default Item;
