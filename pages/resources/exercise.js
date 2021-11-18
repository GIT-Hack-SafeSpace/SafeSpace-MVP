import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/client';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import MainLayout from '../../layouts/MainLayout';
import { gyms } from '../../data/resources';
import { exerciseIconPics } from '../../data/resources';
import Link from 'next/link';

const icons = exerciseIconPics.map((icon) => icon.url);

export default function Exercise() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const router = useRouter();
  const randomImage = () => icons[Math.floor(Math.random() * icons.length)];

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (!user) {
      router.push('/login');
    } else {
      setUser(user);
      setLoading(false);
    }
  }, []);

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <>
          <div
            className='titleWrap'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <h2>
              <b>Exercise & Meditation</b>
            </h2>
          </div>

          {gyms.map((d, i) => (
            <div key={i}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  marginBottom: '-10px',
                }}
              >
                <div
                  style={{
                    height: '110px',
                    width: '55px',
                    marginRight: '20px',
                  }}
                >
                  <img
                    style={{
                      filter: 'drop-shadow(1px 1px 1px gray)',
                      border: '1px solid lightgray',
                    }}
                    src={randomImage()}
                    alt='colorful icon'
                  />
                </div>
                    <div>
                        <h1 style={{fontSize: '20px', color: '#ED3457'}}>{d.content}</h1>
                      { d.address ? <p style={{color: '123456', fontSize: '17px'}}>📍 {d.address}</p> : <p></p>}
                        <div style={{marginTop: '-15px', color: 'gray'}}>
                            <Link  href={`${d.link}`}>
                                <a style={{color: 'blue', fontSize: '17px', textDecoration: 'None'}}>🌎 {d.link}</a>
                            </Link>
                            <p style={{marginTop: '5px'}}><a style={{textDecoration:'none', color: 'blue', fontSize: '17px'}} href={`tel:+${d.phone}`}>📞 {d.phone}</a></p>
                        </div>                       
                    </div>
                </div>
              <hr style={{ color: 'gray' }} />
            </div>
          ))}
        </>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
