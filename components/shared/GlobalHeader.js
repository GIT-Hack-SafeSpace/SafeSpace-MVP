import React from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import Link from 'next/link';

export default function GlobalHeader() {
  return (
    <Navbar className="nb-fixed" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/journal">
          <h1 className="safespace">SafeSpace.</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <h1 className="safespace">SafeSpace.</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <h2>Tools</h2>
              <Link href="/profile">Profile</Link>
              <Link href="/">Your Mood</Link>
              <Link href="/conflict-modes">Conflict Types</Link>
              <Link href="/conflict-quiz">Get Your Type</Link>
              <hr />
              <h2>About</h2>
              <Link href="/about">The Team</Link>
              <Link href="/hackathon">Hackathon Info</Link>
              <Link href="/dashboard">SafeSpace. Impact Dashboard</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
