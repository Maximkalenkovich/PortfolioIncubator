import styled from "styled-components";
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
ul{
    display: flex;
    /* gap: 20px; */
    justify-content: space-between;
    max-width: 352px;
    width:100%;
    margin: 0 auto 40px;

}

`

const ListItem= styled.li `


`





