import { css, styled } from "styled-components"
import { theme } from "../../../styles/Theme"
import { Link } from "react-scroll"


const NavLink = styled(Link)`
text-align: center;
font-family:"Josefin Sans", sans-serif;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 55px; /* 110% */
color: transparent;
cursor: pointer;
`

const Mask = styled.span`
position: absolute;
top:0;
left:0;
display: inline-block;
height: 50%;
overflow: hidden;
//outline: 1px solid red;
color: ${theme.colors.accent};
cursor: pointer;
transition: 0.2s ease-in-out;

& + & {
  top: 50%;
  span{
    display: inline-block;
    transform: translateY(-50%);
    
  }
}
`


const ListItem = styled.li`
position: relative;

&::before{
  content: "";
  display: inline-block;
  height: 3px;
  background-color: ${theme.colors.accent};

   position: absolute;
   top: 50%;
   left: -10px;
   right: -10px;
   z-index: 1;

   transform: scale(0);
   transition: 0.2s ease-in-out;
   }


&:hover {
  &::before{
    transform: scale(1);
  }
  ${Mask} {
    transform: skewX(12deg) translateX(5px) ;
    color: ${theme.colors.font};
    &+${Mask}{
      transform: skewX(12deg) translateX(-5px);

    }
  }
}
`

//mobile menu

const MobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  background-color: rgba(31, 31, 32, 0.9);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;



  display: none;

  ${props => props.isOpen && css<{isOpen: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
    
  `}
ul{
justify-content: center;
display: flex;
gap: 50px;
flex-direction: column;
align-items: center;
}

`

const BurgerButton = styled.button<{isOpen: boolean}>`
position:fixed;
top: -100px;
right: -100px;
width:200px;
height: 200px;
z-index: 9999999;


span{
    display: block;
    width:36px;
    height: 2px;
    background-color:${theme.colors.font};
    position: absolute;
    left:40px;
    bottom: 50px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba{255, 255, 255, 0};  
    `}


    &::before{
        content: "";
        display: block;
        width:36px;
    height: 2px;
   background-color:${theme.colors.font};
    position: absolute;
  transform: translateY(-10px);

  ${props => props.isOpen && css<{isOpen: boolean}>`
transform: rotate(-45deg) translateY(0);

`}

    }

    &::after{
        content: "";
        display: block;
        width:36px;
    height: 2px;
    background-color:${theme.colors.font};
    position: absolute;
  transform: translateY(10px);


  ${props => props.isOpen && css<{isOpen: boolean}>`
transform: rotate(45deg) translateY(0);
width: 36px;

`}
}
}`

//desktop Menu


const DesktopMenu = styled.nav`

ul{
justify-content: center;
display: flex;
gap: 50px;
}


@media ${theme.media.tablet}{
display: none;

}
`

export const S = {
    NavLink,
    ListItem,
    Mask,
    MobileMenu,
    MobileMenuPopup ,
    BurgerButton,
    DesktopMenu
}