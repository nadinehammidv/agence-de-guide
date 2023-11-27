import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PublicNavbar from "./components/PublicNavbar";
import {Data} from "./Data";
function App() {
  return (
    <div className="App">
      {/* <PublicNavbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
