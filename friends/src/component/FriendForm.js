import React from 'react'

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postForm: {}
    }
  }

  render() {
    return (
      <div className='friendForm'>
        <form className='addFriend' action='http://localhost:5000/friends' method='post'>
          <input type='text' name='name' placeholder='Name' /><br />
          <input type='number' name='age' placeholder='Age' /><br />
          <input type='email' name='email' placeholder='Email' /><br />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}

export default FriendForm;