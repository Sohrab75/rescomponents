import React from "react";
import StyledHeader from "./HeaderStyled";
import CustomHeading from "../components/styles/CustomHeading";
import Analog from "../htmlDocs/Analog";
const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav className="navigation">
          <ul className="brand_name items">
            <li className="list_menu_item">
              <CustomHeading fontSize="20px" label="Aakhiri Safar!!"/>
            </li>
          </ul>
          <Analog/>
          <ul className="menu_item items">
            <li className="list_menu_item"><CustomHeading fontSize="20px" label="home"/></li>
            <li className="list_menu_item"><CustomHeading fontSize="20px" label="Learning Material"/></li>
            <li className="list_menu_item"><CustomHeading fontSize="20px" label="Contact Us"/></li>
            <li className="list_menu_item"><CustomHeading fontSize="20px" label="About Us"/></li>
          </ul>
        </nav>
      </StyledHeader>
    </>
  );
};

export default Header;
