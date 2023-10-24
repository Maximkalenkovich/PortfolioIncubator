import React from "react";
import { styled } from "styled-components";
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from "../../components/menu/FlexWrapper";
import { theme } from "../../styles/Theme";


export const Footer = () => {
    return (

        <StyledFooter>
            <FlexWrapper direction="column" align="center">
            <Name>Maksim </Name>
            <SocialList>
                <SocialItems>
                    <SocialLink>
                        <Icon iconId="instagram" width="21px" height="21px" viewBox="0 0 21 21"/>
                    </SocialLink>
                </SocialItems>
                <SocialItems>
                    <SocialLink>
                        <Icon iconId="telegram" width="21px" height="21px" viewBox="0 0 21 21" />
                    </SocialLink>
                </SocialItems>
                <SocialItems>
                    <SocialLink>
                        <Icon iconId="linkedin" width="21px" height="21px" viewBox="0 0 21 21"/>
                    </SocialLink>
                </SocialItems>
                <SocialItems>
                    <SocialLink>
                        <Icon iconId="vk" width="21px" height="21px" viewBox="0 0 21 21"/>
                    </SocialLink>
                </SocialItems>
              

                </SocialList>
                <Copyright>© 2023 Maksim Kalenkovich, All Rights Reserved.</Copyright>
                </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
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
