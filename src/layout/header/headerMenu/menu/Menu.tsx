import React from "react"
import {S} from '../HeaderMenu_Styles'

const Items = ["Home","Skills","Works","Testimony","Contact"]

export const Menu: React.FC = () => {
    return (  
  <ul>
        {Items.map((item: string, index: number) => {
          return <S.ListItem key={index}>
            <S.Link href="">
              {item}
              <S.Mask>
                <span>{item}</span>
              </S.Mask>
              <S.Mask>
                <span>{item}</span>
              </S.Mask>
            </S.Link>
          </S.ListItem>
        })}
  </ul>


  );
};

