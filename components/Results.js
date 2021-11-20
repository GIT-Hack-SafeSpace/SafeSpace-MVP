import React from 'react';

export default function Results({ style, img, notes, adv, dis, appro }) {
  return (
    <>
      <h5>
        Your primary conflict style is <br />
        <b>{style}</b>
      </h5>
      <div>
        <img src={`/profileImages/${img}.png`} style={{ width: '134px' }} />
      </div>
      <hr />
      <div className='mb-3 line-break'>
        <b>Your results detail:</b> <br />
        {notes}
      </div>
      <div className='mb-3'>
        <b>Advantage:</b> {adv}
      </div>
      <div className='mb-3'>
        <b>Disadvantage:</b> {dis}
      </div>
      <div className='mb-3'>
        <b>Appropriate times to use this style:</b> <br />
        {appro}
      </div>
    </>
  );
}
