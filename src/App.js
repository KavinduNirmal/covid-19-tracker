import React from 'react';

import { Cards, Charts, CountryPicker }from './components';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchData = await fetchData();

    this.setState({ data: fetchData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={ styles.container }>
        <Cards data={data}/>
        <Charts />
        <CountryPicker />
      </div>
    )
  }
}
    
export default App;