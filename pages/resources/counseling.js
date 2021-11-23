import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/client';
import { useRouter } from 'next/router';
import { Loader } from '../../components/shared';
import MainLayout from '../../layouts/MainLayout';
import { counselors } from '../../data/resources';
import styled from 'styled-components';

const CounsStyles = styled.div`
  background-color: #fefefe;
  margin-bottom: 200px;

  h1 {
    padding-bottom: 15px;
    font-size: 28px;
  }
`;

export default function Counseling() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, []);

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <CounsStyles>
          <div
            className='titleWrap'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <h1 className="rscHeaders">Seeking Counseling</h1>
          </div>

          {counselors.map((d, i) => (
            <div key={i}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  marginBottom: '-10px',
                }}
              >
                <div>
                  <h2 style={{ fontSize: '20px', color: '#63988E' }}>
                    {d.content}
                  </h2>
                  {d.address ? (
                    <p style={{ color: '#123456' }}>📍 {d.address}</p>
                  ) : (
                    <p></p>
                  )}
                  <div
                    style={{ marginTop: '-10px', color: 'gray' }}
                    className='d-flex'
                  >
                    <p>
                      <a
                        style={{ textDecoration: 'none', fontSize: '18px' }}
                        href={`tel:+${d.phone}`}
                      >
                        📞{' '}
                      </a>
                    </p>
                    <p style={{ margin: '0 10px' }}>|</p>

                    <a
                      href={`http://${d.link}`}
                      target='_blank'
                      style={{
                        color: '#ED3457',
                        fontSize: '15px',
                        textDecoration: 'None',
                      }}
                    >
                      {d.link}
                    </a>
                  </div>
                  <div
                    className='d-flex'
                    style={{ marginTop: '-10px', marginBottom: '15px' }}
                  >
                    {d.specialty.map((specialty, i) => {
                      return (
                        <p
                          key={i}
                          style={{
                            filter: 'drop-shadow(1px 1px 1px gray)',
                            padding: '2px 10px',
                            color: 'gray',
                            border: '1px solid gray',
                            margin: '0px 5px',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            fontSize: '12px',
                          }}
                        >
                          {specialty}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <hr style={{ color: 'gray' }} />
            </div>
          ))}
        </CounsStyles>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
