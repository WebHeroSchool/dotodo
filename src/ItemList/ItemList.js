import React from 'react';
import Item from '../Item/Item';
import styles from '../App/App.module.css';

const ItemList = ({ todoItem }) => (
  <ol className={styles.list}>
    {
      todoItem.map(
      item => 
        <li key={item.value}>
          <Item value={item.value} isDone={item.isDone} />
        </li>
      )
    }
  </ol>
);

export default ItemList;
