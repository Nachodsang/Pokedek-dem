import { Text, DropdownMenu } from "@atomic";
import styled from "styled-components";

import { useState } from "react";

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  .dropdown-wrapper {
    min-width: 20rem;
    padding: 1rem;

    .ant-btn {
      font-size: 1rem;
    }
  }
`;
function FilterDropdown({ label = "label", items = [] }) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  // confusing function ***
  //passing function down and call from children
  //getting item from children then setSelectedItem(item)
  const onItemSelect = ({ item }) => {
    setSelectedItem(item);
  };
  return (
    <StyledDiv>
      <Text fontSize="1.4rem">{label}</Text>

      <div className="dropdown-wrapper">
        <DropdownMenu
          value={selectedItem}
          items={items}
          onItemSelect={onItemSelect}
        />
      </div>
    </StyledDiv>
  );
}

export default FilterDropdown;
