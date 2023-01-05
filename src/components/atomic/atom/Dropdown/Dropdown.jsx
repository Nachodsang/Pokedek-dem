import { Dropdown as DropdownAntd, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { Button } from "@atomic";

import React from "react";

const StyledSpace = styled(Space)`
  display: flex;
  justify-content: space-between;
`;
function Dropdown({ title = "select", menu }) {
  return (
    <DropdownAntd overlay={menu} placement="bottom">
      {/* <a onClick={(e) => e.preventDefault()}></a> */}
      <Button width="100%">
        <StyledSpace>
          {title}
          <DownOutlined />
        </StyledSpace>
      </Button>
      {/* <Button width="40%">Yeah</Button> */}
    </DropdownAntd>
  );
}

export default Dropdown;
