import React from 'react'
import styled from 'styled-components'

export default function GlobalHeader() {

    
    const HeaderStyle = styled.nav`
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
    
      .menuExample {
          font-size: 40px;
          color: lightgray;
      }
    
      .safespace {
          color: gray;
      }
    `;

    return (
        <HeaderStyle>
            <p className="menuExample">=</p>
            <h1 className="safespace">SafeSpace.</h1>     
            <p> </p>
        </HeaderStyle>
    )
}
