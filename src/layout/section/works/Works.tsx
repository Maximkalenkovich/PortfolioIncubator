import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, typeStutusTabs } from "./work/TabMenu";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../accept/images/proj-1.webp"
import timerImg from "../../../accept/images/proj-2.png"
import { Containers } from "../../../components/slider/Containers";
import { S } from "./work/WorksStyles";
import { useState } from "react";




const tabsItems: Array<{title: string, status: typeStutusTabs}> = [
    {
       title: "all",
       status:"all" 
    },
    {
        title: "landing page",
        status:"landing" 
     },
     {
        title: "react",
        status:"react" 
     },
     {
        title: "spa",
        status:"spa" 
     }
]

const workData = [
    {
        src: socialImg,
        title: "Social Network",
        type: "spa",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        src: timerImg,
        title: "Timer",
        type: "react",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    }
]
export const Works: React.FC = () => {
    const [curentFilterStatus, setCurentFilterStatus] = useState<typeStutusTabs>("all")
    let filteredWorks = workData

    if (curentFilterStatus === "landing") {
        filteredWorks = workData.filter(work => work.type === "landing");
    };

        if (curentFilterStatus === "react") {
            filteredWorks = workData.filter(work => work.type === "react")
        };

            if (curentFilterStatus === "spa") {
                filteredWorks = workData.filter(work => work.type === "spa")

    };



    function changeFilterStatus(value: typeStutusTabs) {
  setCurentFilterStatus(value)
    }


    return (
        <S.Works id="works">
            <Containers>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}  
                changeFilterStatus={changeFilterStatus}
                curentFilterStatus = {curentFilterStatus} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={'wrap'}>
                    {filteredWorks.map((w, index: number) => {
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

