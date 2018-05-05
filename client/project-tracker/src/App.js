import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectView from './components/ProjectView';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      actions: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/projects`)
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SPRINT CHALLENGE PROJECT!</h1>
        </header>
        <Route exact path='/' component = {ProjectList} />
        <Route path='/:id' component = {ProjectView} />
      </div>
    );
  }
}

export default App;
