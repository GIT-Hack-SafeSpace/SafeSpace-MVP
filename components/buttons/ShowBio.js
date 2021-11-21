import React from 'react';
const windowIcon = 'icons/new-window.svg';

export default function ShowBio({ handleShow }) {
  return (
    <p
      style={{ cursor: 'pointer' }}
      className='bioModalButton'
      src={windowIcon}
      alt='click for more info'
      onClick={handleShow}
    >
      Learn More
    </p>
  );
}
