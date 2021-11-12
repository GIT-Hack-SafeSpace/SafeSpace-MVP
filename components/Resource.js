import React from "react";
import styled from "styled-components";

const ResourceLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  min-height: 100%;
  width: 100vw;
  overflow: hidden;
  background-color: white;
  
  .navBar {
    overflow: hidden;
    height: 90px;
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 30px;
    border-bottom: 1px solid lightgray;
    z-index: 200;
  }

  .menuExample {
      font-size: 40px;
      color: lightgray;
  }

  .safespace {
      color: gray;
  }

  .arrangeResources {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

  .resourceRectangle {
      width: 100%;
      height: 200px;
      position: relative;
      text-align: center;
      margin-bottom: 19px;
    }

    .resourceImg {
        width: 110%;
    }

    .bottom-left {
        position: absolute;
        bottom: 0px;
        left: 19px;
        font-size: 30px;
        color: white;
        filter: drop-shadow(2px 2px 10px black);
    }
    
    .footerBar {
        border-top: 1px solid lightgray;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: white;
        color: gray;
        text-align: center;
    }
    
    .orderFooterOptions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 5px;
        padding-right: 5px;
    }
  
    .footerBarOption {
        border: 1px solid white;
    }

    .footerIcon {
        font-size: 29px;
        margin: 0;
        padding-top: 5px;
    }
    
    .optionTitle {
        margin: 0;
        padding-bottom: 10px;
        font-size: 12px;
        color: gray;
    }

`;

export default function ResourcePg() {
  return (
    <ResourceLayout>
    <nav className="navBar">
        <p className="menuExample">=</p>
        <h1 className="safespace">SafeSpace.</h1>     
        <p> </p>
    </nav>
<br/>
<br/>

<div className="arrangeResources">
   <div className="resourceRectangle">
    <img className="resourceImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmR73W1iR_RTCb2ZUDnXIOrW487S-54JWxA&usqp=CAU" alt="Happy Black Women"/>
    <div className="bottom-left">Creative Solutions</div>
   </div>
   
   <div className="resourceRectangle">
    <img className="resourceImg" src="https://www.thetemper.com/wp-content/uploads/2020/06/Black-Therapist.png-e1516484163919.jpg" alt="Black women counseling"/>
    <div className="bottom-left">Seek Counseling</div>
   </div>
   
   <div className="resourceRectangle">
    <img className="resourceImg" src="https://templebethmiriam.org/wp-content/uploads/2010/01/o-BLACK-WOMAN-HAPPY-OUTSIDE-facebook.jpg" alt="Exercise & Mediation"/>
    <div className="bottom-left">Exercise & Meditation</div>
   </div>
</div>
   
    <footer className="footerBar">
        <div className="orderFooterOptions">
            <div className="footerBarOption">
                <p className="footerIcon">💬</p>
                <p className="optionTitle">Community</p>
            </div>
            <div className="footerBarOption">
                <p className="footerIcon">🌐</p>
                <p className="optionTitle">Companies</p>
            </div>
            <div className="footerBarOption">
                <p className="footerIcon">➕</p>
                <p className="optionTitle">Rant/Rave</p>
            </div>
            <div className="footerBarOption">
                <p className="footerIcon">🤍</p>
                <p className="optionTitle">Inspiration</p>
            </div>
            <div className="footerBarOption">
                <p className="footerIcon">💡</p>
                <p className="optionTitle">Resources</p>
            </div>
        </div>
    </footer>

    </ResourceLayout>
  );
}