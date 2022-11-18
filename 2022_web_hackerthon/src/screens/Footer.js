import "./Footer.css";
import { Form, Button } from "react-bootstrap";
import FaPaperPlane from "./logo512.png";
function Footer() {
  return (
    <footer>
      <Form.Control placeholder="" className="input-form" />
      <Button variant="primary" type="submit" className="input-button">
        <img className="send-icon" src={FaPaperPlane} />
      </Button>
    </footer>
  );
}

export default Footer;
