import React from 'react';
import { GlobalHeader } from '../components/shared';

export default function HeaderOnly({ children }) {
  return (
    <div>
      <GlobalHeader />
      <div className='nnAppContainer'>{children}</div>
    </div>
  );
}
