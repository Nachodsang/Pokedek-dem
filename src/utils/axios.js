import Axios from "axios";

const createAxios = (baseURL) => {
  return Axios.create({
    baseURL: baseURL,
  });
};

const pokemonApiV2 = createAxios("https://pokeapi.co/api/v2/");

export { pokemonApiV2 };
