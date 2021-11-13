import React, { useState } from 'react';
import { supabase } from '../utils/client';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import styled from 'styled-components';
// TODO: Add resources/therapy data to select
import { industries } from '../data/industries';

const SelectStyle = styled.div`
  .select__option {
    color: black !important;
  }
`;

export default function CreateResource({ user }) {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({});

  const postResource = async () => {
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
    <Form>
      <div>
        <label htmlFor='username'>Resource Name</label>
        <input
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
      {/* // TODO: Add resources/therapy data to select */}
        <label htmlFor='industry'>Resource Type</label>
        <Select
          required
          id='industry'
          name='industry'
          type='industry'
          options={industries}
          value={industries.find((i) => i.value === data.therapy_type) || ''}
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
      <div>
        <button
          className='button block primary mt-3'
          onClick={postResource}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Create'}
        </button>
      </div>
    </Form>
  );
}
