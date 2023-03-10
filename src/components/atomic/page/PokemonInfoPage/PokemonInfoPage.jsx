import Search from "antd/es/transfer/search";
import { Row, Col, Spin } from "antd";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

import { Card, PokemonInfo, Text, PokemonData, IconToggle } from "@atomic";
import { pokemonInfo, getCardColorsByPokemonTypes, pokemonApiV2 } from "@utils";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;
const initial = {
  data: {},
  loading: false,
  error: null,
};
function PokemonInfoPage() {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();

  const [state, setState] = useState(initial);

  const id = searchParams.get("id");

  const bgColors = getCardColorsByPokemonTypes(pokemonInfo?.types);

  const goBack = () => {
    navigate("/", { replace: true });
  };
  const infoBack = <IconToggle name="back" size="3rem" onClick={goBack} />;

  const fetchPokemon = async (id) => {
    setState((prev) => ({
      ...prev,
      loading: true,
    }));
    let pokemon;
    let fetchError;

    try {
      const pokemonResponse = await pokemonApiV2.get(`pokemon/${id}`);
      const speciesResponse = await pokemonApiV2.get(`pokemon-species/${id}`);

      pokemon = pokemonResponse?.data;
      let species = speciesResponse?.data;

      console.log(pokemon, species);

      pokemon = {
        ...pokemon,
        image: pokemon?.sprites?.other?.dream_world?.front_default,
        about: species?.flavor_text_entries?.[0]?.flavor_text,
      };
    } catch (error) {
      fetchError = error;
    }
    setState((prev) => ({
      ...prev,
      loading: false,
      data: pokemon,
      error: fetchError,
    }));
  };

  useEffect(() => {
    id && fetchPokemon(id);
  }, [id]);

  if (!state.data || isEmpty(state.data)) {
    return;
  }
  return (
    <div>
      <Text color="white">Pokemon info Page : {id}</Text>
      <Wrapper>
        <Card
          bgColors={bgColors}
          width="100%"
          borderRadius="1rem"
          maxWidth="80rem"
          left={infoBack}
        >
          {state.loading ? (
            <Spin />
          ) : (
            <Row align="middle">
              <Col xs={24} sm={12} md={8}>
                <PokemonInfo pokemon={state.data} />
              </Col>
              <Col xs={24} sm={12} md={16}>
                <PokemonData pokemon={state.data} />
              </Col>
            </Row>
          )}
        </Card>
      </Wrapper>
    </div>
  );
}

export default PokemonInfoPage;
