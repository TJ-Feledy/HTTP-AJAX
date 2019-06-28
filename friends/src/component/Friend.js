import React from 'react'

function Friend(props) {
  console.log(props.friends)
  const friend = props.friends.find(friend => `${friend.id}` === props.match.params.id)

  if (!friend) {
    return <p>Loading...</p>
  }

  return (
    <div className='friend'>
      <h1 className='name'>{friend.name}</h1>
      <p className='age'>Age: {friend.age}</p>
      <p className='email'>email: {friend.email}</p>
    </div>
  )
}

export default Friend;