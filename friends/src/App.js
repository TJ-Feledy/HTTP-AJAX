import React from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './component/FriendList';

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
          friends: response.data
        })
      })
      .catch(err => {
        console.log('Error:', err)
      })
  }

  updateFriends = (friends) => {
    this.setState({friends})
  }  

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} updateFriends={this.updateFriends} />
      </div>
    );
  }
}

export default App;
