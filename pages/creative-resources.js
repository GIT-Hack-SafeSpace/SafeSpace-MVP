import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import ModalComp from '../components/Modal';
import CreateResource from '../components/CreateResource'
import MainLayout from '../layouts/MainLayout';


export default function Resources() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (!user) {
      router.push('/login');
    } else {
      getAllResources();
      setUser(user);
    }

    // subscribe to all inserts (post)
    const therapyPost = supabase
      .from('therapy')
      .on('INSERT', (payload) => {
        handleInsert(payload);
      })
      .subscribe();

    return () => supabase.removeSubscription(therapyPost);
  }, []);

  const handleInsert = (payload) => {
    setData((prevPosts) => [...prevPosts, payload.new]);
  };

  const getAllResources = async () => {
    try {
      let {
        data: therapy,
        error,
        status,
      } = await supabase.from('therapy').select('*');

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(therapy);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <>
          <ModalComp title='Create Resource'>
            <CreateResource user={user} />
          </ModalComp>

          {data.map((d) => (
            <>
            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
              <div style={{height: '50px', width: '50px', marginRight: '20px'}}>
                <img src="https://i.postimg.cc/hjDPVQPq/colorfulicon.png" alt="colorul icon"/>
              </div>

              <div key={d.id} >
                <h1 style={{fontSize: '20px'}}>{d.name}</h1>
                <h3 style={{color: 'orange', fontSize: '12px'}}>{d.therapy_type}</h3>
                {/* <p>{d.profile_id}</p> */}
              </div>
            </div>
            <hr style={{color: 'lightgray'}} />
            </>
          ))}
               {/* {data.map((d) => (
            <div key={d.id} >
              <h1>{d.name}</h1>
              <h3>{d.therapy_type}</h3>
              <p>{d.profile_id}</p>
            </div>
          ))} */}
        </>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
