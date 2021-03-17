import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import './App.css';
import './data.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
