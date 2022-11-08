import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';

function BasicExample() {
    return (
        <Navbar bg="light" expand="sm">
            <Container fluid>
                <Navbar.Brand href="#">O₂</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="tourList">여행지</Nav.Link>
                        <Nav.Link href="restaurant">음식점</Nav.Link>
                        <Nav.Link href="berth">숙소</Nav.Link>
                        <Nav.Link href="forum">토론장</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="login">로그인</Nav.Link>
                        <div className='vr'></div>
                        <Nav.Link href="register">회원가입</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
