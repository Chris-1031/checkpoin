import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Accueil from "./components/Accueil";
import Histoire from "./components/documentation/Histoire";
import Marques from "./components/marque/Marques";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/marque" element={<Marques />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
