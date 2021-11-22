import React from "react";
import Button from 'react-bootstrap/Button';

export default function ModalCreate({ handleShow }) {
  return (
    <Button className="create" onClick={handleShow}>
      <span>&#43;</span> CREATE
    </Button>
  );
}
