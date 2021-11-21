import React, { useState } from 'react';
import { supabase } from '../../utils/client';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { ButtonStyle } from '../../styles/ButtonStyle';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { UploadImage } from '../shared';

const SelectStyle = styled.div`
  .select__option {
    color: black !important;
  }
`;

export default function CreateInspo({ user, handleClose }) {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({});
  const [video, setVideo] = useState(true);
  const [showMediaInput, setShowMediaInput] = useState(true);

  const postInspo = async (e) => {
    e.preventDefault();
    const { id } = user;
    const { content, media_url } = data;
    const type = video ? 'video' : 'image';

    try {
      setLoading(true);
      const updates = {
        profile_id: id,
        content,
        media_url,
        type,
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

  const videoClick = () => {
    setShowMediaInput(false);
    setVideo(true);
    setData((prevState) => ({
      ...prevState,
      media_url: '',
    }));
  };

  const imageClick = () => {
    setVideo(false);
    setData((prevState) => ({
      ...prevState,
      media_url: '',
    }));
  };

  return (
    <Form onSubmit={postInspo}>
      <div className='text-center'>
        <ButtonGroup className='mb-2'>
          <Button variant={video ? 'secondary' : 'light'} onClick={videoClick}>
            Video
          </Button>
          <Button variant={!video ? 'secondary' : 'light'} onClick={imageClick}>
            Image
          </Button>
        </ButtonGroup>
      </div>

      <div className='my-3'>
        {video ? (
          <>
            <label htmlFor='media_url' className='visually-hidden'>
              URL
            </label>
            <Form.Control
              required
              id='media_url'
              type='url'
              placeholder='Paste URL'
              value={data.media_url || ''}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  media_url: e.target.value,
                }))
              }
            />
          </>
        ) : (
          <div className='text-center'>
            <ButtonGroup className='mb-2'>
              <Button
                variant={showMediaInput ? 'secondary' : 'light'}
                onClick={() => setShowMediaInput(true)}
              >
                From the web
              </Button>
              <Button
                variant={!showMediaInput ? 'secondary' : 'light'}
                onClick={() => setShowMediaInput(false)}
              >
                From my device
              </Button>
            </ButtonGroup>
          </div>
        )}
      </div>

      {!video &&
        (showMediaInput ? (
          <>
            <label htmlFor='media_url' className='visually-hidden'>
              URL
            </label>
            <Form.Control
              required
              id='media_url'
              type='url'
              placeholder='Paste URL'
              value={data.media_url || ''}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  media_url: e.target.value,
                }))
              }
            />
          </>
        ) : (
          <UploadImage
            url={data.media_url}
            size={150}
            onUpload={(url) => {
              setData((prevState) => ({
                ...prevState,
                media_url: `https://wujfbnqzodthhoxrdnwt.supabase.in/storage/v1/object/public/inspiration/${url}`,
              }));
            }}
          />
        ))}
      <hr />
      <Form.Group className='my-3'>
        <Form.Label>Description (Optional)</Form.Label>
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
