import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./work/TabMenu";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../accept/images/proj-1.webp"
import timerImg from "../../../accept/images/proj-2.png"
import { Containers } from "../../../components/slider/Containers";
import { S } from "./work/WorksStyles";

const worksItems = ["all", "landing page", "react", "spa"]


const workData = [
    {
        src: socialImg,
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        src: timerImg,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    }
]
export const Works: React.FC = () => {
    return (
        <S.Works>
            <Containers>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={'wrap'}>
                    {workData.map((w, index: number) => {
                        return (
                            <Work
                                src={w.src}
                                title={w.title}
                                text={w.text} />
                        )
                    })}
                </FlexWrapper>
            </Containers>
        </S.Works>



    );
};

