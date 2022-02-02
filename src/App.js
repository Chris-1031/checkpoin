import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Accueil from "./components/Accueil";
import Histoire from "./components/documentation/Histoire";
import Marques from "./components/marque/Marques";
import Model from "./components/model/Model";
import Mercedes from "./components/marque/Mercedes";
import Porsche from "./components/marque/Porsche";
import Ferrari from "./components/marque/Ferrari";
import Bmw from "./components/marque/Bmw";
import Ford from "./components/marque/Ford";
import Rolls from "./components/marque/Rolls";
import Lambo from "./components/marque/Lamborghini";
import Dodge from "./components/marque/Dodge";
import Aston from "./components/marque/Aston";
import Bugatti from "./components/marque/Bugatti";
import ModelRoute from "./components/model/ModelRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/marque" element={<Marques />} />
          <Route path="/model" element={<Model />} />
          <Route path="/mercedes" element={<Mercedes />} />
          <Route path="/porsche" element={<Porsche />} />
          <Route path="/ferrari" element={<Ferrari />} />
          <Route path="/bmw" element={<Bmw />} />
          <Route path="/ford" element={<Ford />} />
          <Route path="/rolls" element={<Rolls />} />
          <Route path="/lambo" element={<Lambo />} />
          <Route path="/dodge" element={<Dodge />} />
          <Route path="/aston" element={<Aston />} />
          <Route path="/bugatti" element={<Bugatti />} />
          <Route path="/modelRoute" element={<ModelRoute />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
