import React from "react";
import { Logo, FilterDropdown, DropdownMenu, Search } from "@atomic";
import styled from "styled-components";
import { Row, Col } from "antd";

import { regions, types, sortby } from "./helper";
import pokemonLogo from "@/assets/images/pokedex.png";
import { Text } from "@atomic";

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

function SearchPage() {
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

  return (
    <Container>
      <Logo src={pokemonLogo} width={200} />
      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label={"REGION"} items={regionDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label={"TYPE"} items={typeDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label={"SORTBY"} items={sortbyDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <div>
            <Search label={"Search"} />
          </div>
        </Col>
      </StyledRow>
    </Container>
  );
}

export default SearchPage;
