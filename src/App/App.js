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
        id: 0,
      }, 
      {
        value: 'вытащить слона',
        isDone: false,
        id: 1,
      }, 
      {
        value: 'положить оленя',
        isDone: false,
        id: 2,
      }, 
      {
        value: 'закрыть холодильник',
        isDone: false,
        id: 3,
      },
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = {...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({items: newItemList});
  };

  onClickDelete = id => {
    this.setState(state => {
      const newItemList = state.items;
      newItemList.splice(id, 1);
      newItemList.forEach(item => {

        if (item.id >= id) {
          item.id--;
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
          id={this.state.items.id}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete} 
        />
        <Footer count={this.state.items.filter(item => item.isDone === false).length} />
      </div>
    );
  }
}

export default App;
