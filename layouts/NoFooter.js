import React from 'react';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';

export default function NoFooter({ children }) {
  return (
    <div>
      <GlobalHeader />
      <div className='appContainer'>{children}</div>
    </div>
  );
}
