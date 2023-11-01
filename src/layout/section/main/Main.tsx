import React from "react"
import avatar from "../../../accept/images/avatar.webp"
import{ FlexWrapper }  from "../../../components/menu/FlexWrapper";
import { Containers } from "../../../components/slider/Containers";
import { S } from "./MainStyles";


export const Main: React.FC = () => {
    return(
        <S.Main>
            <Containers >
            <FlexWrapper justify={"space-around"} align={"center"} wrap="wrap">
            <div>
                <S.SmallText>Hi There</S.SmallText>
                <S.Name>I am<span>Maksim Kalenkovich</span></S.Name>
                <S.MainTitle>A Web Developer</S.MainTitle>
            </div>
        <S.PhotoWrapper>
            <S.Photo src={avatar} alt="avatar"/>
            </S.PhotoWrapper>
            </FlexWrapper>
            </Containers>

        </S.Main>

    );
};

