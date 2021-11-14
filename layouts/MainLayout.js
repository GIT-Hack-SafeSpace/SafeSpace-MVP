import React from 'react';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';

export default function MainLayout({ children }) {
  return (
    <div>
      <GlobalHeader />
      <div className='appContainer'>{children}</div>
      <GlobalFooter />
    </div>
  );
}
