import { Tabs } from "react-tabs";
import styled from "styled-components";

const SideNavigationStyled = styled(Tabs)`
    display: flex;
    gap: 10px;
  .react-tabs__tab{
    display: flex;
  }
  .react-tabs__tab--selected{
    background-color: #4CB5F5;
  }
`;
export default SideNavigationStyled;