import { Typography } from "antd";
import styled from "styled-components";
const { Text: TextAntd } = Typography;
import "antd/dist/reset.css";

const StyledText = styled(TextAntd)`
  font-size: ${({ fontSize }) => fontSize || "1.6rem"};
  color: ${({ color }) => color || "black"};
`;

const Text = ({ children, style, ...props }) => {
  return (
    <StyledText style={style} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
