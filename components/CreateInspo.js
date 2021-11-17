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

export default function CreateInspo({ user }) {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({});

  const postInspo = async (e) => {
    e.preventDefault();
    const { id } = user;
    const { content } = data;
    const { image } = data;

    try {
      setLoading(true);
      const updates = {
        profile_id: id,
        content,
        image,
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
    <Form onSubmit={postInspo}>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor="url">Image</Form.Label>
        <Form.Control
          required
          as='input'
          id='image'
          name='image'
          type='url'
          placeholder="https://example.com"
          autoFocus
          pattern="https://.*" 
          value={data.image || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              image: e.target.value,
            }))
          }
        />
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
      <ButtonStyle>
        <Button className='save-change' type='submit' disabled={loading}>
          {loading ? 'Loading ...' : 'Save Changes'}
        </Button>
      </ButtonStyle>
    </Form>
  );
}