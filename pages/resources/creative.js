import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/client';
import { useRouter } from 'next/router';
import { Loader, Tags } from '../../components/shared';
import MainLayout from '../../layouts/MainLayout';
import { creative } from '../../data/resources';
import { creativeIconPics } from '../../data/resources';
import { resourceTagData } from '../../data/tagData';
import { ResourcesStyles } from '../../styles/ResourcesStyles';

const icons = creativeIconPics.map((icon) => icon.url);

export default function Creative() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const randomImage = () => icons[Math.floor(Math.random() * icons.length)];

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
        <ResourcesStyles>
          <div
            className='titleWrap'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <h1 className="rscHeaders">
              Creative Solutions
            </h1>
          </div>

          {creative.map((d, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{ height: '50px', width: '50px', marginRight: '20px' }}
                >
                  <img
                    style={{ filter: 'drop-shadow(1px 1px 1px gray)' }}
                    src={randomImage()}
                    alt='colorful icon'
                  />
                </div>
                <div>
                  <h2 style={{ fontSize: '20px' }}>{d.content}</h2>
                  <div className='d-flex'>
                    <Tags tags={d.tags} data={resourceTagData} />
                  </div>
                </div>
              </div>
              <hr style={{ color: 'lightgray' }} />
            </div>
          ))}
        </ResourcesStyles>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
