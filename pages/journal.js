import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import ModalComp from '../components/Modal';
import CreateRantRave from '../components/CreateRantRave';
import JournalEntry from '../components/JournalEntry';
import MainLayout from '../layouts/MainLayout';

import styled from 'styled-components';

const JournalStyles = styled.div`
  background-color: #fefefe;
  `;

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
        <JournalStyles>
          <ModalComp title='Add Entry'>
            <CreateRantRave user={user} />
          </ModalComp>
            <JournalEntry data={data}/>
        </JournalStyles>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
