import React, { useState } from 'react';
import { supabase } from '../../utils/client';
import Form from 'react-bootstrap/Form';
import { industries } from '../../data/industries';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import { ButtonStyle, SelectStyle } from '../../styles/ButtonStyle';

export default function CreateCompany({ user, handleClose }) {
  const [loading, setLoading] = useState(null);
  const [company, setCompany] = useState({});

  const postCompany = async (e) => {
    e.preventDefault();
    const { id } = user;
    const { name, content, industry, jobs_link } = company;
    try {
      setLoading(true);
      const updates = {
        user_id: id,
        name,
        content,
        industry,
        jobs_link,
        created_at: new Date(),
      };

      const { data, error } = await supabase
        .from('company_post')
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
      setCompany({});
      handleClose();
    }
  };

  return (
    <>
      <Form onSubmit={postCompany}>
        <Form.Group className='mb-3'>
          <Form.Label>Company Name*</Form.Label>
          <Form.Control
            required
            id='name'
            type='text'
            value={company.name || ''}
            onChange={(e) =>
              setCompany((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            placeholder='Enter Company Name'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Website/Job Listings URL</Form.Label>
          <Form.Control
            id='jobs_link'
            type='url'
            value={company.jobs_link || ''}
            onChange={(e) =>
              setCompany((prevState) => ({
                ...prevState,
                jobs_link: e.target.value,
              }))
            }
            placeholder='Enter jobs url'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Company Rave*</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            id='content'
            name='content'
            type='content'
            placeholder='Tell us why this company is so great and any experiences you have had working there'
            value={company.content || ''}
            onChange={(e) =>
              setCompany((prevState) => ({
                ...prevState,
                content: e.target.value,
              }))
            }
          />
        </Form.Group>
        <SelectStyle>
          <label htmlFor='industry'>Industry*</label>
          <Select
            required
            id='industry'
            name='industry'
            type='industry'
            options={industries}
            value={industries.find((i) => i.value === company.industry) || ''}
            onChange={(e) =>
              setCompany((prevState) => ({
                ...prevState,
                industry: e?.value || '',
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
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Save Changes'}
          </Button>
        </ButtonStyle>
      </Form>
    </>
  );
}
