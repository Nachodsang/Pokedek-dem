import React from "react";
import styled from "styled-components";

import { getHeight, getWeight } from "@utils";
import { Text } from "@atomic";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  border-radius: 1.2rem;
`;

const StyledImage = styled.div`
  padding: 2rem;
  max-width: 20rem;
`;

function PokemonInfo({ pokemon }) {
  return (
    <InfoWrapper>
      <Text fontSize="1rem">#{pokemon?.id}</Text>
      <Text fontSize="1rem">Name: {pokemon?.name}</Text>
      <StyledImage>
        <img src={pokemon?.images} width="100%" />
      </StyledImage>
      <Text fontSize="0.8rem">Height: {getHeight(pokemon?.height)}</Text>
      <Text fontSize="0.8rem">Weight: {getWeight(pokemon?.weight)}</Text>
    </InfoWrapper>
  );
}

export default PokemonInfo;
