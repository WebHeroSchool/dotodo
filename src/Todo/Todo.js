import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from './Todo.module.css';
import PropTypes from 'prop-types';

class Todo extends React.Component {
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
    ],
  };

  filter(items, filter) {
   switch(filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter( item => !item.isDone);
    case 'done':
      return items.filter( item => item.isDone);           
    default:
    return items;
   }
}

  render () {
    const {state} = this.props;
    const { items, filter } = this.state;
    const visibleItems = this.filter(items, filter);

    const onClickFilter = filter => {
      this.setState({ filter });
    };

    const onClickDelete = index => {
      this.setState({ items: this.state.items.filter(item => item.index !== index) });
      this.state.items.forEach(item => {

        if (item.index > index) {
          item.index--;
        }
      });
    };

  const onClickDone = index => {
    const newItemList = this.state.items.map(item => {
      const newItem = {...item};

      if (item.index === index) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });
    this.setState({  items: newItemList });
  };

  const onClickAdd = value => {

    if (value.length > 30) {
      value = value.slice(0,30) + '...';
    }
    this.setState(state => ({
        items:[
        ...this.state.items,
        {
          value,
          isDone: false,
          index: this.state.items.length,
        }
      ]
    }));
  };

   const selectedDelete = () => {
    let count = 0;
    this.state.items.forEach(item => {
      
      if (item.isDone === true) {
        count = count + 1;
      }
      item.index = item.index - count ;
    });
    this.setState({ items: this.state.items.filter(item => item.isDone !== true) });
  };
  
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>
        Список дел:
      </h1>
      <InputItem onClickAdd={onClickAdd} todoItem={this.state.items} />
      <ItemList
        todoItem={visibleItems}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete} 
      />
      <Footer
        onClickFilter={onClickFilter}
        selectedDelete={selectedDelete}
        count={items.filter(item => item.isDone === false).length} 
        countAll={items.length}
      /> 
    </div>
  );
  }
};

export default Todo;

Todo.propTypes = {
  index: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object)
};
