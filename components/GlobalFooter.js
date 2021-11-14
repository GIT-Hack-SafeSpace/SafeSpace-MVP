import React from 'react'
import styled from 'styled-components';

export default function GlobalFooter() {

    const FooterStyle = styled.footer`
        border-top: 1px solid lightgray;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: white;
        color: gray;
        text-align: center;


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

    return (
        <FooterStyle>
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
        </FooterStyle>
    )
}
