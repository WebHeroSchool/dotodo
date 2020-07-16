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
        isDone: true,
        index: 0,
      }, 
      {
        value: 'вытащить слона',
        isDone: false,
        index: 1,
      }, 
      {
        value: 'положить оленя',
        isDone: false,
        index: 2,
      }, 
      {
        value: 'закрыть холодильник',
        isDone: false,
        index: 3,
      },
    ]
  };

  onClickDone = index => {
    const newItemList = this.state.items.map(item => {
      const newItem = {...item};

      if (item.index === index) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({items: newItemList});
  };

  onClickDelete = index => {
    this.setState(state => {
      const newItemList = state.items;
      newItemList.splice(index, 1);
      newItemList.forEach(item => {

        if (item.index >= index) {
          item.index--;
        }
      });
      return ({items: newItemList});
    });
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
        <ItemList
          todoItem={this.state.items}
          index={this.state.items.index}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete} 
        />
        <Footer count={this.state.items.filter(item => item.isDone === false).length} />
      </div>
    );
  }
}

export default App;
