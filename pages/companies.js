import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import ModalComp from '../components/Modal';
import CreateCompany from '../components/CreateCompany';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export default function Companies() {
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
          <ModalComp btnText='Create Company' title='Create Company'>
            <CreateCompany user={user} />
          </ModalComp>
          {
            data.map((d) => (
              <div key={d.id} className='text-white'>
                <CardStyle>
                <Card className="companyCard" style={{ width: '23.5rem', height: '12rem'}}>
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{d.industry}</Card.Subtitle>
                    <Card.Text>{d.content}</Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
                </CardStyle>
              </div>
          ))
          }
        </>
      );
    }
  };

  const CardStyle = styled.div`
  .companyCard {
    color: black;
  }
`;

  return <div className='text-white'>{view()}</div>;
}
