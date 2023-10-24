import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./work/TabMenu";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { Work } from "./work/Work";
import  socialImg from  "../../../accept/images/proj-1.webp"
import  timerImg from  "../../../accept/images/proj-2.png"
import { Containers } from "../../../components/slider/Containers";

const worksItems =["all","landing page","react","spa"]
export const Works = () => {
return(
    <StyledWorks>
        <Containers>
        <SectionTitle>My Works</SectionTitle>
           <TabMenu menuItems={worksItems} />
          <FlexWrapper justify="space-between" align="flex-start">
            <Work src={socialImg} title = {"Social Network"} text = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
            <Work src={timerImg} title = {"Timer"}  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
          </FlexWrapper>
          </Containers>
    </StyledWorks>



);
};

const StyledWorks = styled.section`
    min-height: 80vh;
    background-color: #b4b45a;
    list-style: none;


`