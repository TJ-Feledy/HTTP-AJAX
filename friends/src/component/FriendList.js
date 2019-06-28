import React from 'react'
import {Link} from 'react-router-dom'

import FriendForm from './FriendForm'

function FriendList(props) {
  return (
    <div className='friendList'>
      {props.friends.map(friend => {
        return <Link key={friend.id} to={`/friend/${friend.id}`}>
          <h1 className='name'>{friend.name}</h1>
          <p className='age'>Age: {friend.age}</p>
          <p className='email'>email: {friend.email}</p>
        </Link>
      })}
      {/* <FriendForm updateFriends={props.updateFriends} /> */}
    </div>
  )
}

export default FriendList;