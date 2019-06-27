import React from 'react'
import axios from 'axios'

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      error: null
    }
  }

  addFriend = evt => {
    evt.preventDefault()
    const {name,age,email} = this.state
    const payload = {name,age,email}

    axios.post('http://localhost:5000/friends',payload)
      .then((response) => {
        this.setState({error: null})
        this.props.updateFriends(response.data)
      })
      .catch((err) => {
        this.setState({error: err.response.data.error})
      })
  }

  changeHandler = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div className='friendForm'>
        <form onSubmit={this.addFriend} >
          <input type='text' name='name' placeholder='Name' onChange={this.changeHandler} /><br />
          <input type='number' name='age' placeholder='Age' onChange={this.changeHandler} /><br />
          <input type='email' name='email' placeholder='Email' onChange={this.changeHandler} /><br />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}

export default FriendForm;