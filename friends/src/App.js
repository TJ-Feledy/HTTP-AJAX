import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response
        })
      })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log('Error:', err)
      })
  }
  

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
