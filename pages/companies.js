import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import MainLayout from '../layouts/MainLayout';
import CompanyReview from '../components/CompanyReview';
import ModalComp from '../components/Modal';
import CreateCompany from '../components/CreateCompany';
import ModalCreate from '../components/buttons/ModalCreate';
import styled from 'styled-components';
import Search from '../components/Search';
import NoResults from '../components/NoResults';

const CompanyStyles = styled.div`
  background-color: #fefefe;

  h1 {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 15px;
    font-size: 28px;
  }
`;

export default function Companies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [showModal, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
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
    setData((prevPosts) => [payload.new, ...prevPosts]);
  };

  const getCompanyData = async () => {
    try {
      let {
        data: company_post,
        error,
        status,
      } = await supabase
        .from('company_post')
        .select('*')
        .order('created_at', { ascending: false });

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
        <CompanyStyles>
          <ModalComp
            showModal={showModal}
            handleClose={handleClose}
            handleShow={handleShow}
            title='Submit a Great Company'
            trigger={ModalCreate}
          >
            <CreateCompany handleClose={handleClose} user={user} />
          </ModalComp>
          <Search
            data={data}
            func={setSearchResults}
            attrs={['industry', 'name', 'content']}
            placeholder='Search Companies'
          />
          <h1>Featured Companies</h1>

          {!searchResults && <NoResults />}
          {searchResults?.length
            ? searchResults.map((item, i) => (
                <CompanyReview key={i} data={item} />
              ))
            : data.map((d, i) => <CompanyReview key={i} data={d} />)}
        </CompanyStyles>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
