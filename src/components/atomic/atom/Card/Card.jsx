import React from "react";
import { Card as CardAntd } from "antd";
import styled from "styled-components";

const StyledCard = styled(CardAntd)`
  width: ${({ width }) => width || "20rem"};
  padding: ${({ padding }) => padding || "1rem"};
  background: ${({ bgColors }) =>
    `linear-gradient(${bgColors[0]}, ${bgColors[1]})`};

  border: 6px solid #396bba;

  .ant-card-body {
    padding: 0;
  }

  border-radius: ${({ borderRadius }) => borderRadius || "1rem"};

  max-width: ${({ maxWidth }) => maxWidth || "60rem"};
`;

function Card({ children, left, right, bgColors = [], maxWidth, ...props }) {
  const header = <Header left={left} right={right} />;
  return (
    <StyledCard bgColors={bgColors} maxWidth={maxWidth} {...props}>
      {header && header}
      {children}
    </StyledCard>
  );
}

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = ({ left, right, children }) => {
  return (
    <StyledHeaderContainer>
      {left && <div>{left}</div>}
      {right && <div>{right}</div>}
    </StyledHeaderContainer>
  );
};

Card.Header = Header;
export default Card;
