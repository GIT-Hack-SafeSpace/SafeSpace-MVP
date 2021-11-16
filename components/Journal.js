import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { reactions } from '../data/reactions';
import { communityTagData } from '../data/tagData';
import Tags from './Tags';

const JournalStyles = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e8e8e8;

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
        }

        .resolvedTag {
          align-items: flex-end;
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
    display: flex;
    border-top: 1px solid #e8e8e8;
    justify-content: center;

    .reactionIcon {
      width: 35px;
      height: 35px;
      margin: 15px 28px;
    }
  }
`;

export default function Journal({ data }) {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <>
      {data?.map((d) => (
        <JournalStyles key={d.id}>
          <div className='main-card-body'>
            <div className='commImgWrapper'>
              <img
                src={`profileimages/${d.conflict_type || 'user'}.png`}
                className='profileImage'
                alt='image'
              />
            </div>
            <div className='card-wrapper'>
              <div className='commTitleWrapper'>
                <span className='title'>{d.title}</span>
                <span className='resolvedTag'>
                  {d.isResolved ? 'Resolved' : 'Unresolved'}
                </span>
              </div>
              <p className='date'>
                {moment(d.created_at).format('MMM DD, YYYY')}
              </p>
              <div className='commBody'>
                <p className='content'>{d.content}</p>
                <div className='comment-tags'>
                  <Tags
                    tags={[d.tag_1, d.tag_2, d.tag_3]}
                    data={communityTagData}
                  />
                </div>
                <p>{randomNumber(1, 9)} Likes</p>
              </div>
            </div>
          </div>
          <div className='comm-footer'>
            <div className='reactions'>
              Edit / Delete
            </div>
              <h3>{d.type}</h3>
              <h3>{d.who}</h3>
              <h3>{d.where}</h3>
              <p>{d.share}</p>
              <p>{d.isResolved}</p>
          </div>
        </JournalStyles>
      ))}
    </>
  );
}
