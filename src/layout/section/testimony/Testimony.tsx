import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { IconWrapper } from "../skills/Skill";
import { Containers } from "../../../components/slider/Containers";


export const Testimony = () => {

    return(
        <StyledTestimony>

            <Containers>
            <SectionTitle>Testimony</SectionTitle>

<FlexWrapper direction="column" align="center">

<IconWrapper>
<Icon iconId={"quote"}/>
</IconWrapper>

<Slider />
</FlexWrapper>
            </Containers>
           
        </StyledTestimony>

    );
};

const StyledTestimony = styled.section`
   

   ${IconWrapper}{
    margin:40px 0 72px;
   }
`