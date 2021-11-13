import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import ModalComp from '../components/Modal';
import CreateInspo from '../components/CreateInspo';

export default function Inspiration() {
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
      getAllInspoPosts();
      setUser(user);
    }

    // subscribe to all inserts (post)
    const inspoPost = supabase
      .from('inspo_post')
      .on('INSERT', (payload) => {
        handleInsert(payload);
      })
      .subscribe();

    return () => supabase.removeSubscription(inspoPost);
  }, []);

  const handleInsert = (payload) => {
    setData((prevPosts) => [...prevPosts, payload.new]);
  };

  const getAllInspoPosts = async () => {
    try {
      let {
        data: inspo_post,
        error,
        status,
      } = await supabase.from('inspo_post').select('*');

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(inspo_post);
      }
      console.log(data, 'this tha data');
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
          <ModalComp btnText='Create Inspiration' title='Create Inspiration'>
            <CreateInspo user={user} />
          </ModalComp>
          {data.map((d) => (
            <div key={d.id} className='text-white'>
              <h1>{d.name}</h1>
              <h3>{d.industry}</h3>
              <p>{d.content}</p>
            </div>
          ))}
        </>
      );
    }
  };

  return <div className='text-white'>{view()}</div>;
}
