import React, { useState } from 'react';
import { supabase } from '../utils/client';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { postTypes } from '../data/postTypes';
import Select from 'react-select';
import { ButtonStyle } from '../styles/ButtonStyle';
import Button from 'react-bootstrap/Button';

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

  const postRantRave = async (e) => {
    e.preventDefault();
    const { id } = user;
    const { where, who, content, isPersonal, isResolved, type, title } =
      data;
    try {
      setLoading(true);
      const updates = {
        profile_id: id,
        content,
        isPersonal,
        isResolved,
        type,
        where,
        who,
        title,
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
    <Form onSubmit={postRantRave}>
      <div>
        <label htmlFor='name'>Title</label>
        <Form.Control
          required
          id='title'
          type='text'
          placeholder='Title of Entry'
          value={data.title || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
        />
      </div>
      <SelectStyle>
        <label htmlFor='postTypes'>Post Type</label>
        <Select
          required={true}
          id='postTypes'
          name='postTypes'
          type='postTypes'
          options={postTypes}
          value={postTypes.find((i) => i.value === data.type) || 'rant'}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              type: e?.value || '',
            }))
          }
          className='basic-single'
          classNamePrefix='select'
          isSearchable={true}
        />
      </SelectStyle>
      <Form.Check
        type='switch'
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
        <label htmlFor='name'>Who?</label>
        <Form.Control
          required
          id='name'
          type='text'
          placeholder='Who was involved?'
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
        <label htmlFor='name'>Where?</label>
        <Form.Control
          type='text'
          placeholder='Location of event'
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
      <Form.Check
        type='switch'
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
      <ButtonStyle>
        <Button
          className='save-change'
          disabled={loading}
          type="submit"
        >
          {loading ? 'Loading ...' : 'Save Changes'}
        </Button>
      </ButtonStyle>
    </Form>
  );
}
