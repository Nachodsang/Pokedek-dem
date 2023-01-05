import styled from "styled-components";
import { Menu as MenuAntd } from "antd";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
const StyledMenu = styled(MenuAntd)`
  max-height: 200px;
  overflow: scroll;

//   .ant-dropdown-menu-item,
//   .ant-dropdown-menu-submenu-title,
//   .ant-dropdown {
//     font-size: 1rem;
//     color: red;
// not working due to class name difference 
  }
`;

function Menu({ items = [], onItemSelect, style, ...props }) {
  //confusing function ***
  const handleOnItemSelect = ({ key }) => {
    const selectedItem = items.find((i) => i.key === key);

    onItemSelect({
      value: selectedItem?.value,
      key: key,
      item: selectedItem,
    });

    console.log(selectedItem);
  };
  return (
    <StyledMenu
      items={items}
      style={style}
      onClick={handleOnItemSelect}
      {...props}
    ></StyledMenu>
  );
}

export default Menu;
