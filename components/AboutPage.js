import React from 'react';
import styled from 'styled-components';

const groupPhoto = '/about/safe.png';
const Jeressia = './about/jeressia.jpg';

export default function AboutPage() {
  const AboutStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .groupPhoto {
      height: 300px;
    }

    img {
    max-width: 100%;
    max-height: 100%;
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
      }
    }
    `
    
  return (
    <AboutStyles>
      <img className="groupPhoto" src={groupPhoto} alt="group image"/>
      <h1>About the Team</h1>
      <div className="teamContainer">
        <div className="memberContainer">
          <img className="bioImage" src={Jeressia} alt="Jeressia"/>
          <div className="socials"></div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={Jeressia} alt="Jeressia"/>
          <div className="socials"></div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={Jeressia} alt="Jeressia"/>
          <div className="socials"></div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={Jeressia} alt="Jeressia"/>
          <div className="socials"></div>
        </div>
        <div className="memberContainer">
          <img className="bioImage" src={Jeressia} alt="Jeressia"/>
          <div className="socials"></div>
        </div>
      </div>
      
    </AboutStyles>
  )
}
