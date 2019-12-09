import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Board from './Board'

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      value:null,
    };
    
  }
  render() {
    return (
      <button className="square" 
              onClick ={() => this.setState ({value : 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square