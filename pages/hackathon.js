import React from 'react';
import AccordionMenu from "../components/AccordionMenu";
import HeaderOnly from '../layouts/HeaderOnly';

export default function Hackathon() {
  return (
    <HeaderOnly>
      <AccordionMenu />
      
      <div style={{display: 'flex', placeContent: 'center', marginTop: '3em'}}>
      <h2 style={{fontSize: '18px', color: '#ED3457'}}><b>User Journey & Entity Relationship Diagram</b></h2>
      </div>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width='100%'
          height='450'
          src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSW4mVA9Uo9vZq1NHaIf8Gy%2FSafe-Space-Jam%3Fnode-id%3D0%253A1'
          allowFullScreen
        ></iframe>

      <div style={{display: 'flex', placeContent: 'center', marginTop: '4em'}}>
        <h2 style={{fontSize: '18px', color: '#ED3457'}}><b>SafeSpace. Prototype</b></h2>
      </div>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width='100%'
          height='850'
          src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FtSFJwjvYJGTZ7asZ4Uwuir%2FSafeSpace-ProtoType%3Fnode-id%3D25%253A168%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D25%253A168'
          allowFullScreen
        ></iframe>
    </HeaderOnly>
  );
}
