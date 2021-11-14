import { useState, useEffect } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import NoNavigation from '../layouts/NoNavigation';

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (user) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <div className='row flex flex-center'>
          <div className='col-6 form-widget'>
            <h1 className='header'>SafeSpace</h1>
            <p className='description'>
              Sign in via magic link with your email below
            </p>
            <div>
              <input
                className='inputField'
                type='email'
                placeholder='Your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email);
                }}
                className='button block'
                disabled={loading}
              >
                <span>{loading ? 'Loading' : 'Send secure link to email'}</span>
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return <NoNavigation>{view()}</NoNavigation>;
}
