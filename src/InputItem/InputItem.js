import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../App/App.module.css';

const InputItem = () => (
  <div className={styles.add_task}>
    <TextField
      id="standard-basic"
      label="Новая задача"
    />
    <Button variant="contained" color="primary">
      Добавить
    </Button>
  </div>
);

export default InputItem;