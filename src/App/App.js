import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from './App.module.css';
import '../fonts/fonts.css';
import PropTypes from 'prop-types';

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

  onClickAdd = value => {

    if (value.length > 30) {
      value = value.slice(0,30) + '...';
    }

    this.setState(state => ({
      items: [
        ...state.items,
        {
          value,
          isDone: false,
          index: this.state.items.length,
        }
      ]
    }));
  };

  selectedDelete = () => this.setState(state => ({ items: state.items.filter(item => item.isDone !== true)}))

  render () {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          Список дел:
        </h1>
        <InputItem onClickAdd={this.onClickAdd} />
        <ItemList
          todoItem={this.state.items} 
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete} 
        />
        <Footer
          selectedDelete={this.selectedDelete}
          count={this.state.items.filter(item => item.isDone === false).length} /> 
      </div>
    );
  }
}

App.propTypes = {
  index: PropTypes.number,
  value: PropTypes.string
};

export default App;
