import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { LinkWork } from "../../../../components/link/LinkWork";

export const TabMenu = (props: {menuItems:Array<string> }) => {
  return (
    <StyledTabMenu>
        <ul>
{props.menuItems.map((item: string, index:number)=>{
return <ListItem key={index}>
  <LinkWork href="#">{item}</LinkWork>
  </ListItem>

})}
</ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav `
margin-bottom: 40px;
ul{
    display: flex;
    gap: 20px;
    justify-content: center;
}

`

const ListItem= styled.li `


`




