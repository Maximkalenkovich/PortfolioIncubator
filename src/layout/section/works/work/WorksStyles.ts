import { styled } from "styled-components";
import { FlexWrapper } from "../../../../components/menu/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import { LinkWork } from "../../../../components/link/LinkWork";
import { Button } from "../../../../components/button/Button";



const Works = styled.section`

${FlexWrapper}{
    gap:30px;
}
`

//work

const Work = styled.div`
background-color: ${theme.colors.secondaryBg};
max-width: 540px;
width: 330px;
flex-grow: 1;

${LinkWork} {
    padding: 10px 0;

   & + ${LinkWork}{
     margin-left: 20px;
   }
}

@media ${theme.media.desktop}{
max-width: 540px;
}

`

const ImageWrapper = styled.div`
    position: relative;

    ${Button}{
        opacity: 0;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%);
        transition: 0.2s ease-in-out;

         &::before{
            width: 100%;
            height: 100%;
         }
    }

    &::before{
        content: '';
        background: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(4px);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
        transition: 0.2s ease-in-out;
    }
    
    

&:hover{
    &::before{
    opacity:1;
    }


${Button}{
    opacity: 1;
}
  }

  @media ${theme.media.tablet}{
    &::before{
    opacity:1;
    }
    
${Button}{
    opacity: 1;
}

  }


    `

const Image = styled.img`
width: 100%;
height: 268px;
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
export const S = {
Work,
Works,
ImageWrapper,
Image,
Title,
Text,
Description

}