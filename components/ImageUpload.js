import { useEffect, useState } from 'react';
import { supabase } from '../utils/client';

export default function UploadImage({ url, size, onUpload }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  async function uploadImage(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from('inspiration')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <>
        <label
          className='button primary block visually-hidden'
          htmlFor='single'
        >
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          style={{ margin: '0', padding: '0' }}
          type='file'
          id='single'
          accept='image/*'
          onChange={uploadImage}
          disabled={uploading}
        />
      </>
    </div>
  );
}

{
  // code to use
  /* <UploadImage
          url={image_url}
          size={150}
          onUpload={(url) => {
            setUser((prevState) => ({ ...prevState, image_url: url }));
            updateProfile({ username, industry, image_url: url });
          }}
        /> */
}
