import React from 'react'

function Friend(props) {
  const friend = props.friends
  return (
    <div className='friend'>
      <h1 className='name'>{friend.name}</h1>
      <p className='age'>Age: {friend.age}</p>
      <p className='email'>email: {friend.email}</p>
    </div>
  )
}

export default Friend;