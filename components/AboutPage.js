import React from 'react';
import styled from 'styled-components';
import BioModal from './BioModal';
import { jeressiaSocialIcons } from '../data/socialIcons';

const groupPhoto = '/about/safe.png';
const jeressiasImage = './about/jeressia.jpg';
const jeressiasIcons = jeressiaSocialIcons.map((j)=> <img className="icons" src={j.iconUrl} href={j.userUrl} alt={j.alt}/>);

export default function AboutPage() {
  return (
    <AboutStyles>
      <img className="groupPhoto" src={groupPhoto} alt="group image"/>
      <h1>Meet the Team</h1>
      <div className="teamContainer">
        <div className="memberContainer">
          <img className="bioImage" src={jeressiasImage} alt="Jeressia" onClick={handleShow}/>
          <div className="socials">
            <div className="name">Jeressia</div>
            <div className="social-links">{jeressiasIcons}</div>
          </div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={jeressiasImage} alt="Jeressia"/>
          <div className="socials">
            <div className="name">Jeressia</div>
            <div className="social-links">{jeressiasIcons}</div>
          </div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={jeressiasImage} alt="Jeressia"/>
          <div className="socials">
            <div className="name">Jeressia</div>
            <div className="social-links">{jeressiasIcons}</div>
          </div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={jeressiasImage} alt="Jeressia"/>
          <div className="socials">
            <div className="name">Jeressia</div>
            <div className="social-links">{jeressiasIcons}</div>
          </div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={jeressiasImage} alt="Jeressia"/>
          <div className="socials">
            <div className="name">Jeressia</div>
            <div className="social-links">{jeressiasIcons}</div>
          </div>
        </div>
      </div>
      
    </AboutStyles>
  )
}

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .groupPhoto {
    height: 200px;
    margin-top: -25px;
  }

  h1{
    font-size:28px;
    color:#ED3457;
  }

  img {
  object-fit: cover;
  }

  .bioImage{
    height: 80px;
  width: 80px;
  border-radius: 100%;
  }

  .teamContainer{
    display: flex;
    flex-direction: column;

    .memberContainer{
      display:flex;
      margin-bottom: 10px;

      .socials{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        .name{
          margin-bottom: 5px;
          letter-spacing: 1px;
        }

        .social-links{
          display: flex;

          .icons{
            width: 25px;
            height: 25px;
            margin: 0 5px;
        }
      }
    }
  }
}
`