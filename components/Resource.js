import React from "react";
import styled from "styled-components";

const ResourceLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 644px;
  width: 100vw;
  overflow: hidden;
  margin: -34px -20px;

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
`;

export default function ResourcePg() {
  return (
    <ResourceLayout>
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
    </ResourceLayout>
  );
}
