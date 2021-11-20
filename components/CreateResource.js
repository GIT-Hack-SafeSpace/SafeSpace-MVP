import React, { useState } from 'react';
import { supabase } from '../utils/client';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import styled from 'styled-components';
import { resources } from '../data/resources';
import { ButtonStyle } from '../styles/ButtonStyle';

const SelectStyle = styled.div`
  .select__option {
    color: black !important;
  }
`;

export default function CreateResource({ user }) {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({});

  const postResource = async (e) => {
    e.preventDefault();
    const { id } = user;
    const { name, therapy_type } =
      data;
    try {
      setLoading(true);
      const updates = {
        profile_id: id,
        name,
        therapy_type,
        created_at: new Date(),
      };

      const { data, error } = await supabase
        .from('therapy')
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
    <Form onSubmit={postResource}>
      <div>
        <label htmlFor='name'>Resource Name</label>
        <Form.Control
          placeholder='Resource'
          required
          id='name'
          type='text'
          value={data.name || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
      </div>
      <SelectStyle>
        <label htmlFor='resources'>Resource Type</label>
        <Select
          required
          id='resources'
          name='resources'
          type='resources'
          options={resources}
          value={resources.find((i) => i.value === data.therapy_type) || ''}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              therapy_type: e?.value || '',
            }))
          }
          className='basic-single'
          classNamePrefix='select'
          isClearable={true}
          isSearchable={true}
        />
      </SelectStyle>
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
