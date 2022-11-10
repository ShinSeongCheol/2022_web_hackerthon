import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TourPage from "./components/TourPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import SimpleSlider from "./components/SimpleSilder";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
>>>>>>> 8b7f0b20e0cc3bb605de17eac7e17fa6c36f9943

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
