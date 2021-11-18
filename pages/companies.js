import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import MainLayout from '../layouts/MainLayout';
import CompanyReview from '../components/CompanyReview';
import ModalComp from '../components/Modal';
import CreateCompany from '../components/CreateCompany';

export default function Companies() {
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
      getCompanyData();
      setUser(user);
    }

    // subscribe to all inserts (post)
    const companyPost = supabase
      .from('company_post')
      .on('INSERT', (payload) => {
        handleInsert(payload);
      })
      .subscribe();

    return () => supabase.removeSubscription(companyPost);
  }, []);

  const handleInsert = (payload) => {
    setData((prevPosts) => [...prevPosts, payload.new]);
  };

  const getCompanyData = async () => {
    try {
      let {
        data: company_post,
        error,
        status,
      } = await supabase.from('company_post').select('*');

      if (error && status !== 406) throw error;
      if (data) setData(company_post);
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
            title='Submit a Great Company'
          >
            <CreateCompany handleClose={handleClose} user={user} />
          </ModalComp>
          <CompanyReview data={data} user={user}/>
        </>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
