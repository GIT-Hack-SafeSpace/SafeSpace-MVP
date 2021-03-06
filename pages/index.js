import { useState, useEffect } from 'react';
import { Loader } from '../components/shared';
import { supabase } from '../utils/client';
import Login from './login';
import Mood from './mood';

export default function Home() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? <Loader /> : !session ? <Login /> : <Mood session={session} />}
    </>
  );
}
