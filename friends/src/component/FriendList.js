import React from 'react'
import Friend from './Friend'

function FriendList(props) {
  console.log(props.friends)
  return (
    <div className='friendList'>
      {props.friends.map(friend => {
        return <Friend friends={friend} key={friend.id} />
      })}
    </div>
  )
}

export default FriendList;