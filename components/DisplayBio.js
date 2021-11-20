import React from 'react'

export default function DisplayBio({user}) {
  // let selectedUser = foundUser(user.userId);
  // console.log(selectedUser,'selected User');
  return (
    <div>
      {user.bio}
    </div>
  )
}
