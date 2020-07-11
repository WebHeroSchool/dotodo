import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from './App.module.css';
import '../fonts/fonts.css';

const todoItem = [
  {
    value: 'открыть холодильник',
    isDone: true
  }, 
  {
    value: 'вытащить слона',
    isDone: false
  }, 
  {
    value: 'положить оленя',
    isDone: false
  }, 
  {
    value: 'закрыть холодильник',
    isDone: false
  }
];

const App = () => (
  <div className={styles.wrap}>
    <h1 className={styles.title}>
      Список дел:
    </h1>
    <InputItem />
    <ItemList todoItem={todoItem} />
    <Footer count={todoItem.filter(item => item.isDone === false).length} />
</div>
);

export default App;