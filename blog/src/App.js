import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TourPage from "./components/TourPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/tourList" element={<TourPage />}></Route>
                    <Route path="/restaurant" element={<Home />}></Route>
                    <Route path="/berth" element={<Home />}></Route>
                    <Route path="/forum" element={<Home />}></Route>
                </Routes>
            </BrowserRouter> */}
            <SimpleSlider />
        </div>
    );
}

export default App;
