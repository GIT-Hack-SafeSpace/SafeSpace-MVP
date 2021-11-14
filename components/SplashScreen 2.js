import React from "react";
import styled from "styled-components";

const SplashContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100%;
  width: 100vw;
  overflow: hidden;

  .splashscreen-text {
    width: 250px;
    text-align: center;
    color: white;
  }

  .splashButton{
    justify-content: flex-end;
    position: absolute;
    bottom: 45px;

    .splash-login {
    background-color: #eea127 !important;
    border: none;
    width: 255px !important;
  }
  }

`;

export default function SplashScreen() {
  return (
    <SplashContent>
      <div className="splashscreen-text">
        <h1>SafeSpace</h1>
        <hr></hr>
        <p>Something about women's workplace trauma</p>
      </div>
      <div className="splashButton">
      <button className="splash-login" href="#">
        Log In
      </button>
      </div>
    </SplashContent>
  );
}
