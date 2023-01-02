import Search from "antd/es/transfer/search";
import React from "react";
import { useSearchParams } from "react-router-dom";

function PokemonInfoPage() {
  let [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return <div>Pokemon info Page : {id} </div>;
}

export default PokemonInfoPage;
