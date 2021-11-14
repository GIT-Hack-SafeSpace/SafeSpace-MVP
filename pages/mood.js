import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/client';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import { moods } from '../data/moods';
import { MoodStyles } from '../styles/ButtonStyle';
import NoNavigation from '../layouts/NoNavigation';

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
      isMounted = false;
    };
  }, [session]);

  async function addMood(value) {
    setLoading(true);
    const updates = {
      user_id: session.user.id,
      mood_type: value,
      created_at: new Date(),
    };
    try {
      const { data, error } = await supabase.from('mood').insert(updates, {
        returning: 'minimal',
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      router.push('/journal')
    }
  }

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

  const handleClick = (e) => {
    addMood(e.target.value);
  };

  const viewLogic = () => {
    if (firstUse) {
      router.push('/profile');
    } else {
      return (
        <div>
          <h2 className='mood-font'>How are you feeling?</h2>
          <MoodStyles>
            {moods.map((mood) => (
              <button
                key={mood.value}
                className={`btn-mood ${mood.value}`}
                value={mood.value}
                onClick={handleClick}
                style={{ backgroundImage: `url(/moods/${mood.value}.png)` }}
              ></button>
            ))}
          </MoodStyles>
        </div>
      );
    }
  };

  return <NoNavigation>{loading ? <Loader /> : viewLogic()}</NoNavigation>;
}
