import React from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonInput from '@material-ui/core/Button';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
  
  state = {
    inputValue: '',
    inputLabel: 'Новая задача'
  };

 onButtonClick = () => {

  if (this.state.inputValue !=='') {
    this.setState({ inputValue: ''});
    this.props.onClickAdd(this.state.inputValue.toLowerCase());
  } else {
    this.setState({inputLabel:<span className={styles.error}> ошибка: пустое поле </span>});
  }
};

  render() {
    const { onClickAdd } = this.props;

    return (
      <div className={styles.add_task}>
        <form action="">
          <TextField
            id="standard-basic"
            label={this.state.inputLabel}
            value={this.state.inputValue}
            onClick={() => this.setState({inputLabel: 'Новая задача'})}
            onChange={event => this.setState({
              inputValue: event.target.value.toUpperCase(),
              inputLabel: 'Новая задача'
              })
            }
          />
          <ButtonInput
            variant="contained"
            color="primary"
            onClick={this.onButtonClick}
          >
            Добавить
          </ButtonInput>
        </form>
      </div>
    );
  }
}

InputItem.propTypes = {
  onClickAdd: PropTypes.func
};

export default InputItem;
