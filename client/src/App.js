import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Data } from "./Data";
import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
      {/* <PublicNavbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
