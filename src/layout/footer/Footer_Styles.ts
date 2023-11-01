import { styled } from "styled-components"
import { theme } from "../../styles/Theme"


const Footer = styled.footer`
background-color:${theme.colors.primaryBg} ;
padding: 20px 0;
background-position-y: 50px ;
`
const Name = styled.span`
font-family: 'Josefin Sans', 'sans-serif';
font-size: 22px;
font-weight: 700;
letter-spacing: 3px;
    
`
const SocialList = styled.ul`
gap: 20px;
margin: 30px 0;
display: flex;

    
`
const SocialItems = styled.li`


`
const SocialLink = styled.a`
display: flex;
background-color: rgba(255, 255, 255, 0.1);
border-radius: 50%;
width: 40px;
height: 40px;

align-items: center;
justify-content: center;
color: ${theme.colors.accent};

&:hover{
    color:${theme.colors.primaryBg} ;
    background-color: ${theme.colors.accent};
    transform: translateY(-4px);
    cursor: pointer;
}



    
`
const Copyright = styled.small`
color: rgba(255, 255, 255, 0.50);
font-size: 12px;
font-weight: 400;
    
`


export const S = {
Footer,
SocialItems,
SocialLink,
SocialList,
Copyright,
Name

}