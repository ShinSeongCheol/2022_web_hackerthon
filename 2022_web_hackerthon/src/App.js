import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Hotel from "./screens/hotel";
import Place from "./screens/place";
import Food from "./screens/food";
import Talk from "./screens/Talk";
import Signup from "./screens/Signup";
import NavBarElements from "./component/Navbar/NavBarElements";
import Carousel from "react-bootstrap/Carousel";
import Test from "./screens/Test";
import Footer from "./components/Footer";
import Login from "./screens/Login";

function App() {
    return (
        <Router>
            <NavBarElements />
            <Carousel fade>
                <Carousel.Item>
                    <img
                        src={process.env.PUBLIC_URL + "/image/img1.jpg"}
                        width="300"
                        height="250"
                        data-reactied="266"
                        objective-fit="contain"
                        className="d-block w-100"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Osaka travel</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={process.env.PUBLIC_URL + "/image/img2.jpg"}
                        width="300"
                        height="250"
                        data-reactied="266"
                        objective-fit="contain"
                        className="d-block w-100"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={process.env.PUBLIC_URL + "/image/img3.jpg"}
                        width="300"
                        height="250"
                        data-reactied="266"
                        className="d-block w-100"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/place" element={<Place />} />
                <Route path="/food" element={<Food />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/talk" element={<Talk />} />
                <Route path="/test" element={<Test />} />
            </Routes>
            
            <Footer />
        </Router>
    );
}

export default App;
