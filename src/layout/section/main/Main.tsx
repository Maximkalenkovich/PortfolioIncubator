import React from "react"
import styled from "styled-components";
import avatar from "../../../accept/images/avatar.webp"
import{ FlexWrapper }  from "../../../components/menu/FlexWrapper";
import { Containers } from "../../../components/slider/Containers";
import { theme } from "../../../styles/Theme";
import { font } from '../../../styles/Common';

export const Main = () => {
    return(
        <StyledMain>
            <Containers >
            <FlexWrapper justify={"space-around"} align={"center"} wrap="wrap">
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
    margin-top: 65px;

    &::before{
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        @media ${theme.media.mobile}{
            top: -17px;
            left:20px;
            width:314px;
            width:314px;
        }
    }
`


const Photo = styled.img`
width: 350px;
height: 430px;
object-fit: cover;

margin-right: 20px;

@media ${theme.media.mobile} {
  width:310px;
  height: 380px;

}
`



const Name = styled.h2`
${font({family: "'Josefin Sans', sans-serif", weight: 500, fmax: 45, fmin:36})}

/* font-family: "Josefin Sans", sans-serif;
font-size: 45px;
font-weight: 500; */
letter-spacing: 0.05rem;
margin: 10px 0;

span{
    position: relative;
       z-index: 0;
white-space: nowrap;
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

@media ${theme.media.mobile} {

    margin: 15px 0 22px;
}
`

const MainTitle = styled.h1`
${font({fmax: 27, fmin: 20, weight: 400})}

/* font-size: 27px;
font-weight: 400; */

`

const SmallText = styled.h2`
font-size: 14px;
font-weight: 400;

`