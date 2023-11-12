import { FlexWrapper } from "../../../components/menu/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./Skill"
import { Containers } from "../../../components/slider/Containers"
import { S } from "./SkillsStyles"


const SkillData = [
    {
        iconId: "code",
        title: "HTML5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "css",
        title: "CSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "react",
        title: "REACT",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "typescript",
        title: "typescrtipt",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "styledcomponents",
        title: "Styled Components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "figma",
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }
]

export const Skills = () => {
    return (


        <S.Skills id="skills">
            <Containers>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap="wrap">

                    {SkillData.map((s, index: number) => {
                        return (
                            <Skill iconId={s.iconId} key={index}
                                title={s.title}
                                description={s.description} />

                        )

                    })}
                </FlexWrapper >
            </Containers>
        </S.Skills>
    )
}

