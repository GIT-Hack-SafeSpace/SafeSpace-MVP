import {React, useState} from "react";
import styled from "styled-components";
import ModalComp from "./Modal";
import ShowBio from "./buttons/ShowBio";
import DisplayBio from "./DisplayBio";

import {
  jeressiasSocialIcons,
  jamekasSocialIcons,
  teresasSocialIcons,
  brittanysSocialIcons,
} from "../data/socialIcons";

const groupPhoto = "/bio/safe.png";
const windowIcon = '/icons/new-window.svg'

const jeressiasImage = "./bio/jeressia.jpg";
const jamekasImage = "./bio/jameka.jpeg";
const teresasImage = "./bio/teresa.jpeg";
const brittanysImage = "./bio/brittany.jpeg";

const userIcons = (array) =>
  array.map((u) => (
    <a href={u.userUrl}><img className="icons" src={u.iconUrl} alt={u.alt} /></a>
  ));

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

        .imgIcon{
          position: absolute;
          bottom: -5px;
          left: 0;
          width:25px;
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

export default function AboutPage() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const displayAboutModal = () => {
    <ModalComp
      showModal={showModal}
      handleClose={handleClose}
      handleShow={handleShow}
      title=''
      trigger={ShowBio}
    >
      <DisplayBio
        handleClose={handleClose}
      />
    </ModalComp >
  };

  return (
    <AboutStyles>
      <img className="groupPhoto" src={groupPhoto} alt="group image" />
      <h1>Meet the Team</h1>
      <div className="teamContainer">
        <div className="memberContainer">
          <div className="userImage">
            <img className="bioImage" src={jeressiasImage} alt="Jeressia" />
            <ModalComp
              showModal={showModal}
              handleClose={handleClose}
              handleShow={handleShow}
              title='About Jeressia'
              trigger={ShowBio}
            >
              <DisplayBio
                handleClose={handleClose}
              />
            </ModalComp >
          </div>
          <div className="socials">
            <div className="name">Jeressia</div>
            <div className="social-links">{userIcons(jeressiasSocialIcons)}</div>
          </div>
        </div>
        <div className="memberContainer">
          <div className="userImage">
            <img className="bioImage" src={jamekasImage} alt="Jameka" />
            {/* <ModalComp
              showModal={showModal}
              handleClose={handleClose}
              handleShow={handleShow}
              title='About Jameka'
              trigger={ShowBio}
            >
              <DisplayBio
                handleClose={handleClose}
              />
            </ModalComp > */}
          </div>
          <div className="socials">
            <div className="name">Jameka</div>
            <div className="social-links">{userIcons(jamekasSocialIcons)}</div>
          </div>
        </div>
        <div className="memberContainer">
          <div className="userImage">
            <img className="bioImage" src={teresasImage} alt="Teresa" />
            {/* <ModalComp
              showModal={showModal}
              handleClose={handleClose}
              handleShow={handleShow}
              title='About Teresa'
              trigger={ShowBio}
            >
              <DisplayBio
                handleClose={handleClose}
              />
            </ModalComp > */}
          </div>
          <div className="socials">
            <div className="name">Teresa</div>
            <div className="social-links">{userIcons(teresasSocialIcons)}</div>
          </div>
        </div>
        <div className="memberContainer">
          <div className="userImage">
            <img className="bioImage" src={brittanysImage} alt="Brittany" />
            {/* <ModalComp
              showModal={showModal}
              handleClose={handleClose}
              handleShow={handleShow}
              title='About Brittany'
              trigger={ShowBio}
            >
              <DisplayBio
                handleClose={handleClose}
              />
            </ModalComp > */}
          </div>
          <div className="socials">
            <div className="name">Brittany</div>
            <div className="social-links">
              {userIcons(brittanysSocialIcons)}
            </div>
          </div>
        </div>
        <div className="memberContainer">
          <div className="userImage">
            {/* <img className="bioImage" src={yasmeensImage} alt="Yasmeen" /> */}
            {/* <ModalComp
              showModal={showModal}
              handleClose={handleClose}
              handleShow={handleShow}
              title='About Yasmeen'
              trigger={ShowBio}
            >
              <DisplayBio
                handleClose={handleClose}
              />
            </ModalComp > */}
          </div>
          <div className="socials">
            <div className="name">Yasmeen</div>
            {/* <div className="social-links">{userIcons(yasmeensSocialIcons)}</div> */}
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}