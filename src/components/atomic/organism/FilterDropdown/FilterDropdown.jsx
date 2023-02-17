import { Text, DropdownMenu } from "@atomic";
import styled from "styled-components";

import { useState, useEffect } from "react";

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  .dropdown-wrapper {
    margin-top: 1rem;

    .ant-btn {
      font-size: 1rem;
      min-width: 20rem;
      height: 3rem;
    }
  }
`;

function FilterDropdown({ label = "label", items = [], onChange }) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  // confusing function ***
  //passing function down and call from children
  //getting item from children then setSelectedItem(item)
  const onItemSelect = ({ item }) => {
    setSelectedItem(item);
    onChange?.(item);
  };

  useEffect(() => {
    if (!items) return;

    const defaultItem = items[0];
    onItemSelect({ item: defaultItem });

    // console.log("errct run", defaultItem);
  }, [items]);

  return (
    <StyledDiv>
      <Text fontSize="1.4rem" color="white">
        {label}
      </Text>
      {/* <Text fontSize="2rem">{label}</Text> */}
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
