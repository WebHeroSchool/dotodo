import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ButtonInput from '../Button/Button.js';
import styles from './App.module.css';
import '../fonts/fonts.css';

class App extends React.Component {
  state = {
    items: [
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
    ]
  };

  render () {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          Список дел:
        </h1>
        <form action="">
          <div className={styles.add_task}>
            <InputItem />
            <ButtonInput btnType='reset' ButtonText='Добавить' />
          </div>
        </form>
        <ItemList todoItem={this.state.items} />
        <Footer count={this.state.items.filter(item => item.isDone === false).length} />
      </div>
    );
  }
}

export default App;
