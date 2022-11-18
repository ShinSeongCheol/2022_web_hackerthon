import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Hotel from "./screens/hotel";
import Place from "./screens/place";
import Food from "./screens/food";
import Login from "./screens/Login";
// import Talk from "./screens/Talk";
import Signup from "./screens/Signup";
import Osaka from "./screens/Osaka";
import Festival from "./screens/Festival";
import Footer from "./components/Footer";
// place
import Osakasang from "./screens/place/Osakasang";
import Depojan from "./screens/place/depojan";
import Sitennoji from "./screens/place/sitennoji";
import Universal from "./screens/place/Universal";
import Umeda from "./screens/place/Umeda";
import Jivri from "./screens/place/Jivri";
import Doyokuni from "./screens/place/doyokuni";
import Gaiukan from "./screens/place/gaiukan";
import Aveno from "./screens/place/Aveno";
import Gumon from "./screens/place/gumon";
import Dendentaun from "./screens/place/dendentaun";
import Ssiyositai from "./screens/place/ssiyositai";

// food
import Moeyomenske from "./screens/food/Moeyomenske";
import Heijoen from "./screens/food/Heijoen";
import Motomura from "./screens/food/Motomura";
// hotel
import Arthotel from "./screens/hotel/Arthotel";
import Ivis from "./screens/hotel/Ivis";
import Yahmatoyah from "./screens/hotel/Yahmatoyah";
//festival
import Omiztori from "./screens/festival/Omiztori";
import Sacurano from "./screens/festival/Sacurano";
import Smiyorimachuri from "./screens/festival/Smiyorimachuri";
import Universalport from "./screens/festival/Universalport";
//gita
import NavBarElements from "./component/Navbar/NavBarElements";
import Carousel from "react-bootstrap/Carousel";


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
                        <h3>about Osaka</h3>
                        <p>오사카를 소개합니다</p>
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
                        <h3>Osaka travel</h3>
                        <p>오사카 관광명소를 소개합니다</p>
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
                        <h3>Osaka festival</h3>
                        <p>오사카의 축제를 소개합니다</p>
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
                <Route path="/Osaka" element={<Osaka />} />
                {/* place */}
                <Route path="/Osakasang" element={<Osakasang />} />
                <Route path="/depojan" element={<Depojan />} />
                <Route path="/sitennoji" element={<Sitennoji />} />
                <Route path="/Universal" element={<Universal />} />
                <Route path="/Festival" element={<Festival />} />
                <Route path="/Aveno" element={<Aveno />} />
                <Route path="/Jivri" element={<Jivri />} />
                <Route path="/doyokuni" element={<Doyokuni />} />
                <Route path="/gaiukan" element={<Gaiukan />} />
                <Route path="/gumon" element={<Gumon />} />
                <Route path="/dendentaun" element={<Dendentaun />} />
                <Route path="/ssiyositai" element={<Ssiyositai />} />
                <Route path="/Umeda" element={<Umeda />} />
                <Route path="/Heijoen" element={<Heijoen />} />
                <Route path="/Moeyomenske" element={<Moeyomenske />} />
                <Route path="/Heijoen" element={<Heijoen />} />
                <Route path="/Motomura" element={<Motomura />} />
                <Route path="/Arthotel" element={<Arthotel />} />
                <Route path="/Yahmatoyah" element={<Yahmatoyah />} />
                <Route path="/Omiztori" element={<Omiztori />} />
                <Route path="/Sacurano" element={<Sacurano />} />
                <Route path="/Smiyorimachuri" element={<Smiyorimachuri />} />
                <Route path="/Universalport" element={<Universalport />} />
                {/* <Route path="/talk" element={<Talk />} /> */}
                <Route path="/test" element={<Test />} />
                <Route path="/Ivis" element={<Ivis />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
