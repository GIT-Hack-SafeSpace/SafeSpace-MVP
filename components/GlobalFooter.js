import React from 'react';
import Link from 'next/link';

export default function GlobalFooter() {
  return (
    <footer>
      <div className='orderFooterOptions'>
        <Link href='/community'>
          <div className='footerBarOption'>
            <p className='footerIcon'>💬</p>
            <p className='optionTitle'>Community</p>
          </div>
        </Link>
        <Link href='/companies'>
          <div className='footerBarOption'>
            <p className='footerIcon'>🌐</p>
            <p className='optionTitle'>Companies</p>
          </div>
        </Link>
        <Link href='/journal'>
          <div className='footerBarOption'>
            <p className='footerIcon'>➕</p>
            <p className='optionTitle'>Journal</p>
          </div>
        </Link>
        <Link href='/inspiration'>
          <div className='footerBarOption'>
            <p className='footerIcon'>🤍</p>
            <p className='optionTitle'>Inspiration</p>
          </div>
        </Link>
        <Link href='/resources'>
          <div className='footerBarOption'>
            <p className='footerIcon'>💡</p>
            <p className='optionTitle'>Resources</p>
          </div>
        </Link>
      </div>
    </footer>
  );
}
