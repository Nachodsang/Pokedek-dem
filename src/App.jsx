import { Image } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pokemonLogoSrc from "./assets/images/pokedex.png";
import "antd/dist/reset.css";

import { Button } from "@atomic";
import { PokemonInfoPage, SearchPage } from "@atomic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="pokemon" element={<PokemonInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
