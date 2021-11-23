import React from 'react';

export default function StatDetails({ object }) {
  return (
    <div className={`mediumBox ${object.value}`}>
      <div style={{ padding: '2px' }}>
        <p style={{ fontSize: '20px', fontFamily: 'Poppins' }}>
          {object.heading}
        </p>
      </div>
      <hr style={{ margin: '5px 0px' }} />
      <div
        style={{
          display: 'flex',
          flexDirection: object.reverse ? 'row-reverse' : '',
          alignItems: 'center',
          fontFamily: 'Poppins',
          paddingLeft: object.reverse ? '' : '5px',
        }}
      >
        <p
          style={{
            fontSize: '15px',
            marginBottom: '0px',
            letterSpacing: '1px',
            flex: '2',
            marginRight: object.reverse ? '0' : '10px',
            marginLeft: object.reverse ? '10px' : '0',
          }}
        >
          {object.subheading}
        </p>
        <p style={{ flex: '1', fontSize: '53px', alignContent: 'center' }}>
          {
            object.id === 'state' ? <img style={{ height: '90px' }} src={`/moods/${object.value}.png`} /> : object.value
          }
        </p>
      </div>
    </div>
  );
}
