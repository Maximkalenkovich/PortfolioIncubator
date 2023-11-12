import React from "react"
import avatar from "../../../accept/images/avatar.webp"
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { Containers } from "../../../components/slider/Containers";
import { S } from "./MainStyles";
import Typewriter from "typewriter-effect"


export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Containers >
                <FlexWrapper justify={"space-around"} align={"center"} wrap="wrap">
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am<span>Maksim Kalenkovich</span></S.Name>
                        {/* <S.MainTitle>A Web Developer</S.MainTitle> */}
                        <S.MainTitle>
                             <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ["A Web Developer", "A Frontend Developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={avatar} alt="avatar" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Containers>

        </S.Main>

    );
};

