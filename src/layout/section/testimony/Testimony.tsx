import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { S } from "../skills/SkillsStyles"
import { Containers } from "../../../components/slider/Containers";


export const Testimony: React.FC = () => {

    return (
        <StyledTestimony>
            <Containers>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" align="center">
                    <S.IconWrapper>
                        <Icon iconId={"quote"} />
                    </S.IconWrapper>
                    <Slider />
                </FlexWrapper>
            </Containers>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
min-height: 50vh;
   ${S.IconWrapper}{
    margin:40px 0 72px;
   }
`