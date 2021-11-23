import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export default function InspirationImage({ image }) {
  return (
    <>
      {
        <div key={image.id} className='text-white'>
          <ImageCardStyle>
            <Card className='imageCard'>
              <Card.Img
                className='cardImage'
                src={image.media_url}
                alt='_1'
                height='100%'
                width='100%'
              />
              <Card.ImgOverlay>
                <Card.Text className='inspoCardText' style={{filter: 'drop-shadow(2px 4px 2px black)', fontSize: '27px'}}><b>{image.content}</b></Card.Text>
              </Card.ImgOverlay>
            </Card>
          </ImageCardStyle>
        </div>
      }
    </>
  );
}

const ImageCardStyle = styled.div`
  border-bottom: 1px solid #e8e8e8;

  .inspoCardText {
    text-align: center;
    font-size: 23px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .imageCard {
    margin: 1px;
    border: none;
  }

  .cardImage {
    max-width: 100%;
    border-radius: 0px;
  }
`;
