import React from 'react';

export default function Loader() {
  return (
    <div
      className='d-flex justify-content-center'
      style={{ marginTop: '7rem' }}
    >
      <div
        className='spinner-border text-light'
        style={{ width: '7rem', height: '7rem' }}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}
