import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, id, isDone, onClickDone }) => (
  <span
  onClick={() => onClickDone(id)}
  className={
    classnames({
      [styles.content]: true,
      [styles.done]: isDone
    })
  }>
    { value }
  </span>
);

export default Item;
