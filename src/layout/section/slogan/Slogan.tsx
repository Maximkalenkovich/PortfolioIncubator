import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";
import { Containers } from "../../../components/slider/Containers";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";


export const Slogan = () => {
    return(
        <StyledSlogan>
            <Containers>
                <FlexWrapper direction="column" align="center">
            <SectionTitle>I Am Available For Freelance</SectionTitle>
        <Button>HIRE ME</Button>
        </FlexWrapper>
        </Containers>
        </StyledSlogan>

    );
};

const StyledSlogan = styled.section` 
`
