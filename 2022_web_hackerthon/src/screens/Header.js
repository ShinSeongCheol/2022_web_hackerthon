import "./Header.css";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="primary" variant="dark" className="header-container">
      <Navbar.Brand className="header-title-container">
        <h3>Osaka Chatting Room</h3>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
