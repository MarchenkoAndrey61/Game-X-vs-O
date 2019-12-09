import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Board from './Board'

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square