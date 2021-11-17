import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import MainLayout from '../layouts/MainLayout';

import CommunityPost from '../components/CommunityPost';

import styled from 'styled-components';

const CommunityView = styled.div`
h1{
  font-size:28px;
}`

export default function Community() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();

    if (!user) {
      router.push('/login');
    } else {
      getPosts();
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

  const getPosts = async () => {
    try {
      let {
        data: rave_rant_post,
        error,
        status,
      } = await supabase
        .from('rave_rant_post')
        .select('*')
        .eq('share', true);

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
        <CommunityView>
          <h1>Community</h1>
          {
            data.map((item) => (
              <CommunityPost data={item}/>
            ))
          }
        </CommunityView>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
