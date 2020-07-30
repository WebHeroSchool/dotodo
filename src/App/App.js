import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Todo from '../Todo/Todo.js';
import About from '../About/About.js';
import Contacts from '../Contacts/Contacts.js';
import styles from './App.module.css';
import '../fonts/fonts.css';

const App = () => {

  return (
    <Router>
      <div className={styles.wraper}>
        <div className={styles.menu}>
          <Link to='/'><div className={styles.item}>Обо мне</div></Link>
          <Link to='/todo'><div className={styles.item}>Дела</div></Link>
          <Link to='/contacts'><div className={styles.item}>Контакты</div></Link>
        </div>
        <div className={styles.content}>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />
        </div>
      </div>
      </Router>
  );
}

export default App;
