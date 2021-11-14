import React from "react";
import styled from "styled-components";
import Link from 'next/link'

const ResourceLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 644px;
  overflow: hidden;
  margin: -34px -20px;

  .arrangeResources {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

  .resourceRectangle {
      width: 100%;
      height: 158px;
      position: relative;
      text-align: center;
      border-top: 2px solid white;
    }

    .resourceImg {
        width: 105%;
    }

    .bottom-left {
        position: absolute;
        bottom: 0px;
        left: 15px;
        font-size: 30px;
        color: white;
        filter: drop-shadow(2px 2px 10px black);
    }
`;

export default function ResourcePg() {
  return (
    <ResourceLayout>
            <div className="resourceRectangle">
                <Link href="/resources/help">
                    <a>
                        <img className="resourceImg" src='images/help.png' alt="Help"/>
                        <div className="bottom-left">Help</div>
                    </a>
                </Link>
            </div>

            <div className="resourceRectangle">
                <Link href="/resources/creative">
                    <a>
                        <img className="resourceImg" src='images/creativesolutions.png' alt="Happy Black Women"/>
                        <div className="bottom-left">Creative Solutions</div>
                    </a>
                </Link>
            </div>

            <div className="resourceRectangle">
                <Link href="/resources/seeking-counseling">
                    <a>
                        <img className="resourceImg" src='images/seekingcounseling.png' alt="Black women counseling"/>
                        <div className="bottom-left">Seek Counseling</div>
                    </a>
                </Link>
            </div>

            <div className="resourceRectangle">
                <Link href="/resources/exercise-meditation">
                    <a>
                        <img className="resourceImg" src='images/exercise.png' alt="Exercise & Mediation"/>
                        <div className="bottom-left">Exercise & Meditation</div>
                    </a>
                </Link>
            </div>
    </ResourceLayout>
  );
}
