import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../layouts/HomePage";
import { HubPage } from "../layouts/HubPage";
import { ContactPage } from "../layouts/ContactPage";
import { ContactForm } from "../components/ContactForm";
import { Guanacaste } from "../components/Guanacaste";
import { Jaco } from "../components/Jaco";
import "../css/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="guanacaste" element={<Guanacaste />} />
          <Route path="jaco" element={<Jaco />} />
        </Route>
        <Route element={<HubPage />} >
          <Route path="/contact" element={<ContactForm/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
