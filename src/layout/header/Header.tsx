import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Containers } from "../../components/slider/Containers";
import { FlexWrapper } from "../../components/menu/FlexWrapper";
import { HeaderMenu } from "./HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";


const Items = ["Home","Skills","Works","Testimony","Contact"]

export const Header = () => {
  return (
    <StyledHeader>
      <Containers>
        <FlexWrapper justify={"space-between"} align={"center"}>
      <Logo />
      <HeaderMenu menuItems={Items}/>
      <MobileMenu menuItems={Items}/>
      </FlexWrapper>
      </Containers>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
 background: rgba(31, 31, 32, 0.9);
 padding: 20px 0;
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`
