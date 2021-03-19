import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import './App.css';
import Data from './data.json';
import SelectedBeast from './selectedbeast';
import Dropdown from './form';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newData: Data,
      displayModal: false,
      favoriteBeast: {},
      filteredData: null,
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

  handleInput = (e) => {this.setState({ filteredData: this.state.newData.filter(value => {
    // console.log(e.target);
    if (e.target === undefined) {
      return false;
    } else
    {
      if (e.target.outerText === 'all') {
        return true;
      } else {
        return (Number(e.target.outerText) === Number(value.horns));
      }
    }
    })});
  };

  render() {
    return (
      <div className="App">
        <header>
        <Header />
        <Dropdown
          handleInput={this.handleInput}>
        </Dropdown>
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
