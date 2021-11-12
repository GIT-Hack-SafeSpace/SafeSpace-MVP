import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

export default function Companies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();
    if (!user) {
      router.push('/login');
    } else {
      getCompanyData();
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

  return <div>{loading ? <Loader /> : 'Companies' }</div>;
}
