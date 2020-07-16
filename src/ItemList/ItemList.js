import React from 'react';
import Item from '../Item/Item';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import styles from './ItemList.module.css';

const ItemList = ({ todoItem, index, onClickDone, onClickDelete, isDone }) => (
  <ol className={styles.list}>
    {
      todoItem.map(
        item =>
          <li
            className={styles.item}
            key={item.value}
          >
            <Checkbox
              color="primary"
              checked={item.isDone}
            />
            <Item className={styles.content}
              value={item.value}
              isDone={item.isDone}
              onClickDone={onClickDone}
              index={item.index}
               />
              
            <IconButton
              className={styles.delete}
              index={item.index}
              onClick={() => onClickDelete(item.index)}
            >
            </IconButton>
          </li>
      )
    }
  </ol>
);

export default ItemList;
