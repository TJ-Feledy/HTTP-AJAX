import React from 'react';
import './App.css';
import axios from 'axios';
import {Route,Link} from 'react-router-dom';
import FriendList from './component/FriendList';
import Friend from './component/Friend';
import FriendForm from './component/FriendForm';


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
    const {friends} = this.state

    return (
      <div className="App">
        <Link to='/'>Friends</Link>
        <Link to='/friend/add'>Add A Friend</Link>
        {/* <FriendList friends={friends} updateFriends={this.updateFriends} /> */}

        <Route path='/' exact render={(props) => <FriendList {...props} friends={friends} updateFriends={this.updateFriends} />} />
        <Route path='/friend/:id' render={props => <Friend {...props} friends={friends} /> } />
        <Route path='/friend/add' render={props => <FriendForm {...props} updateFriends={this.updateFriends} />} />
      </div>
    );
  }
}

export default App;
