import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Guanacaste } from "../pages/Guanacaste";
import { Jaco } from "../pages/Jaco";
import "../css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guanacaste" element={<Guanacaste />} />
        <Route path="/jaco" element={<Jaco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
