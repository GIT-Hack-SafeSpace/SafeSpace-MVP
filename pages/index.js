import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
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
    <div className='container' style={{ padding: '50px 0 100px 0' }}>
      {loading ? <Loader /> : !session ? <Login /> : <Mood session={session} />}
    </div>
  );
}
