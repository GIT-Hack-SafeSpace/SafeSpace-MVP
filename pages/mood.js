import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

export default function Mood({ session }) {
  const [firstUse, setFirstUse] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    !session && router.push('/login');
  }, [session]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) return getProfile();

    return () => {
      isMounted = false
    }
  }, [session]);

  async function getProfile() {
    try {
      const user = supabase.auth.user();

      if (!user) {
        router.push('/login');
      } else {
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`username, industry, avatar_url`)
          .eq('id', user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }
        if (data) {
          setFirstUse(false);
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const viewLogic = () => {
    if (firstUse) {
      // show profile with quiz on that page
      router.push('/profile');
    } else {
      // show mood
      return <div className="text-white">MOOD VIEW</div>;
    }
  };

  // getting the value of the personality score (either null or a string)
  // if null, show onboarding, else show mood component
  return <>{loading ? <Loader /> : viewLogic()}</>;
}
