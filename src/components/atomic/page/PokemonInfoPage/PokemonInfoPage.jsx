import Search from "antd/es/transfer/search";
import { Row, Col } from "antd";
import styled from "styled-components";
import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { Card, PokemonInfo, Text, PokemonData, IconToggle } from "@atomic";
import { pokemonInfo, getCardColorsByPokemonTypes } from "@utils";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

function PokemonInfoPage() {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const id = searchParams.get("id");

  const bgColors = getCardColorsByPokemonTypes(pokemonInfo?.types);

  const goBack = () => {
    navigate("/", { replace: true });
  };
  const infoBack = <IconToggle name="back" size="3rem" onClick={goBack} />;
  return (
    <div>
      <Text>Pokemon info Page : {id}</Text>
      <Wrapper>
        <Card
          bgColors={bgColors}
          width="100%"
          borderRadius="1rem"
          maxWidth="80rem"
          left={infoBack}
        >
          <Row align="middle">
            <Col xs={24} sm={12} md={8}>
              <PokemonInfo pokemon={pokemonInfo} />
            </Col>
            <Col xs={24} sm={12} md={16}>
              <PokemonData pokemon={pokemonInfo} />
            </Col>
          </Row>
        </Card>
      </Wrapper>
    </div>
  );
}

export default PokemonInfoPage;
