import React from 'react'
import styled from 'styled-components';

export default function GlobalFooter() {
    return (
        <footer>
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
    )
}
