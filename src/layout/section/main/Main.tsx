import React from "react"
import styled from "styled-components";
import avatar from "../../../accept/images/avatar.webp"
import{ FlexWrapper }  from "../../../components/menu/FlexWrapper";
import { Containers } from "../../../components/slider/Containers";
import { theme } from "../../../styles/Theme";

export const Main = () => {
    return(
        <StyledMain>
            <Containers >
            <FlexWrapper justify="space-between" align="center">
            <div>
                <SmallText>Hi There</SmallText>
                <Name>I am<span>Maksim Kalenkovich</span></Name>
                <MainTitle>A Web Developer</MainTitle>
            </div>
        <PhotoWrapper>
            <Photo src={avatar} alt="avatar"/>
            </PhotoWrapper>
            </FlexWrapper>
            </Containers>

        </StyledMain>

    );
};

const StyledMain = styled.section`
height: 100vh;
display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before{
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`


const Photo = styled.img`
width: 350px;
height: 430px;
object-fit: cover;   
`



const Name = styled.h2`
font-family: Josefin Sans, sans-serif;
font-size: 45px;
font-weight: 500;
letter-spacing: 2.5px;
margin: 10px 0;

span{
    position: relative;
       z-index: 0;

    &::before {
        content:"";
        display: inline-block;
        width:100%;
        height: 20px;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom: 0;
        z-index: -1;

    }
}
`

const MainTitle = styled.h1`
font-size: 27px;
font-weight: 400;

`

const SmallText = styled.h2`
font-size: 14px;
font-weight: 400;
`