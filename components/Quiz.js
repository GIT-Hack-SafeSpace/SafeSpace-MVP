import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/client';
import Loader from './Loader';
import { useRouter } from 'next/router';
import { questions, options, styles } from '../data/quizData';
import { ButtonStyle } from '../styles/ButtonStyle';
import Button from 'react-bootstrap/Button';

export default function Quiz() {
  const [user, setUser] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [showStyle, setShowStyle] = useState(false);
  const router = useRouter();
  const [style, setStyle] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      if (!user) {
        router.push('/login');
      } else {
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`personality`)
          .eq('id', user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }
        if (data) {
          setUser({ ...data, id: user.id });
          setStyle({
            name: data.personality,
            description: styles[data.personality],
          });
        } else {
          setUser({ id: user.id });
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleClick = (e) => {
    setCurrent((prevState) => prevState + 1);
    setAnswers((prevState) => [...prevState, Number(e.target.value)]);
  };

  const calculate = () => {
    const userTotals = {
      competing: answers[0] + answers[4] + answers[6],
      collaborating: answers[3] + answers[8] + answers[11],
      avoiding: answers[5] + answers[9] + answers[14],
      accomodating: answers[2] + answers[10] + answers[13],
      compromising: answers[1] + answers[7] + answers[12],
    };

    const getType = () => {
      return Object.keys(userTotals).filter((x) => {
        return userTotals[x] == Math.max.apply(null, Object.values(userTotals));
      });
    };

    updateProfile(getType()[0]).then(() => {
      setStyle({
        name: getType()[0],
        description: styles[getType()[0]],
      });

      setShowStyle(true);
    });
  };

  async function updateProfile(personality) {
    const { id } = user;
    try {
      setLoading(true);
      const updates = {
        id,
        personality,
        updated_at: new Date(),
      };

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal',
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const quizView = () => {
    if (user.personality) {
      return (
        <div className='d-flex flex-column text-center'>
          <h2>Personality Quiz</h2>
          <h5>
            <b>Your results detail:</b> {style.description}
          </h5>
          <h5>{user.personality}</h5>
          <div>
            <img
              src='https://via.placeholder.com/150'
              style={{ width: '134px', borderRadius: '50%' }}
            />
          </div>
          <ButtonStyle className='d-flex justify-content-center'>
            <Button
              className='btn-update danger'
              onClick={() => router.push('/rant-rave')}
            >
              BACK TO APP
            </Button>
          </ButtonStyle>
        </div>
      );
    } else {
      return (
        <div className='d-flex flex-column justify-content-center text-center m-auto'>
          <h2>Personality Quiz</h2>
          {current < questions.length && (
            <>
              <h6>
                Listed below are {questions.length} statements. Each strategy
                provides a possible strategy for dealing with a conflict.
                Knowing your primary styles will help you learn about how you
                deal with conflict.
              </h6>
              <h4>Question {current + 1}/{questions.length}</h4>
            </>
          )}
          <h5>{questions[current]}</h5>
          <ButtonStyle className='d-flex flex-column m-auto'>
            {current < questions.length
              ? options.map((a, i) => (
                  <button
                    className='btn-quiz'
                    key={i}
                    value={i + 1}
                    onClick={handleClick}
                  >
                    {a.toUpperCase()}
                  </button>
                ))
              : !showStyle && <button className='btn-quiz' onClick={calculate}>Get Score</button>}
          </ButtonStyle>
          {showStyle && (
            <>
              <h5>
                <b>Your results detail:</b> {style.description}
              </h5>
              <h5>{style.name}</h5>
              <div>
                <img
                  src='https://via.placeholder.com/150'
                  style={{ width: '134px', borderRadius: '50%' }}
                />
              </div>
              <ButtonStyle className='d-flex justify-content-center'>
                <Button
                  className='btn-update danger'
                  onClick={() => router.push('/rant-rave')}
                >
                  BACK TO APP
                </Button>
              </ButtonStyle>
            </>
          )}
        </div>
      );
    }
  };

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return quizView();
    }
  };

  return <div>{view()}</div>;
}
