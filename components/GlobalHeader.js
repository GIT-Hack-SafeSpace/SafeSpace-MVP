import React from 'react';
import Link from 'next/link';

export default function GlobalHeader() {
  return (
    <nav>
      <p className='menuExample'>=</p>
      <Link href='/journal'>
        <h1 className='safespace'>SafeSpace.</h1>
      </Link>
      <p> </p>
    </nav>
  );
}
