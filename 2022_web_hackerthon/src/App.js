import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <Content/>
      </div>
    )
  }
}

export default App;
