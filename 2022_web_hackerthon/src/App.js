import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <Nav/>
        <Main/>
      </div>
    )
  }
}

export default App;
