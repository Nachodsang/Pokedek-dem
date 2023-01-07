import React from "react";
import {
  Logo,
  FilterDropdown,
  DropdownMenu,
  Search,
  PokemonCard,
} from "@atomic";
import { pokemonInfo } from "@/utils";
import styled from "styled-components";
import { Row, Col } from "antd";

import { regions, types, sortby } from "./helper";
import pokemonLogo from "@/assets/images/pokedex.png";
import { useState } from "react";

const Container = styled.div`
  text-align: center;
`;

//overriding row design to not exceedingly spread
const StyledRow = styled(Row)`
  max-width: 1000px;
  margin: auto;
  margin-top: 2.5rem;
  padding: 2rem;
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-around;
`;
const regionDropdownItems = regions.map((r) => {
  console.log(r.name); //log to see value passed down
  return {
    ...r,
    key: r?.name,
    value: r?.name,
    label: `${r?.name} (${r?.offset} - ${r?.limit + r?.offset})`,
  };
});

const typeDropdownItems = types.map((t) => {
  return {
    key: t,
    value: t,
    label: t,
  };
});

const sortbyDropdownItems = sortby.map((s) => ({
  key: s,
  value: s,
  label: s,
}));

const getFetchPokemonoFilters = (filters) => {
  return filters;
};
function SearchPage() {
  const [filter, setFilter] = useState({});

  //tbd *****
  const onFilterChange = (key, value) => {
    setFilter((prevFilter) => {
      return {
        ...prevFilter,
        [key]: value,
      };
    });
  };

  const pokemonFilter = getFetchPokemonoFilters(filter);
  console.log({ pokemonFilter });
  return (
    <Container>
      <Logo src={pokemonLogo} width={200} />
      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label={"REGION"}
            items={regionDropdownItems}
            onChange={(item) => onFilterChange("region", item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label={"TYPE"}
            items={typeDropdownItems}
            onChange={(item) => onFilterChange("types", item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label={"SORTBY"}
            items={sortbyDropdownItems}
            onChange={(item) => onFilterChange("sortby", item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <div>
            <Search
              label={"Search"}
              placeholder="TYPING..."
              onChange={(value) => onFilterChange("search", value)}
            />
          </div>
        </Col>
      </StyledRow>
      <PokemonContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
          <PokemonCard key={x} pokemon={pokemonInfo} />
        ))}
      </PokemonContainer>
    </Container>
  );
}

export default SearchPage;
