import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="/">오투 otu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/place">여행지</Nav.Link>
            <Nav.Link href="/food">맛도리</Nav.Link>
            <Nav.Link href="/hotel">숙소</Nav.Link>
            <NavDropdown title="토론장" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">전체글보기</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                내 글 보기
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">글 쓰기</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                헿hang
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">로그인</Nav.Link>
            <Nav.Link eventKey={2} href="/Osaka">
              osaka
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;