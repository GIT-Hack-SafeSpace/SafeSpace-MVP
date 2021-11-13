import React, { useState } from 'react';
import { supabase } from '../utils/client';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const SelectStyle = styled.div`
  .select__option {
    color: black !important;
  }
`;

export default function CreateInspo({ user }) {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({
    isPersonal: false,
    isResolved: false,
  });

  const postInspo = async () => {
    const { id } = user;
    const { content } = data;
    try {
      setLoading(true);
      const updates = {
        profile_id: id,
        content,
        created_at: new Date(),
      };

      const { data, error } = await supabase
        .from('inspo_post')
        .upsert(updates, {
          returning: 'minimal',
        });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setData({});
    }
  };

  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          id='content'
          name='content'
          type='content'
          value={data.content || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              content: e.target.value,
            }))
          }
        />
      </Form.Group>
      <div>
        <button
          className='button block primary mt-3'
          onClick={postInspo}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Create'}
        </button>
      </div>
    </Form>
  );
}
