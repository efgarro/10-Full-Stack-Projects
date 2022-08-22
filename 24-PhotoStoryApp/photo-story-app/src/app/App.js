import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../layouts/HomePage";
import { HubPage } from "../layouts/HubPage";
import { ContactPage } from "../layouts/ContactPage";
import { ContactForm } from "../components/ContactForm";
import { NicoyaStaCruz } from "../components/NicoyaStaCruz";
import { JacoHerradura } from "../components/JacoHerradura";
import { Monteverde } from "../components/Monteverde";
import { LaFortuna } from "../components/LaFortuna";
import { CahuitaPtoViejo } from "../components/CahuitaPtoViejo";
import "../css/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<Home />} />
        </Route>
        <Route element={<HubPage />} >
          <Route path="nicoyastacruz" element={<NicoyaStaCruz />} />
          <Route path="jacoherradura" element={<JacoHerradura />} />
          <Route path="monteverde" element={<Monteverde />} />
          <Route path="lafortuna" element={<LaFortuna />} />
          <Route path="cahuitaptoviejo" element={<CahuitaPtoViejo />} />
        </Route>
        <Route element={<ContactPage />} >
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
