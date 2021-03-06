import React from 'react';
import { useRouter } from 'next/router';
import { results } from '../data/quizData';
import HeaderOnly from '../layouts/HeaderOnly';

export default function ConflictStyles() {
  const router = useRouter();

  return (
    <HeaderOnly>
      <h1 className='splash-title text-center'>Conflict Modes</h1>
      <hr />
      {Object.keys(results).map((style) => {
        return (
          <div key={results[style].animal}>
            <h3>
              <img
                src={`/profileimages/${style}.png`}
                style={{ width: '40px' }}
              />{' '}
              {results[style].animal}{' '}
            </h3>
            <p>{results[style].more}</p>
            <p className='line-break'>
              <b>NOTES</b>: {results[style].notes}
            </p>
            <p className='line-break'>
              <b>Advantage</b>: {results[style].advantage}
            </p>
            <p className='line-break'>
              <b>Disadvantage</b>: {results[style].disadvantage}
            </p>
            <p className='line-break'>
              <b>When to use this style</b>: {results[style].appropriate}
            </p>
            <hr />
          </div>
        );
      })}
        <button
          className='btn-warning btn'
          onClick={() => router.push('/conflict-quiz')}
        >
          Get Your Default Style
        </button>
    </HeaderOnly>
  );
}
