import React from 'react';
import moment from 'moment';

import styled from 'styled-components';

import { profilePictures } from '../data/profilePictures';
import { reactions } from '../data/reactions';
import { tagData } from '../data/tagData';


const imageSrcs = profilePictures.map((p) => p.url);
const reactionIcons = reactions.map((r) => r.url);
const tagInfo = tagData;

const CommunityPostStyles = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #E8E8E8;

  .main-card-body{
    display: flex;
    padding-top: 20px;

  .commImgWrapper{
    flex: 1;

    .profileImage{
        width: 30px;
        height:30px;
    }
  }
  .card-wrapper{
      flex: 8;

    .commTitleWrapper{
      display: flex;
      justify-content: space-between;

      .title{
        font-weight:bold;
        letter-spacing: 1px;
      }

      .resolvedTag{
        align-items: flex-end;
      }
    }
    .date{
      font-size:12px;
      color: #9597A1;
    }

    .commBody{

      .content{
        font-size:14px;
      }

      .comment-tags{
        display:flex;
        justify-content: flex-end;

        .tag{
          margin: 0 5px;
          border-radius: 10px;
          padding: 2px 15px;
          color: white;
          font-size: 12px;
        }

        .tag:last-child{
          margin: 0;
        }
      }
    }
  }
}
  .comm-footer{
    display: flex;
    border-top: 1px solid #E8E8E8;
    justify-content: center;

        .reactionIcon{
          width: 35px;
          height: 35px;
          margin: 15px 28px;
        }
      }
  `;

export default function CommunityPost({ data }) {
  const randomImage = () => imageSrcs[Math.floor(Math.random() * imageSrcs.length)];
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const tagColorRandomizer = () => {
    const shuffledArray = tagInfo.sort((a, b) => 0.5 - Math.random());
    const selected = () => shuffledArray.slice(0, randomNumber(1, 3));

    return selected();
  
  }

  const tagMaker = () => {
    let tagColors = tagColorRandomizer();
    console.log(tagColors,'tagColors');
    return tagColors;
  }

  tagMaker();

  return (
    <>
      {data?.map((d) => (
        <CommunityPostStyles key={d.id}>
          <div className="main-card-body">
            <div className="commImgWrapper">
              <img src={randomImage()} className="profileImage" alt="image" />
            </div>
            <div className="card-wrapper">
              <div className="commTitleWrapper">
                <span className="title">{d.title}</span>
                <span className="resolvedTag">
                  {d.isResolved ? 'Resolved' : 'Unresolved'}
                </span>
              </div>
              <p className="date">{moment(d.created_at).format('MMM DD, YYYY')}</p>
              <div className="commBody">
                <p className="content">{d.content}</p>
                <div className="comment-tags">
                  {tagMaker().map((i) => <div className="tag" key={i.id} style={{ backgroundColor: `${i.tagColor}` }}>{i.tagName}</div>)}
                </div>
                <p>{randomNumber(1, 9)} Likes</p>
              </div>
            </div>
          </div>
          <div className="comm-footer">
            <div className="reactions">
              {reactionIcons?.map((r) => (
                <img key={r} className="reactionIcon" src={r} />
              ))}
            </div>
          </div>

        </CommunityPostStyles>
      ))}
    </>
  )
}
