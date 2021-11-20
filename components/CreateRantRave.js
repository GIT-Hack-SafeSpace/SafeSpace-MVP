import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/client';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Select from 'react-select';
import { ButtonStyle } from '../styles/ButtonStyle';
import Button from 'react-bootstrap/Button';
import { communityTagOptions } from '../data/tagData';
import { getPosts } from '../api/journalData';

const SelectStyle = styled.div`
  margin-top: 5px;
  .select__option {
    color: black !important;
  }
`;

const initialState = {
  where: '',
  who: '',
  content: '',
  share: false,
  isResolved: false,
  title: '',
  tag_1: '',
  tag_2: '',
  tag_3: '',
}

export default function CreateRantRave({ user, handleClose, obj = {}, setter }) {
  const [loading, setLoading] = useState(null);
  const [conflict_type, setConflictType] = useState('');
  const [data, setData] = useState(initialState);

  useEffect(async () => {
    let isMounted = true;
    if (isMounted) {
      getData();
    }

    return () => (isMounted = false);
  }, []);

  const getData = async () => {
    if (Object.values(obj).length) {
      setData(obj);
    } else {
      try {
        setLoading(true);
        const user = supabase.auth.user();

        let { data, error, status } = await supabase
          .from('profiles')
          .select(`personality`)
          .eq('id', user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setConflictType(data.personality);
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const postRantRave = async (e) => {
    e.preventDefault();
    const { id } = user;
    const {
      where,
      who,
      content,
      share,
      isResolved,
      title,
      tag_1,
      tag_2,
      tag_3,
    } = data;
    try {
      setLoading(true);
      const updates = {
        profile_id: id,
        content,
        share,
        isResolved,
        where,
        who,
        title,
        tag_1,
        tag_2,
        tag_3,
        conflict_type,
        created_at: new Date(),
      };

      if (Object.values(obj).length) {
        const { data, error } = await supabase
          .from('rave_rant_post')
          .update({...updates, conflict_type: obj.conflict_type})
          .eq("id", obj.id);

          getPosts(obj.profile_id).then(setter);
      } else {
        const { data, error } = await supabase
          .from('rave_rant_post')
          .upsert(updates, {
            returning: 'minimal',
          });

          getPosts(id).then(setter);
      }

      if (error) {
        throw error;
      }
    } catch (error) {
    } finally {
      setLoading(false);
      setData(initialState);
      handleClose();
    }
  };

  return (
    <Form onSubmit={postRantRave}>
      <div>
        <label htmlFor='title'>Title</label>
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
        <label className='mt-3' htmlFor='tag_1'>
          Tags (Select up to 3 tags)
        </label>
        <Select
          required={true}
          id='tag_1'
          name='tag_1'
          type='tag_1'
          options={communityTagOptions}
          value={communityTagOptions.find((i) => i.value === data.tag_1) || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              tag_1: e?.value || '',
            }))
          }
          className='basic-single'
          classNamePrefix='select'
          isSearchable={true}
        />
      </SelectStyle>
      <SelectStyle>
        <Select
          required={true}
          id='tag_2'
          name='tag_2'
          type='tag_2'
          options={communityTagOptions}
          value={communityTagOptions.find((i) => i.value === data.tag_2) || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              tag_2: e?.value || '',
            }))
          }
          className='basic-single'
          classNamePrefix='select'
          isSearchable={true}
        />
      </SelectStyle>
      <SelectStyle>
        <Select
          required={true}
          id='tag_3'
          name='tag_3'
          type='tag_3'
          options={communityTagOptions}
          value={communityTagOptions.find((i) => i.value === data.tag_3) || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              tag_3: e?.value || '',
            }))
          }
          className='basic-single'
          classNamePrefix='select'
          isSearchable={true}
        />
      </SelectStyle>
      <Form.Check
        type='switch'
        id='share'
        label='Share in Community?'
        checked={data.share}
        onChange={(e) =>
          setData((prevState) => ({
            ...prevState,
            share: e.target.checked,
          }))
        }
      />
      <div>
        <label htmlFor='who'>Who?</label>
        <Form.Control
          required
          id='who'
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
        <label htmlFor='where'>Where?</label>
        <Form.Control
          type='text'
          placeholder='Location of event'
          required
          id='where'
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
        checked={data.isResolved}
        onChange={(e) =>
          setData((prevState) => ({
            ...prevState,
            isResolved: e.target.checked,
          }))
        }
      />
      <ButtonStyle>
        <Button className='save-change' disabled={loading} type='submit'>
          {loading ? 'Loading ...' : 'Save Changes'}
        </Button>
      </ButtonStyle>
    </Form>
  );
}
