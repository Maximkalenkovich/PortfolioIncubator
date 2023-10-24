import React from "react"
import { styled } from "styled-components";
import { LinkWork } from "../../../../components/link/LinkWork";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/button/Button";


type WorkPropsType ={
title: string
text: string
src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork> 

            <ImageWrapper>
            <Image src={props.src} alt="" />
            <Button>view project</Button>
            </ImageWrapper>


            <Description><Title>{props.title}</Title>
             <Text>{props.text}</Text>
             <LinkWork href="#">Demo</LinkWork>
             <LinkWork href="#">Code</LinkWork>
             </Description>
            
             
        </StyledWork>
        );
};

const StyledWork = styled.div`
background-color: ${theme.colors.secondaryBg};
max-width: 540px;
width: 100%;

${LinkWork} {
    padding: 10px 0;

   & + ${LinkWork}{
     margin-left: 20px;
   }
}
`
const ImageWrapper = styled.div`
    position: relative;

&:hover{
${Button}{
    opacity: 1;
}
    &::before{
        background: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(4px);
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    }

    ${Button}{
        opacity: 0;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%);

         &::before{
            width: 100%;
            height: 100%;
         }
    }
    `

const Image = styled.img`
object-fit: cover;  
`
const Title = styled.h3`
    
`
const Text = styled.p`
margin: 14px 0 10px;
    
`
const Description = styled.div`
padding: 25px 20px;
    
`