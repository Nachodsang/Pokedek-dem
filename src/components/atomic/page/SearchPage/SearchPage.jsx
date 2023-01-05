import React from "react";
import { Logo, FilterDropdown, DropdownMenu } from "@atomic";
import styled from "styled-components";
import { Row, Col } from "antd";

import { regions } from "./helper";
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

  return (
    <Container>
      <Logo src={pokemonLogo} width={200} />
      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label={"REGION"} items={regionDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label={"REGION"} items={regionDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label={"REGION"} items={regionDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Text fontSize="1.4rem">Search</Text>
        </Col>
      </StyledRow>
    </Container>
  );
}

export default SearchPage;
