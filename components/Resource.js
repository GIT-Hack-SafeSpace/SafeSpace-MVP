import React from "react";
import styled from "styled-components";
import Link from 'next/link'

const ResourceLayout = styled.div`
  .arrangeResources {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
    <ResourceLayout className="resourcelayout">
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
                <Link href="/resources/counseling">
                    <a>
                        <img className="resourceImg" src='images/seekingcounseling.png' alt="Black women counseling"/>
                        <div className="bottom-left">Seek Counseling</div>
                    </a>
                </Link>
            </div>

            <div className="resourceRectangle">
                <Link href="/resources/exercise">
                    <a>
                        <img className="resourceImg" src='images/exercise.png' alt="Exercise & Mediation"/>
                        <div className="bottom-left">Exercise & Meditation</div>
                    </a>
                </Link>
            </div>
    </ResourceLayout>
  );
}
