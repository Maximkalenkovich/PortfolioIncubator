import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { IconWrapper } from "../skills/Skill";


export const Testimony = () => {

    return(
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction="column" align="center">
            
            <IconWrapper>
            <Icon iconId={"quote"}/>
            </IconWrapper>

            <Slider />
            </FlexWrapper>
        </StyledTestimony>

    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
   

   ${IconWrapper}{
    margin:40px 0 72px;
   }
`