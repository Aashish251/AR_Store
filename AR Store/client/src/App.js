import logo from "./logo.svg";

import "antd/dist/antd.css";
import { Button } from "antd"; /// lear what is antd ??

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Items from "./pages/Items";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/item" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
