import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player/lazy';
import Loader from '../components/Loader';
import MainLayout from '../layouts/MainLayout';
import InspirationImage from '../components/InspirationImage';
import CreateInspo from '../components/CreateInspo';
import ModalComp from '../components/Modal';

export default function Inspiration() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [showModal, setShow] = useState(false);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    setData((prevPosts) => [payload.new, ...prevPosts]);
  };

  const getAllInspoPosts = async () => {
    try {
      let {
        data: inspo_post,
        error,
        status,
      } = await supabase
        .from('inspo_post')
        .select('*')
        .order('created_at', { ascending: false });

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(inspo_post);
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
          <ModalComp
            showModal={showModal}
            handleClose={handleClose}
            handleShow={handleShow}
            title='Create Inspiration'
          >
            <CreateInspo handleClose={handleClose} user={user} />
          </ModalComp>
          {data.map((media) => {
            return media.type === 'image' ? (
              <InspirationImage image={media} />
            ) : (
              <ReactPlayer
                url={media.media_url}
                controls={true}
                pip={true}
                width='100%'
                height='200px'
                style={{ backgroundColor: 'black', margin: '5px 0' }}
              />
            );
          })}
        </>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
