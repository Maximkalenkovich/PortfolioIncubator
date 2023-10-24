import { styled } from "styled-components";
import { FlexWrapper } from "../menu/FlexWrapper";
import { theme } from "../../styles/Theme";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@IVAN IVANOW</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className="active"></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
border: 1px solid red;

    `
const Slide = styled.div`
    text-align: center;
`
const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-size: 16px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
margin-top: 22px;
margin-bottom: 42px;
display: inline-block;
`
const Text = styled.p`
    
`

const Pagination = styled.div`
    span{
        display: inline-block;
        width: 7px;
        height: 7px;
        
        border-radius: 20px;
background-color: rgba(255, 255, 255, 0.50);

&.active{
background-color: ${theme.colors.accent};
width: 20px;
}

&+span{
    margin-left: 5px;
};
    };


`