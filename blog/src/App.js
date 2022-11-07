import "./App.css";
import Navbar from "./components/Navbar";
import Maincontents from "./components/Maincontents";
import Stack from "react-bootstrap/esm/Stack";
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
            <Stack gap={3}>
                <Navbar></Navbar>
                <Maincontents></Maincontents>
            </Stack>
        </div>
    );
}

export default App;
