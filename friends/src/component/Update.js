import React from 'react'
import axios from 'axios'

class Update extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      name: props.friend.name,
      age: props.friend.age,
      email: props.friend.email,
      error: null
    }
  }

  addFriend = evt => {
    evt.preventDefault()
    const { name, age, email } = this.state
    const payload = { name, age, email }

    axios.post('http://localhost:5000/friends', payload)
      .then((response) => {
        this.setState({ error: null })
        this.props.updateFriends(response.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        this.setState({ error: err.data.error })
      })

  }

  changeHandler = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const { name, age, email, error } = this.state

    return (
      <div className='friendForm'>
        <form onSubmit={this.addFriend} >
          <h2 className='formHeader'>Add A Friend</h2>
          <p>{error}</p>
          <input type='text' name='name' placeholder='Name' value={name} onChange={this.changeHandler} /><br />
          <input type='number' name='age' placeholder='Age' value={age} onChange={this.changeHandler} /><br />
          <input type='email' name='email' placeholder='Email' value={email} onChange={this.changeHandler} /><br />
          <input type='submit' value='Update' />
        </form>
      </div>
    )
  }
}

export default Update;