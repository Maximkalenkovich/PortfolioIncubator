import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Containers } from "../../components/slider/Containers";
import { FlexWrapper } from "../../components/menu/FlexWrapper";
import { DesktopMenu} from "./headerMenu/menu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./HeaderStyles";


const Items = ["Home","Skills","Works","Testimony","Contact"]

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint =768;
  
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Containers>
        <FlexWrapper justify={"space-between"} align={"center"}>
      <Logo />
      {width < breakpoint ? 
                            <MobileMenu menuItems={Items}/> 
                          : <DesktopMenu menuItems={Items}/>}
      </FlexWrapper>
      </Containers>
    </S.Header>
  );
};

