import React from "react";
import styled from "styled-components";
import { Card, Text, IconToggle } from "@atomic";
import { getCardColorsByPokemonTypes } from "@utils";
import { useNavigate } from "react-router-dom";

const StyledImage = styled.div`
  padding: 2rem;
`;
const Container = styled.div`
  margin: 2rem;
`;

function PokemonCard({ pokemon }) {
  let navigate = useNavigate();
  const pokemonId = <span>#{pokemon?.id}</span>;

  const bgColors = getCardColorsByPokemonTypes(pokemon?.types);
  const handleOnIconInfoClick = () => {
    navigate(`/pokemon?id=${pokemon?.id}`, { replace: true });
  };
  console.log(bgColors);

  const icons = (
    <div>
      <IconToggle name="heart" margin={"0 0.3rem 0 0"} />
      <IconToggle
        name="info"
        isColorChange={false}
        onClick={handleOnIconInfoClick}
      />
    </div>
  );
  return (
    <Container>
      <Card
        left={pokemonId}
        right={icons}
        width="22rem"
        padding="1rem"
        borderRadius="2rem"
        bgColors={bgColors}
        hoverable
      >
        <StyledImage>
          <img src={pokemon?.images} width={"100%"} />
        </StyledImage>
        <Text fontSize="1.2rem">{pokemon?.name}</Text>
      </Card>
    </Container>
  );
}

export default PokemonCard;
