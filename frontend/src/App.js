import logo from "./logo.svg";
import "./App.css";
import { Spinner } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Chats from "./pages/private/Chats";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
