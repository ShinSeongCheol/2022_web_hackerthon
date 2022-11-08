import "./App.css";
import Navbar from "./components/Navbar";
import Maincontents from "./components/Maincontents";
import TourPage from './components/TourPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
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

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Maincontents />}></Route>
                    <Route path="/tourList" element={<TourPage />}></Route>
                    <Route path="/restaurant" element={<Maincontents />}></Route>
                    <Route path="/berth" element={<Maincontents />}></Route>
                    <Route path="/forum" element={<Maincontents />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
