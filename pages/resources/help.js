import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/client';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import MainLayout from '../../layouts/MainLayout';
import {help} from '../../data/resources'
import Link from 'next/link'


export default function Help() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const router = useRouter();

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
        <div className="titleWrap" style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2><b>Helpful Resources</b></h2>
        </div>

          {help.map((d, i) => (
            <div key={i}>
                <div style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '-10px'}}>
                    <div>
                        <h1 style={{fontSize: '20px', color: 'darkblue'}}>{d.content}</h1>
                       { d.address ? <p style={{color: 'gray'}}>📍 {d.address}</p> : <p></p>}
                        <div style={{marginTop: '-10px', color: 'gray'}} className="d-flex">
                            <p><a style={{textDecoration:'none', color: 'blue'}} href={`tel:+${d.phone}`}>📞 {d.phone}</a></p>
                            <p style={{margin: '0 10px'}}>|</p>
                            <Link  href={`${d.link}`}>
                                <a style={{color: 'blue', fontSize: '15px', textDecoration: 'None'}}>{d.link}</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr style={{color: 'gray'}} />
            </div>
          ))}
    
        </>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
