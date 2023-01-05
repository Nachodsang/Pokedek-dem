import { Image } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pokemonLogoSrc from "./assets/images/pokedex.png";

import { Button } from "@atomic";
import { PokemonInfoPage, SearchPage, Test, Test2 } from "@atomic";

import "antd/dist/reset.css";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="pokemon" element={<PokemonInfoPage />} />
        <Route path="test" element={<Test />} />
        <Route path="test2" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
