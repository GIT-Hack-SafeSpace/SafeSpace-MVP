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
  border-top: 1px solid #e8e8e8;
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
        margin-top: -10px;
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
          text-align: justify;
        }
      }
    }
  }
  .comm-footer {
    display: flex;
    border-top: 1px solid #e8e8e8;
    justify-content: space-between;
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
  const [isResolved, setIsResolved] = useState(false);
  const [share, setShare] = useState(false);

  function toggle(value) {
    return !value;
  }

  const handleClick = () => {
    setIsResolved((prevState) => ({
      ...prevState,
      isResolved: !prevState,
    }
    ))}

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
                <span className='resolvedTag'><Form.Check
                  type='switch'
                  id='isResolved'
                  label='Resolved?'
                  checked={d.isResolved}
                  onChange={handleClick}
                />
                </span>
              </div>
              <p className='date'>
                {moment(d.created_at).format('MMM DD, YYYY')}
              </p>
              <div className='commBody'>
                <p className="type">{d.type}</p>
                <p className="card-bold"><strong>Who:</strong><span> {d.who}</span></p>
                <p className="card-bold"><strong>Where:</strong><span> {d.where}</span></p>
                <p className='content'>{d.content}</p>
                <div className='comment-tags'>
                  <Tags
                    tags={[d.tag_1, d.tag_2, d.tag_3]}
                    data={communityTagData}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='comm-footer'>
            <Form>
            <Form.Check
              type='checkbox'
              id='share'
              className='share'
              label='Share?'
              checked={d.share}
              onChange={() => setChecked(toggle)}
            />
            </Form>
            <p className='footer-action edit'><img src={editIcon} /></p>
            <p className='footer-action'><img src={trashIcon} /></p>
          </div>
        </JournalStyles>
      ))}
    </>
  );
}
