import { React, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { communityTagData } from '../../data/tagData';
import { deletePost, getPosts } from '../../api/journalData';
import { ModalComp, Tags } from '../shared';
import CreateRantRave from '../forms/CreateRantRave';
import JournalEdit from '../buttons/JournalEdit';

const trashIcon = 'icons/trash-icon.svg';

export default function JournalEntry({ user, data, setData, setLoading }) {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteJournal = (id) => {
    setLoading(true);
    deletePost(id).then(() => {
      getPosts(data.profile_id).then((rep) => {
        setData(rep);
        setLoading(false);
      });
    });
  };

  return (
    <JournalStyles key={data.id}>
      <div className='main-card-body'>
        <div className='commImgWrapper'>
          <img
            src={`profileimages/${data.conflict_type || 'user'}.png`}
            className='profileImage'
            alt='image'
          />
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
            <p className='card-bold'>
              <strong>Who:</strong>
              <span> {data.who}</span>
            </p>
            <p className='card-bold'>
              <strong>Where:</strong>
              <span> {data.where}</span>
            </p>
            <hr />
            <h6>What Happened?</h6>
            <p className='content'>{data.content}</p>
            <div className='comment-tags'>
              <Tags
                tags={[data.tag_1, data.tag_2, data.tag_3]}
                data={communityTagData}
              />
            </div>
            {data.isResolved && (
              <div className='resolution-text'>
                <h6>Resolution</h6>
                <p>{data.resolution}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='comm-footer'>
        <ModalComp
          showModal={showModal}
          handleClose={handleClose}
          handleShow={handleShow}
          title='Edit Entry'
          trigger={JournalEdit}
        >
          <CreateRantRave
            handleClose={handleClose}
            user={user}
            obj={data}
            setter={setData}
          />
        </ModalComp>
        <p className='footer-action'>
          <img
            src={trashIcon}
            alt='delete post'
            onClick={() => deleteJournal(data.id)}
          />
        </p>
      </div>
    </JournalStyles>
  );
}

const JournalStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 15px;

  .main-card-body {
    display: flex;
    padding-top: 20px;

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
          align-self: center;
        }

        .resolvedTag {
          align-items: flex-end;
          font-size: 14px;
          color: #ed3457;
        }
      }

      .date {
        font-size: 12px;
        color: #9597a1;
        margin-bottom: 7px;
      }

      .type {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
        color: #63988e;
      }

      .commBody {
        padding-bottom: 10px;
        .content {
          font-size: 14px;
          margin-top: 10px;
        }
        .card-bold {
          margin-bottom: 0;
        }
      }
    }
  }
  .comm-footer {
    display: flex;
    border-top: 1px solid #e8e8e8;
    justify-content: space-around;
    align-items: self-end;

    .footer-action {
      padding: 20px;
    }

    .edit {
      margin-right: 20px;
    }

    .share {
      color: #493843;
      font-size: 14px;
    }
  }
`;
