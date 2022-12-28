import React from "react";
import { Logo } from "@atomic";

import pokemonLogo from "@/assets/images/pokedex.png";

function SearchPage() {
  return (
    <div>
      Search Page
      <Logo src={pokemonLogo} />
    </div>
  );
}

export default SearchPage;
