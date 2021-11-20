import React from 'react'
const editIcon = "icons/edit-icon.svg";

export default function JournalEdit({ handleShow }) {
  return (
    <p className="footer-action edit">
      <img src={editIcon} alt='edit post' onClick={handleShow} />
    </p>
  )
}
