import React from "react";
import styled from "styled-components";
import {
  jeressiasSocialIcons,
  jamekasSocialIcons,
  teresasSocialIcons,
  brittanysSocialIcons,
} from "../data/socialIcons";

const groupPhoto = "/bio/safe.png";

const jeressiasImage = "./bio/jeressia.jpg";
const jamekasImage = "./bio/jameka.jpeg";
const teresasImage = "./bio/teresa.jpeg";
const brittanysImage = "./bio/brittany.jpeg";

const userIcons = (array) =>
  array.map((u) => (
    <img className="icons" src={u.iconUrl} href={u.userUrl} alt={u.alt} />
  ));

export default function AboutPage() {
  return (
    <AboutStyles>
      <img className="groupPhoto" src={groupPhoto} alt="group image" />
      <h1>Meet the Team</h1>
      <div className="teamContainer">
        <div className="memberContainer">
          <img className="bioImage" src={jeressiasImage} alt="Jeressia" />
          <div className="socials">
            <div className="name">Jeressia</div>
            <div className="social-links">{userIcons(jeressiasSocialIcons)}</div>
          </div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={jamekasImage} alt="Jeressia" />
          <div className="socials">
            <div className="name">Jameka</div>
            <div className="social-links">{userIcons(jamekasSocialIcons)}</div>
          </div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={teresasImage} alt="Jeressia" />
          <div className="socials">
            <div className="name">Teresa</div>
            <div className="social-links">{userIcons(teresasSocialIcons)}</div>
          </div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={brittanysImage} alt="Jeressia" />
          <div className="socials">
            <div className="name">Brittany</div>
            <div className="social-links">
              {userIcons(brittanysSocialIcons)}
            </div>
          </div>
        </div>
        <div className="memberContainer">
          {/* <img className="bioImage" src={yasmeensImage} alt="Jeressia" /> */}
          <div className="socials">
            <div className="name">Yasmeen</div>
            {/* <div className="social-links">{userIcons(yasmeensSocialIcons)}</div> */}
          </div>
        </div>
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
