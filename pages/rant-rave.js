import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

export default function RantRave() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (!user) {
      router.push('/login');
    } else {
      getPosts(user.id);
    }
  }, []);

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
      return data.map((d) => (
        <div key={d.id} className='text-white'>
          <h1>{d.content}</h1>
          <h3>{d.created_at}</h3>
          <p>{d.profile_id}</p>
          <p>{d.isPersonal}</p>
          <p>{d.isResolved}</p>
        </div>
      ));
    }
  };

  return <div>{view()}</div>;
}
