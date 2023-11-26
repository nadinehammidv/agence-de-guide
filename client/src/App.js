import "./App.css";
import { Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
import PublicNavbar from "./components/PublicNavbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Team from "./pages/Team";
import { Form } from "semantic-ui-react";
function App() {
  return (
    <div className="App">
      <PublicNavbar/>
      <Routes>
        {/* { <Route path="/" element={<LandingPage />} />} */}
      </Routes>
    </div>
  );
}

export default App;
