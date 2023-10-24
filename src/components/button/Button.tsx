import styled from "styled-components";
import { theme } from "../../styles/Theme";


export const Button = styled.button`
font-size: 14px;
font-weight: 400;
letter-spacing: 1px;
text-transform: uppercase;
height: 50px;
width: 170px;


position: relative;

z-index: 0;

&:hover{
    &::before{
        content: '';
        //background-color: ${theme.colors.accent};
        width: 100%;
        height: 100%;
        z-index: -1;
    }
}

&::before{
    content:'';
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 0;
    left:50%;
    transform: translateX(-50%)
}
`