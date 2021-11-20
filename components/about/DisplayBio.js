import React from 'react';

export default function DisplayBio({ bio, image }) {
  // let selectedUser = foundUser(user.userId);
  // console.log(selectedUser,'selected User');
  return (
    <div className='bio-modal-text'>
      <div className="text-center mb-3">
        <img style={{ width: '150px', borderRadius: '50%' }} src={image} />
      </div>

      <div
        className='bio-modal-text'
        dangerouslySetInnerHTML={{ __html: bio }}
      />
    </div>
  );
}
