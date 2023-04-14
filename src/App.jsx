import React, { Component } from 'react'
import './App.css';
import logo from './logo.svg';
import SignUpForm from './components/signUpForm';

export class App extends Component {
  render() {
    return (
      <div className="App">
        < SignUpForm />
        </div>
    )
  }
}

export default App
