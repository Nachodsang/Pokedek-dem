import { useState } from "react";
import styled from "styled-components";
import { Text, Input } from "@atomic";

const StyleDiv = styled.div`
  display: inline--flex;
  flex-direction: column;
  align-item: center;

  .search-input-wrapper {
    margin-top: 1rem;

    .ant-input {
      font-size: 3rem;
      height: 3.2rem;
      max-width: 20rem;
    }
  }
`;

function Search({ label, placeholder, onChange, ...props }) {
  const [value, setValue] = useState("");

  const onSearchChange = (value) => {
    setValue(value);
    onChange?.(value);
  };
  return (
    <StyleDiv>
      <Text fontSize="1.4rem" color="white">
        {label}
      </Text>
      <div className="search-input-wrapper">
        <Input
          value={value}
          onSearchChange={onSearchChange}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </StyleDiv>
  );
}

export default Search;
