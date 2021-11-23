import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Link from 'next/link';
import { reactions } from '../../data/reactions';
import { communityTagData } from '../../data/tagData';
import { Tags } from '../shared';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ButtonStyle } from '../../styles/ButtonStyle';
import ReactionIcon from './ReactionIcon';

const reactionIcons = reactions.map((r) => r.url);
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default function CommunityPost({ data }) {
  const [reactionCount, setReactionCount] = useState(0);
  const [showModal, setShow] = useState(false);
  const [comments, setComments] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addComment = (comment) =>
    setComments((prevState) => [...prevState, comment]);

  useEffect(() => {
    setReactionCount(randomNumber(1, 9));
  }, []);

  const count = (disabled) => {
    setReactionCount((prevState) => {
      if (disabled) {
        return prevState + 1;
      }
      return prevState - 1;
    });
  };

  return (
    <>
      <CommunityPostStyles key={data.id}>
        <div className='main-card-body'>
          <div className='commImgWrapper'>
            <Link href='/conflict-styles'>
              <img
                src={`profileimages/${data.conflict_type || 'user'}.png`}
                className='profileImage'
                alt='image'
              />
            </Link>
          </div>
          <div className='card-wrapper'>
            <div className='commTitleWrapper'>
              <span className='title'>{data.title}</span>
              <span className='resolvedTags'>
                {data.isResolved ? (
                  <div className='resolved'>Resolved</div>
                ) : (
                  'Unresolved'
                )}
              </span>
            </div>
            <p className='date'>
              {moment(data.created_at).format('MMM DD, YYYY')}
            </p>
            <div className='commBody'>
              <p className='content'>{data.content}</p>
              <div className='comment-tags'>
                <Tags
                  tags={[data.tag_1, data.tag_2, data.tag_3].filter(Boolean)}
                  data={communityTagData}
                />
              </div>
              <p>{reactionCount} Reactions</p>
            </div>
          </div>
        </div>
        <div className='comm-footer'>
          <div className='reactions'>
            {reactionIcons?.map((r, i) => (
              <ReactionIcon key={i} reaction={r} setReactionCount={count} />
            ))}
            <img
              className='reactionIcon'
              src='reactions/comment.svg'
              onClick={handleShow}
            />

            <ModalMock
              handleClose={handleClose}
              showModal={showModal}
              addComment={addComment}
              comments={comments}
            />
          </div>
        </div>
      </CommunityPostStyles>
    </>
  );
}

function ModalMock({ handleClose, showModal, addComment, comments }) {
  const [coms, setComms] = useState('');

  const pushComment = (e) => {
    e.preventDefault();
    addComment(coms);
    setComms('');
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName='modal-90w'
        aria-labelledby='example-custom-modal-styling-title'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Comments
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {comments.map((com, i) => (
            <p key={i}>{com}</p>
          ))}

          <Form onSubmit={pushComment}>
            <Form.Group className='mb-3'>
              <Form.Label className='visually-hidden'>Message</Form.Label>
              <Form.Control
                required
                as='textarea'
                rows={3}
                id='content'
                name='content'
                type='content'
                value={coms || ''}
                onChange={(e) => setComms(e.target.value)}
              />
            </Form.Group>
            <ButtonStyle>
              <Button className='save-change' type='submit'>
                Post Comment
              </Button>
            </ButtonStyle>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

const CommunityPostStyles = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e8e8e8;

  .main-card-body {
    display: flex;
    padding: 20px 0 10px;

    .commImgWrapper {
      flex: 1;

      .profileImage {
        width: 30px;
        height: 30px;
      }
    }
    .card-wrapper {
      flex: 8;

      .commTitleWrapper {
        display: flex;
        justify-content: space-between;

        .title {
          font-weight: bold;
          letter-spacing: 1px;
        }

        .resolvedTags {
          align-items: flex-end;
          text-transform: uppercase;
          font-size: 12px;
          color: #ed3457;

          .resolved {
            color: #000;
          }
        }
      }
      .date {
        font-size: 12px;
        color: #9597a1;
      }

      .commBody {
        .content {
          font-size: 14px;
        }
      }
    }
  }
  .comm-footer {
    border-top: 1px solid #e8e8e8;
    .reactions {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      .reactionIcon {
        width: 27px;
        margin: 15px 28px;

        &.disabled {
          -webkit-filter: hue-rotate(-32deg) brightness(106%) grayscale(95%);
          filter: hue-rotate(-32deg) brightness(106%) grayscale(95%);
        }
      }
    }
  }
`;
