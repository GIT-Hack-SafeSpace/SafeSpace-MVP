import React from 'react';
import Link from 'next/link';

const community = 'footer/community.svg';
const companies = 'footer/companies.svg';
const addentry = 'footer/addentry.svg';
const inspiration = 'footer/inspiration.svg';
const resources = 'footer/resources.svg';


export default function GlobalFooter() {
  return (
    <footer>
      <div className='orderFooterOptions'>
        <Link href='/community'>
          <div className='footerBarOption'>
            <p className='footerIcon'><img className='footerIcon' src={community} alt='community link'/></p>
            <p className='optionTitle'>Community</p>
          </div>
        </Link>
        <Link href='/companies'>
          <div className='footerBarOption'>
            <p className='footerIcon'><img className='footerIcon' src={companies} alt='companies link'/></p>
            <p className='optionTitle'>Companies</p>
          </div>
        </Link>
        <Link href='/journal'>
          <div className='footerBarOption'>
            <p className='footerIcon'><img className='footerIcon' src={addentry} alt='addentry link'/></p>
            <p className='optionTitle'>Journal</p>
          </div>
        </Link>
        <Link href='/inspiration'>
          <div className='footerBarOption'>
            <p className='footerIcon'><img className='footerIcon' src={inspiration} alt='inspiration link'/></p>
            <p className='optionTitle'>Inspiration</p>
          </div>
        </Link>
        <Link href='/resources'>
          <div className='footerBarOption'>
            <p className='footerIcon'><img className='footerIcon' src={resources} alt='resources link'/></p>
            <p className='optionTitle'>Resources</p>
          </div>
        </Link>
      </div>
    </footer>
  );
}
