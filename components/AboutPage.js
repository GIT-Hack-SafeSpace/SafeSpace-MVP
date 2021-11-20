import { React, useState } from "react";
import styled from "styled-components";
import ModalComp from "./Modal";
import ShowBio from "./buttons/ShowBio";
import DisplayBio from "./DisplayBio";

import { allBioData } from "../data/bioData";

const groupPhoto = "/bio/safe.png";

const foundUser = (userId) =>
  allBioData.find(x => x.userId == userId);

const userIcons = (userId) => {
  let teamMemberIcons = foundUser(userId).socialMedias;

  return (teamMemberIcons.map((t)=> <a key={t.id} href={t.userUrl}><img className="icons" src={t.iconUrl} alt={t.alt} /></a>))
};

const BioCard = ({u}) => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let teamMember = foundUser(u.userId);

  return (
  <div className="memberContainer" key={u.userId}>
    <div className="userImage">
      <img className="bioImage" src={teamMember.imageUrl} alt={teamMember.alt} />
      <ModalComp
        showModal={showModal}
        handleClose={handleClose}
        handleShow={handleShow}
        title='About'
        trigger={ShowBio}
      >
        <DisplayBio
          handleClose={handleClose}
          bio={u.bio}
        />
      </ModalComp >
    </div>
    <div className="socials">
      <div className="name">{teamMember.name}</div>
      <div className="social-links">{userIcons(teamMember.userId)}</div>
    </div>
  </div>)
}

export default function AboutPage() {
  return (
    <AboutStyles>
      <img className="groupPhoto" src={groupPhoto} alt="group image" />
      <h1>Meet the Team</h1>
      <div className="teamContainer">
        {allBioData.map((u)=>{
          return <BioCard u={u} key={u.userId}/>
        })}
      </div>
    </AboutStyles>
  );
}

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .groupPhoto {
    height: 200px;
    margin-top: -25px;
  }

  h1 {
    font-size: 28px;
    color: #ed3457;
    margin-bottom: 20px;
  }

  img {
    object-fit: cover;
  }

  .bioImage {
    height: 80px;
    width: 80px;
    border-radius: 100%;
  }

  .teamContainer {
    display: flex;
    flex-direction: column;

    .memberContainer {
      display: flex;
      margin-bottom: 10px;

      .userImage{
        position: relative;

        .bioModalButton{
          position: absolute;
          bottom: -18px;
          width:80px;
          color:#ed3457;
          font-size:12px;
          text-align: center;
        }
      }

      .socials {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        .name {
          margin-bottom: 5px;
          letter-spacing: 1px;
        }

        .social-links {
          display: flex;

          .icons {
            width: 25px;
            height: 25px;
            margin: 0 5px;
          }
        }
      }
    }
  }
`;