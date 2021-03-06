import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/client';
import { useRouter } from 'next/router';
import { Loader } from '../../components/shared';
import ResourcePg from '../../components/Resource';
import MainLayout from '../../layouts/MainLayout';

export default function Resources() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();
    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, []);

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return <ResourcePg />;
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
