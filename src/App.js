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
import Raudi from "./components/model/Raudi";
import Brabus from "./components/model/Brabus";
import Turbo from "./components/model/Turbo";
import Strandale from "./components/model/Strandale";
import M from "./components/model/M"
import Gt from "./components/model/Gt";
import Wraith from "./components/model/Wraith";
import Urus from "./components/model/Urus";
import Chal from "./components/model/Chal";
import Dbs from "./components/model/Dbs";
import Chiron from "./components/model/Chiron";

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
          <Route path="/raudi" element={<Raudi />} />
          <Route path="/brabus" element={<Brabus />} />
          <Route path="/turbo" element={<Turbo />} />
          <Route path="/strandale" element={<Strandale />} />
          <Route path="/m" element={<M />} />
          <Route path="/gt" element={<Gt />} />
          <Route path="/wraith" element={<Wraith />} />
          <Route path="/urus" element={<Urus />} />
          <Route path="/challenger" element={<Chal />} />
          <Route path="/dbs" element={<Dbs />} />
          <Route path="/chiron" element={<Chiron />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
