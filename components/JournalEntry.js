import { React, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { communityTagData } from '../data/tagData';
import Tags from './Tags';

const editIcon = 'icons/edit-icon.svg';
const trashIcon = 'icons/trash-icon.svg';

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
          color: #ED3457;
        }
      }

      .date {
        font-size: 12px;
        color: #9597a1;
        margin-bottom: 7px;
      }

      .type{
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
        color:#63988E;
      }

      .commBody {
        padding-bottom: 10px;
        .content {
          font-size: 14px;
          margin-top: 10px;
        }
        .card-bold{
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
    padding: 0 10px;

    .footer-action{
      padding-top: 10px;
    }

    .edit{
      margin-right: 20px;
    }

    .share{
      color: #493843;
      font-size:14px;
    }
  }
`;

export default function JournalEntry({ data }) {
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
          </div>
          <p className='date'>
            {moment(data.created_at).format('MMM DD, YYYY')}
          </p>
          <div className='commBody'>
            <p className="card-bold"><strong>Who:</strong><span> {data.who}</span></p>
            <p className="card-bold"><strong>Where:</strong><span> {data.where}</span></p>
            <p className='content'>{data.content}</p>
            <div className='comment-tags'>
              <Tags
                tags={[data.tag_1, data.tag_2, data.tag_3]}
                data={communityTagData}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='comm-footer'>
        <p className='footer-action edit'><img src={editIcon} alt="edit post"/></p>
        <p className='footer-action'><img src={trashIcon} alt="delete post"/></p>
      </div>
    </JournalStyles>
  );
}