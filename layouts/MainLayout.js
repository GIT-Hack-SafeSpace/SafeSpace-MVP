import React from 'react';
import { GlobalFooter, GlobalHeader } from '../components/shared';

export default function MainLayout({ children }) {
  return (
    <div>
      <GlobalHeader />
      <div className='appContainer'>{children}</div>
      <GlobalFooter />
    </div>
  );
}
