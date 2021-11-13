import React, { useState } from 'react';
import { supabase } from '../utils/client';
import Form from 'react-bootstrap/Form';
import { industries } from '../data/industries';
import Select from 'react-select';
import styled from 'styled-components';

const SelectStyle = styled.div`
  .select__option {
    color: black !important;
  }
`;

export default function CreateRantRave({ user }) {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({
    isPersonal: false,
    isResolved: false,
  });

  const postRantRave = async () => {
    const { id } = user;
    const { where, who, content, isPersonal, isResolved, rant_rave_type } =
      data;
    try {
      setLoading(true);
      const updates = {
        profile_id: id,
        content,
        isPersonal,
        isResolved,
        rant_rave_type,
        where,
        who,
        created_at: new Date(),
      };

      const { data, error } = await supabase
        .from('rave_rant_post')
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
      <Form.Check
        type='switch'
        size='lg'
        id='isPersonal'
        label='Private'
        value={data.isPersonal}
        onChange={(e) =>
          setData((prevState) => ({
            ...prevState,
            isPersonal: e.target.checked,
          }))
        }
      />
      <div>
        <label htmlFor='username'>Who?</label>
        <input
          required
          id='name'
          type='text'
          value={data.who || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              who: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor='username'>Where?</label>
        <input
          required
          id='name'
          type='text'
          value={data.where || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              where: e.target.value,
            }))
          }
        />
      </div>
      <Form.Group className='mb-3'>
        <Form.Label>What happened?</Form.Label>
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
      <Form.Check
        type='switch'
        size='lg'
        id='isResolved'
        label='Resolved?'
        value={data.isPersonal}
        onChange={(e) =>
          setData((prevState) => ({
            ...prevState,
            isResolved: e.target.checked,
          }))
        }
      />
      <div>
        <button
          className='button block primary mt-3'
          onClick={postRantRave}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Create'}
        </button>
      </div>
    </Form>
  );
}
