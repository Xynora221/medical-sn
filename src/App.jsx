import { Routes, Route } from "react-router-dom";
import LoginPatient from "./pagespatient/LoginPatient";
import HomePatient from "./pagespatient/HomePatient";
import RendezVous from "./pagespatient/RendezVous";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPatient />} />
      <Route path="/accueil" element={<HomePatient />} />
      <Route path="/rendez-vous" element={<RendezVous />} />
    </Routes>
  );
}
export  default App;