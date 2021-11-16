import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/client';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import MainLayout from '../../layouts/MainLayout';
import { creative } from '../../data/resources';
import { creativeIconPics } from '../../data/resources';
import { resourceTagData } from '../../data/tagData';
import Tags from '../../components/Tags';


const icons = creativeIconPics.map(icon => icon.url);
console.log(resourceTagData[0])

export default function Creative() {
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
      setLoading(false)
    }
  }, []);

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <>
          <div className="titleWrap" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2><b>Creative Solutions</b></h2>
          </div>

          {creative.map((d, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ height: '50px', width: '50px', marginRight: '20px' }}>
                  <img src={randomImage()} alt="colorful icon" />
                </div>
                <div style={{ marginBottom: '-15px' }}>
                  <h1 style={{ fontSize: '20px' }}>{d.content}</h1>
                  <div className="d-flex" >
                    <Tags tags={resourceTagData.map((rd) => rd.tagName)} data={resourceTagData} />
                  </div>
                </div>
              </div>
              <hr style={{ color: 'lightgray' }} />
            </div>
          ))}
        </>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
