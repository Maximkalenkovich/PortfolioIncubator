import React from "react"
import styled from "styled-components"
import { FlexWrapper } from "../../../components/menu/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./Skill"
import { Containers } from "../../../components/slider/Containers"



export const Skills = () => {
    return (
        <StyledSkills>
            <Containers>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap="wrap">
                    <Skill iconId={"code"} title={"HTML5"} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim" />
                    <Skill iconId={"css"} title={"CSS"} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim" />
                    <Skill iconId={"react"} title={"REACT"} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim" />
                    <Skill iconId={"typescript"} title={"typescrtipt"} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim" />
                    <Skill iconId={"styledcomponents"} title={"Styled Components"} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim" />
                    <Skill iconId={"figma"} title={"Web Design"} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim" />

                </FlexWrapper >


            </Containers>

        </StyledSkills>
    )
}

const StyledSkills = styled.section`

`