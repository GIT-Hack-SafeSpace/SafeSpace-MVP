import React from 'react'
const windowIcon = "icons/new-window.svg";

export default function ShowBio({ handleShow }) {
  return (
      <img className="imgIcon" src={windowIcon} alt="click for more info" onClick={handleShow}></img>
  )
}
