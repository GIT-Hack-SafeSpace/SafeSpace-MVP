import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import CreateCompany from '../components/CreateCompany';

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
  }, []);

  const getCompanyData = async () => {
    try {
      let {
        data: company_post,
        error,
        status,
      } = await supabase.from('company_post').select('*');

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(company_post);
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
          <h1>{d.name}</h1>
          <h3>{d.industry}</h3>
          <p>{d.content}</p>
        </div>
      ));
    }
  };

  return (
    <div className='text-white'>
      <Modal btnText='Create Company' title='Create Company'>
        <CreateCompany user={user} />
      </Modal>
      {view()}
    </div>
  );
}
