import React from 'react'
import Friend from './Friend'
import FriendForm from './FriendForm'

function FriendList(props) {
  return (
    <div className='friendList'>
      {props.friends.map(friend => {
        return <Friend friends={friend} key={friend.id} />
      })}
      <FriendForm updateFriends={props.updateFriends} />
      {console.log(props.friends)}
    </div>
  )
}

export default FriendList;