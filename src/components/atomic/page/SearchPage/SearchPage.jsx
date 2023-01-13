import React from "react";
import {
  Logo,
  FilterDropdown,
  DropdownMenu,
  Search,
  PokemonCard,
} from "@atomic";
import { pokemonInfo, pokemonApiV2 } from "@/utils";
import styled from "styled-components";
import { Row, Col, Spin } from "antd";
import { filter } from "lodash";

import {
  regions,
  types,
  sortby,
  filterBySearch,
  filterByType,
  sortingBy,
} from "./helper";
import pokemonLogo from "@/assets/images/pokedex.png";
import { useState, useEffect } from "react";

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
  // console.log(r.name); //log to see value passed down
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

const getFetchPokemonFilters = (filters) => {
  return filters;
};
// initial state
const initial = {
  data: [],
  loading: false,
  error: null,
};

//search param = &limit=0 , &offset=160 eg. (query.append)
const getQueryString = (region) => {
  if (!region) return null;

  let query = new URLSearchParams();

  query.append("limit", region?.limit);
  query.append("offset", region?.offset);

  //.toString returning string without ?
  return query.toString();
};

//applying filter to state.data
const getPokemonList = (pokemons = [], filters = {}) => {
  const { search, types, sortby } = filters;

  //lodash filter >> (array filtered, callback function)
  const pokemonLists = filter(pokemons, (pokemon) => {
    let remove = false;
    if (search && !filterBySearch(pokemon, search)) {
      remove = true;
    }
    if (
      types &&
      types?.value != "all types" &&
      !filterByType(pokemon, types?.value)
    ) {
      remove = true;
    }
    return !remove;
  });

  const sortedPokemonList = pokemonLists.sort(sortingBy(sortby?.value));
  const result = sortedPokemonList.map((pokemon) => {
    return {
      ...pokemon,
      image: pokemon?.sprites?.other?.dream_world?.front_default,
    };
  });
  return result;
};

function SearchPage() {
  const [filters, setFilters] = useState({});
  const [state, setState] = useState(initial);

  //tbd *****
  const onFilterChange = (key, value) => {
    setFilters((prevFilter) => {
      return {
        ...prevFilter,
        [key]: value,
      };
    });
  };

  const queryString = getQueryString(filters?.region);
  // const pokemonFilter = getFetchPokemonFilters(filters);
  const pokemonLists = getPokemonList(state?.data, filters);

  //console.log area
  console.log(filters);
  // console.log({ queryString });

  const fetchPokemonList = async () => {
    if (!queryString) return;

    let pokemonList = [];
    let fetchError = null;

    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    try {
      const response = await pokemonApiV2.get(`pokemon?${queryString}`);

      // console.log({ response });

      const pokemonResults = response?.data?.results || [];

      for (let pokemon of pokemonResults) {
        const response = await pokemonApiV2.get(`pokemon/${pokemon?.name}`);
        const monster = await response?.data;

        await pokemonList.push(monster);
        // console.log([pokemon.name]);
      }
    } catch (error) {
      fetchError = error;
    }
    setState((prev) => ({
      ...prev,
      loading: false,
      data: pokemonList,
      error: fetchError,
    }));
  };

  useEffect(() => {
    queryString && fetchPokemonList();
  }, [queryString]);
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
        {state?.loading ? (
          <Spin />
        ) : (
          [...pokemonLists].map((pokemon) => (
            <PokemonCard key={pokemon?.id} pokemon={pokemon} />
          ))
        )}
      </PokemonContainer>
    </Container>
  );
}

export default SearchPage;
