import React from 'react';
import styles from './App.scss';
import List from '../List/List.js'
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Do it! Do it ', <sup key='1'>better!</sup>]}
              imgSrc="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" />
           
        
        
      </main>
    )
  }
}

export default App;
