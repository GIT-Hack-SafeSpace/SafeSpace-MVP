import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import ModalComp from '../components/Modal';
import CreateRantRave from '../components/CreateRantRave';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

export default function RantRave() {
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
      getPosts(user.id);
      setUser(user);
    }
    // subscribe to all inserts (post)
    const rave_rant_post = supabase
      .from('rave_rant_post')
      .on('INSERT', (payload) => {
        handleInsert(payload);
      })
      .subscribe();

    return () => supabase.removeSubscription(rave_rant_post);
  }, []);

  const handleInsert = (payload) => {
    setData((prevPosts) => [...prevPosts, payload.new]);
  };

  const getPosts = async (userId) => {
    try {
      let {
        data: rave_rant_post,
        error,
        status,
      } = await supabase
        .from('rave_rant_post')
        .select('*')
        .eq('profile_id', userId);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(rave_rant_post);
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
        <GlobalHeader />
        <div className="viewWrapper" style={{marginTop: '90px', width: '375px', height: '644px', border: '2px solid blue' }}>

          <ModalComp btnText='Add Log' title='Add Log'>
            <CreateRantRave user={user} />
          </ModalComp>
          {data.map((d) => (
            <div key={d.id} className='text-white'>
              <h1>{d.content}</h1>
              <h3>{d.created_at}</h3>
              <p>{d.profile_id}</p>
              <p>{d.isPersonal}</p>
              <p>{d.isResolved}</p>
            </div>
          ))}
          
          </div>
          <GlobalFooter />
        </>
      );
    }
  };

  return <div>{view()}</div>;
}
