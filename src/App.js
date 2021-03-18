import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import './App.css';
import Data from './data.json';
import SelectedBeast from './selectedbeast';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newData: Data,
      displayModal: false,
      favoriteBeast: {},
    }
  }

  displayAsModal = (index) => {
    console.log(index);
    this.setState ({favoriteBeast: this.state.newData[index], displayModal: 
    true});
  }

  handleClose =() => {
    this.setState({displayModal: false});
  }

  render() {
    return (
      <div className="App">
        <header>
        <Header />
        <Main 
        cards={this.state.newData}
        displayAsModal={this.displayAsModal}
        />
        <SelectedBeast
        show={this.state.displayModal}
        handleClose={this.handleClose}
        favoriteBeast={this.state.favoriteBeast}
        />
        <Footer />
        </header>
      </div>
    );
  }
}

export default App;
