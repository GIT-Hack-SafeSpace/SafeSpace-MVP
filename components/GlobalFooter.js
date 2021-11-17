import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const community = '/footer/community.svg';
const companies = '/footer/companies.svg';
const addentry = '/footer/addentry.svg';
const inspiration = '/footer/inspiration.svg';
const resources = '/footer/resources.svg';

export default function GlobalFooter() {
  const router = useRouter();

  const resourcePageConditions = () => {
    switch (router.pathname) {
      case '/resources':
        return 'activeFooter';
        break;
      case '/resources/help':
        return 'activeFooter';
        break;
      case '/resources/creative':
        return 'activeFooter';
        break;
      case '/resources/counseling':
        return 'activeFooter';
      case '/resources/exercise':
        return 'activeFooter';
        break;
      default:
        return '';
    }
  };

  return (
    <footer>
      <ul className='allFooterButtons'>
        <li className={router.pathname == '/community' ? 'activeFooter' : ''}>
          <Link href='/community'>
            <div className='footerBarOption'>
              <p className='footerIcon'>
                <img
                  className='footerSvg'
                  src={community}
                  alt='community link'
                />
              </p>
              <p className='optionTitle'>Community</p>
            </div>
          </Link>
        </li>
        <li className={router.pathname == '/companies' ? 'activeFooter' : ''}>
          <Link href='/companies'>
            <div className='footerBarOption'>
              <p className='footerIcon'>
                <img
                  className='footerSvg'
                  src={companies}
                  alt='companies link'
                />
              </p>
              <p className='optionTitle'>Companies</p>
            </div>
          </Link>
        </li>
        <li className={router.pathname == '/journal' ? 'activeFooter' : ''}>
          <Link href='/journal'>
            <div className='footerBarOption'>
              <p className='footerIcon'>
                <img className='footerSvg' src={addentry} alt='addentry link' />
              </p>
              <p className='optionTitle'>Journal</p>
            </div>
          </Link>
        </li>
        <li className={router.pathname == '/inspiration' ? 'activeFooter' : ''}>
          <Link href='/inspiration'>
            <div className='footerBarOption'>
              <p className='footerIcon'>
                <img
                  className='footerSvg'
                  src={inspiration}
                  alt='inspiration link'
                />
              </p>
              <p className='optionTitle'>Inspiration</p>
            </div>
          </Link>
        </li>
        <li className={resourcePageConditions()}>
          <Link href='/resources'>
            <div className='footerBarOption'>
              <p className='footerIcon'>
                <img
                  className='footerSvg'
                  src={resources}
                  alt='resources link'
                />
              </p>
              <p className='optionTitle'>Resources</p>
            </div>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
