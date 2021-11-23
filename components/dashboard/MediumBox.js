import React from 'react';

export default function MediumBox({ children }) {
  return (
    <div
      className='mediumBox'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        paddingLeft: '5px',
      }}
    >
      {children}
    </div>
  );
}
