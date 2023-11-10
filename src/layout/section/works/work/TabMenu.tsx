import styled from "styled-components";
import { LinkWork } from "../../../../components/link/LinkWork";

export type typeStutusTabs = "all" | "landing" | "react" | "spa"

type tabMenuPropsType = {
  tabsItems: Array<{ title: string, status: typeStutusTabs }>
  changeFilterStatus: (value:  typeStutusTabs ) => void
  curentFilterStatus: typeStutusTabs
  
}

export const TabMenu = (props: tabMenuPropsType ) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item, index: number) => {
          return <ListItem key={index}>
            <LinkWork active={props.curentFilterStatus === item.status} as= {"button"} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</LinkWork>
          </ListItem>

        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
ul{
    display: flex;
    /* gap: 20px; */
    justify-content: space-between;
    max-width: 352px;
    width:100%;
    margin: 0 auto 40px;

}

`

const ListItem = styled.li`


`





