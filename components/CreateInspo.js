import React, { useState } from 'react';
import { supabase } from '../utils/client';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { ButtonStyle } from '../styles/ButtonStyle';

const SelectStyle = styled.div`
  .select__option {
    color: black !important;
  }
`;

export default function CreateInspo({ user, handleClose }) {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({});

  const postInspo = async (e) => {
    e.preventDefault();
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
      handleClose();
    }
  };

  return (
    <Form onSubmit={postInspo}>
      <Form.Group className='mb-3'>
        <Form.Label>Message</Form.Label>
        <Form.Control
          required
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
      <ButtonStyle>
        <Button className='save-change' type='submit' disabled={loading}>
          {loading ? 'Loading ...' : 'Save Changes'}
        </Button>
      </ButtonStyle>
    </Form>
  );
}
