import React from "react"
import {S} from '../HeaderMenu_Styles'

const Items = [
  {
    title: "Home",
    href: "home"
  },
  {
    title: "Skills",
    href: "skills"
  },
  {
    title: "Works",
    href: "works"
  },
  {
    title: "Testimony",
    href: "testimony"
  },
  {
    title: "Contact",
    href: "Contact"
  }
]

export const Menu: React.FC = () => {
    return (  
  <ul>
        {Items.map((item, index: number) => {
          return <S.ListItem key={index}>
            <S.NavLink to={item.href}
              smooth={true}>
              {item.title}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.ListItem>
        })}
  </ul>


  );
};

