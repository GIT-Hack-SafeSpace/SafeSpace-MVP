import React from "react";
import moment from "moment";
import styled from "styled-components";
import Link from "next/link";
import { reactions } from "../data/reactions";
import { communityTagData } from "../data/tagData";
import Tags from "./Tags";

const reactionIcons = reactions.map((r) => r.url);

const CommunityPostStyles = styled.div`
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
    border-top: 1px solid #e8e8e8;
    .reactions{
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      .reactionIcon {
        width: 27px;
        margin: 15px 28px;
      }
    }
  }
`;

export default function CommunityPost({ data }) {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <>
      {data?.map((d) => (
        <CommunityPostStyles key={d.id}>
          <div className="main-card-body">
            <div className="commImgWrapper">
              <Link href="/conflict-styles">
                <img
                  src={`profileimages/${d.conflict_type || "user"}.png`}
                  className="profileImage"
                  alt="image"
                />
              </Link>
            </div>
            <div className="card-wrapper">
              <div className="commTitleWrapper">
                <span className="title">{d.title}</span>
                <span className="resolvedTag">
                  {d.isResolved ? "Resolved" : "Unresolved"}
                </span>
              </div>
              <p className="date">
                {moment(d.created_at).format("MMM DD, YYYY")}
              </p>
              <div className="commBody">
                <p className="content">{d.content}</p>
                <div className="comment-tags">
                  <Tags
                    tags={[d.tag_1, d.tag_2, d.tag_3]}
                    data={communityTagData}
                  />
                </div>
                <p>{randomNumber(1, 9)} Likes</p>
              </div>
            </div>
          </div>
          <div className="comm-footer">
            <div className="reactions">
              {reactionIcons?.map((r, i) => (
                <img key={i} className="reactionIcon" src={r} />
              ))}
            </div>
          </div>
        </CommunityPostStyles>
      ))}
    </>
  );
}
